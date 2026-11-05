package com.cedriccampagne.siteauteur.books.dto;

import java.time.LocalDateTime;

public record BookLatest(
        Long id,
        String coverUrl,
        String title,
        String slug,
        String publisher,
        String summary,
        String excerpt,
        LocalDateTime publishedAt
) {
}
