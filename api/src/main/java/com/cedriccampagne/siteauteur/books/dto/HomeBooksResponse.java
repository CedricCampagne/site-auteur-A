package com.cedriccampagne.siteauteur.books.dto;

import java.util.List;

public record HomeBooksResponse(
        BookLatest latestBook,
        List<BookCard> otherBooks
) {
}
