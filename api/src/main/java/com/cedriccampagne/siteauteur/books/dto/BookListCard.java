package com.cedriccampagne.siteauteur.books.dto;

import java.time.LocalDateTime;

public record BookListCard(
        Long id,
        String coverUrl,
        String title,
        String slug,
        String excerpt,
        LocalDateTime publishedAt
) {
}
