package com.cedriccampagne.siteauteur.admin.dto.chronicle;

import java.time.LocalDateTime;

public record AdminChronicleResponse(
        Long id,
        String title,
        LocalDateTime publishedAt,
        Boolean isActive
) {
}
