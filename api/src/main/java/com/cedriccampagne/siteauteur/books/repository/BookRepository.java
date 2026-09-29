package com.cedriccampagne.siteauteur.books.repository;

import com.cedriccampagne.siteauteur.books.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> findAllByIsActiveTrueOrderByPublishedAtDesc();

}
