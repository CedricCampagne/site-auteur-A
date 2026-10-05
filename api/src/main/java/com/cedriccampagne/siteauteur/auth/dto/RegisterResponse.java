package com.cedriccampagne.siteauteur.auth.dto;

public record RegisterResponse(
        Long id,
        String username,
        String email
) {
}
