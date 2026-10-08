package com.cedriccampagne.siteauteur.admin.dto.chronicle;

import java.time.LocalDateTime;

public record AdminChronicleUpdateResponse(
        Long id,
        String title,
        String slug,
        String quote,
        String summary,
        String content,
        String coverUrl,
        LocalDateTime publishedAt,
        Boolean isActive,
        LocalDateTime updatedAt
) {
}
