package com.cedriccampagne.siteauteur.chronicles.entity;

import com.cedriccampagne.siteauteur.comments.entity.Comment;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "chronicles")
public class Chronicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 255)
    private String title;

    @Column(nullable = false, unique = true, length = 255)
    private String slug;

    @Column(nullable = false)
    private String quote;

    @Column(nullable = false)
    private String summary;

    @Column(nullable = false)
    private String content;

    @Column(name = "cover_url", nullable = false, length = 255)
    private String coverUrl;

    @Column(name = "published_at",nullable = false)
    private LocalDateTime publishedAt;

    @Column(name ="is_active", nullable = false)
    private Boolean isActive;

    @Column(name = "created_at",nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "chronicle")
    private List<Comment> comments;

}
