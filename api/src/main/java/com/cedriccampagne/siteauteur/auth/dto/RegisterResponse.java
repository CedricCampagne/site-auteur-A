package com.cedriccampagne.siteauteur.users.dto;

public record RegisterResponse(
        Long id,
        String username,
        String email
) {
}
