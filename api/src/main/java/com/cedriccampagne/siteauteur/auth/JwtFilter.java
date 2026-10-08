package com.cedriccampagne.siteauteur.auth;

import com.cedriccampagne.siteauteur.auth.service.JwtService;
import com.cedriccampagne.siteauteur.users.entity.User;
import com.cedriccampagne.siteauteur.users.repository.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
public class JwtFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserRepository userRepository;

    public JwtFilter(JwtService jwtService, UserRepository userRepository){
        this.jwtService =jwtService;
        this.userRepository = userRepository;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {

        Cookie[] cookies = request.getCookies();
        String token = null;

        if (cookies != null){
            for (Cookie cookie : cookies) {
                if ("access_token".equals(cookie.getName())) {
                    token = cookie.getValue();
                    break;
                }
            }
        }

        if (token == null) {
            filterChain.doFilter(request, response);
            return;
        }

        if(!jwtService.isTokenValid(token)){
            filterChain.doFilter(request, response);
            return;
        }

        String email = jwtService.extractUsername(token);

        User user = userRepository.findByEmail(email)
                        .orElse(null);

        if (user == null) {
            filterChain.doFilter(request, response);
            return;
        }

        if(!user.getIsActive()) {
            filterChain.doFilter(request, response);
            return;
        }

        GrantedAuthority authority =
                new SimpleGrantedAuthority(
                  "ROLE_" + user.getRole().name()
                );

        List<GrantedAuthority> authorities = List.of(authority);

        Authentication authentication =
                new UsernamePasswordAuthenticationToken(
                        user,
                        null,
                        authorities
                );

        SecurityContextHolder
                .getContext()
                .setAuthentication(authentication);

        filterChain.doFilter(request, response);
    }
}
