package com.cedriccampagne.siteauteur.comments.dto;

import java.time.LocalDateTime;

public record CommentCard(
        Long id,
        String username,
        String content,
        LocalDateTime createdAt
) {
}
