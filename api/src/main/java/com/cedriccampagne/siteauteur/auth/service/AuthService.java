package com.cedriccampagne.siteauteur.auth.service;

import com.cedriccampagne.siteauteur.auth.dto.*;
import com.cedriccampagne.siteauteur.auth.exception.InvalidCredentialsException;
import com.cedriccampagne.siteauteur.roles.Role;
import com.cedriccampagne.siteauteur.users.entity.User;
import com.cedriccampagne.siteauteur.users.exception.EmailAlreadyUsedException;
import com.cedriccampagne.siteauteur.users.exception.UsernameAlreadyUsedException;
import com.cedriccampagne.siteauteur.users.mapper.UserMapper;
import com.cedriccampagne.siteauteur.users.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public RegisterResponse register(RegisterRequest request){

        if (userRepository.findByEmail(request.email()).isPresent()){
            throw new EmailAlreadyUsedException("Email déjà utilisé");
        }

        if(userRepository.findByUsername(request.username()).isPresent()) {
            throw new UsernameAlreadyUsedException("Username déjà utilisé");
        }

        User user = userMapper.toUser(request);

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setIsActive(true);
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());
        user.setRole(Role.USER);
        User saved = userRepository.save(user);

        return userMapper.toRegisterResponse(saved);
    }

    public LoginResult login(LoginRequest request) {

        Authentication authentication =
                new UsernamePasswordAuthenticationToken(
                        request.email(),
                        request.password()
                );

        try {
            authenticationManager.authenticate(authentication);
        } catch (AuthenticationException exception) {
            throw new InvalidCredentialsException(("Identifiants invalides"));
        }

        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() ->
                        new InvalidCredentialsException("Identifiants invalides")
                );

        LoginResponse loginResponse = userMapper.toLoginResponse(user);

        String token = jwtService.generateToken(user);

        return new LoginResult(loginResponse, token);

    }

    public CurrentUserResponse getCurrentUser(Authentication authentication){

        if (authentication == null || !(authentication.getPrincipal() instanceof User user)) {
            throw new InvalidCredentialsException("Utilisateur non authentifié");
        }

        return userMapper.toCurrentResponse(user);
    }
}
