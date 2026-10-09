package com.cedriccampagne.siteauteur.auth.dto;

import com.cedriccampagne.siteauteur.roles.Role;

public record CurrentUserResponse(
        Long id,
        String username,
        String email,
        Role role
) {
}
