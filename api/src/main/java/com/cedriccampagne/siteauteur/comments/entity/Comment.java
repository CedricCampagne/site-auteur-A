package com.cedriccampagne.siteauteur.comments.entity;

import com.cedriccampagne.siteauteur.chronicles.entity.Chronicle;
import com.cedriccampagne.siteauteur.users.entity.User;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String content;

    @Column(name ="is_visible", nullable = false)
    private Boolean isVisible;

    @Column(name = "created_at",nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @JoinColumn(name = "chronicle_id")
    @ManyToOne
    private Chronicle chronicle;
}
