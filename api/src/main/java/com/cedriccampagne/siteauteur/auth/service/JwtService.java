package com.cedriccampagne.siteauteur.auth.service;

import com.cedriccampagne.siteauteur.users.entity.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;

import javax.crypto.SecretKey;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;


@Service
@RequiredArgsConstructor
public class JwtService {

    @Value("${spring.security.jwt.secret-key}")
    private String secretKey;

    @Value("${spring.security.jwt.expiration}")
    private long jwtExpiration;

    private SecretKey getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String generateToken(User user){

        Map<String, Object> claims = new HashMap<>();

        claims.put("role", user.getRole());

        return buildToken(claims, user.getEmail());
    }

    private String buildToken(Map<String, Object> extraClaims, String subject){
        return Jwts.builder()
                .claims(extraClaims)
                .subject(subject)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .signWith(getSignInKey())
                .compact();
    }

}
