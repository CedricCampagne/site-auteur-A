package com.cedriccampagne.siteauteur.books.dto;

public record BookLatest(
        Long id,
        String coverUrl,
        String title,
        String publisher,
        String summary,
        String excerpt
) {
}
