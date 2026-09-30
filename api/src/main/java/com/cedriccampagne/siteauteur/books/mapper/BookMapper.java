package com.cedriccampagne.siteauteur.books.mapper;

import com.cedriccampagne.siteauteur.books.dto.BookCard;
import com.cedriccampagne.siteauteur.books.dto.BookExcerpt;
import com.cedriccampagne.siteauteur.books.dto.BookLatest;

import com.cedriccampagne.siteauteur.books.dto.BookListCard;
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
                book.getExcerpt(),
                book.getPublishedAt()
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

    public BookExcerpt toBookExcerpt(Book book){
        return new BookExcerpt(
                book.getId(),
                book.getTitle(),
                book.getExcerpt()
        );
    }

    public BookListCard toBookListCard(Book book) {
        return new BookListCard(
                book.getId(),
                book.getCoverUrl(),
                book.getTitle(),
                book.getExcerpt(),
                book.getPublishedAt()
        );
    }
}
