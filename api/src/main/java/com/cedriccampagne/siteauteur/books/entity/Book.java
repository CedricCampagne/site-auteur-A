package com.cedriccampagne.siteauteur.books.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 255)
    private String title;

    @Column(nullable = false, unique = true, length = 255)
    private String slug;

    @Column(nullable = false, length = 255)
    private String author;

    @Column(nullable = false)
    private String summary;

    @Column(nullable = false)
    private String excerpt;

    @Column(name = "published_at",nullable = false)
    private LocalDateTime publishedAt;

    @Column
    private String publisher;

    @Column(nullable = false)
    private String genre;

    @Column(name = "cover_url", nullable = false, length = 255)
    private String coverUrl;

    @Column(name ="is_active", nullable = false)
    private Boolean isActive;

    @CreationTimestamp
    @Column(name = "created_at",nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

}
