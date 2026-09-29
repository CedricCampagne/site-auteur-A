package com.cedriccampagne.siteauteur.books.service;

import com.cedriccampagne.siteauteur.books.dto.BookCard;
import com.cedriccampagne.siteauteur.books.dto.BookLatest;
import com.cedriccampagne.siteauteur.books.dto.HomeBooksResponse;
import com.cedriccampagne.siteauteur.books.entity.Book;
import com.cedriccampagne.siteauteur.books.mapper.BookMapper;
import com.cedriccampagne.siteauteur.books.repository.BookRepository;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookRepository bookRepository;
    private final BookMapper bookMapper;

    public BookService(BookRepository bookRepository, BookMapper bookMapper){
        this.bookRepository = bookRepository;
        this.bookMapper = bookMapper;
    }

    public HomeBooksResponse getActiveBooks() {
         List<Book> books = bookRepository.findAllByIsActiveTrueOrderByPublishedAtDesc();

         Book latest = books.getFirst();
         BookLatest latestBook = bookMapper.toBookLatest(latest);

         List<Book> otherBooks = books.subList(1, books.size());
         List<BookCard> cards = otherBooks.stream().map(bookMapper::toBookCard).toList();

         return new HomeBooksResponse(
                 latestBook,
                 cards
         );
    }
}
