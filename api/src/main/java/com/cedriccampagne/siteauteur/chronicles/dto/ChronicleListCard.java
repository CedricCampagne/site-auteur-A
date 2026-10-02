package com.cedriccampagne.siteauteur.chronicles.dto;

import java.time.LocalDateTime;

public record ChronicleListCard(
        Long id,
        String title,
        String slug,
        String quote,
        LocalDateTime publishedAt,
        String summary
) {
}
