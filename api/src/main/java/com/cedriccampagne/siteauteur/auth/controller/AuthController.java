package com.cedriccampagne.siteauteur.auth.controller;

import com.cedriccampagne.siteauteur.auth.dto.*;
import com.cedriccampagne.siteauteur.auth.service.AuthService;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Duration;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @Value("${spring.security.jwt.expiration}")
    private long jwtExpiration;

    @PostMapping("/register")
    public RegisterResponse register (@RequestBody @Valid RegisterRequest request){
        return authService.register(request);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login (
            @RequestBody @Valid LoginRequest request,
            HttpServletResponse response
    ) {
        LoginResult result = authService.login(request);

        ResponseCookie cookie = ResponseCookie
                .from("access_token", result.token())
                .httpOnly(true)
                .path("/")
                .maxAge(Duration.ofMillis(jwtExpiration))
                .build();

        response.addHeader(
                HttpHeaders.SET_COOKIE,
                cookie.toString()
        );

        return ResponseEntity.ok(result.response());
    }
}
