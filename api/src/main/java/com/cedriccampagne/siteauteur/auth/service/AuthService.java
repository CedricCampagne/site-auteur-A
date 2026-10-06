package com.cedriccampagne.siteauteur.auth.service;

import com.cedriccampagne.siteauteur.auth.dto.*;
import com.cedriccampagne.siteauteur.auth.exception.InvalidCredentialsException;
import com.cedriccampagne.siteauteur.roles.Role;
import com.cedriccampagne.siteauteur.users.entity.User;
import com.cedriccampagne.siteauteur.users.exception.EmailAlreadyUsedException;
import com.cedriccampagne.siteauteur.users.exception.UsernameAlreadyUsedException;
import com.cedriccampagne.siteauteur.users.mapper.UserMapper;
import com.cedriccampagne.siteauteur.users.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(
            UserRepository userRepository,
            UserMapper userMapper,
            PasswordEncoder passwordEncoder,
            JwtService jwtService
    ) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

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

        User user = userRepository.findByEmail(request.email())
                .orElseThrow(()-> new InvalidCredentialsException("Identifiants invalides"));

        if(!passwordEncoder.matches(request.password(), user.getPassword())){
            throw new InvalidCredentialsException("Identifiants invalides");
        }

        LoginResponse loginResponse = userMapper.toLoginResponse(user);
        String token = jwtService.generateToken(user);

        return new LoginResult(loginResponse, token);
    }
}
