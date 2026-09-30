package com.cedriccampagne.siteauteur.books.service;

import com.cedriccampagne.siteauteur.books.dto.*;
import com.cedriccampagne.siteauteur.books.entity.Book;
import com.cedriccampagne.siteauteur.books.mapper.BookMapper;
import com.cedriccampagne.siteauteur.books.repository.BookRepository;
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

    public List<BookExcerpt> getActiveBookExcerpts(){
        return bookRepository.findAllByIsActiveTrueOrderByPublishedAtDesc()
                .stream()
                .map(bookMapper::toBookExcerpt)
                .toList();
    }

    public List<BookListCard> getActiveBooksList(){
        return bookRepository.findAllByIsActiveTrueOrderByPublishedAtDesc()
                .stream()
                .map(bookMapper::toBookListCard)
                .toList();
    }
}
