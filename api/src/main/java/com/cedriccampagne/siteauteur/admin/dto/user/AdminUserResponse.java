package com.cedriccampagne.siteauteur.admin.dto.user;

import java.time.LocalDateTime;

public record AdminUserResponse(
        Long id,
        String username,
        String email,
        LocalDateTime createdAt,
        Boolean isActive
) {
}
