package com.cedriccampagne.siteauteur.books.mapper;

import com.cedriccampagne.siteauteur.books.dto.BookCard;
import com.cedriccampagne.siteauteur.books.dto.BookLatest;

import com.cedriccampagne.siteauteur.books.entity.Book;

import org.springframework.stereotype.Component;

@Component
public class BookMapper {

    public BookLatest toBookLatest(Book book) {
        return new BookLatest(
                book.getId(),
                book.getCoverUrl(),
                book.getTitle(),
                book.getPublisher(),
                book.getSummary(),
                book.getExcerpt()
        );
    }

    public BookCard toBookCard(Book book) {
        return  new BookCard(
                book.getId(),
                book.getCoverUrl(),
                book.getTitle(),
                book.getPublishedAt()
        );
    }

}
