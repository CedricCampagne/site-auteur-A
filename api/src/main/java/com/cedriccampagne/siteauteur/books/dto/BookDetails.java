package com.cedriccampagne.siteauteur.books.dto;

import jakarta.persistence.Column;

import java.time.LocalDateTime;

public record BookDetails(
        Long id,
        String title,
        String slug,
        String author,
        String summary,
        String excerpt,
        LocalDateTime publishedAt,
        String publisher,
        String genre,
        String coverUrl

) {
}
