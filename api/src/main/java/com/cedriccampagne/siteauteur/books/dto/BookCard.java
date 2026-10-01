package com.cedriccampagne.siteauteur.books.dto;

import java.time.LocalDateTime;

public record BookCard(
        Long id,
        String coverUrl,
        String title,
        String slug,
        LocalDateTime publishedAt
)
{}
