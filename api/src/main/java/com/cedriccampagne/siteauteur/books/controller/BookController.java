package com.cedriccampagne.siteauteur.books.controller;

import com.cedriccampagne.siteauteur.books.dto.BookDetails;
import com.cedriccampagne.siteauteur.books.dto.BookExcerpt;
import com.cedriccampagne.siteauteur.books.dto.BookListCard;
import com.cedriccampagne.siteauteur.books.dto.HomeBooksResponse;
import com.cedriccampagne.siteauteur.books.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/books")
public class BookController {
    private final BookService bookService;

    @GetMapping
    public HomeBooksResponse getActiveBooks(){
        return bookService.getActiveBooks();
    }

    @GetMapping("/excerpts")
    public List<BookExcerpt> getActiveExcerpts(){
        return bookService.getActiveBookExcerpts();
    }

    @GetMapping("/list")
    public List<BookListCard> getactiveList(){return  bookService.getActiveBooksList();}

    @GetMapping("/{id}")
    public BookDetails getBookDetails(@PathVariable Long id) {
        return bookService.getActiveBookDetails(id);
    }
}
