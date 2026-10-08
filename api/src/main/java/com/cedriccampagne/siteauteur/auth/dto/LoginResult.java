package com.cedriccampagne.siteauteur.auth.dto;

public record LoginResult(
        LoginResponse response,
        String token
) {
}
