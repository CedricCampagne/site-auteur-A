package com.cedriccampagne.siteauteur.chronicles.dto;

import com.cedriccampagne.siteauteur.comments.entity.Comment;

import java.time.LocalDateTime;
import java.util.List;

public record ChronicleDetails(

        Long id,
        String title,
        String slug,
        String quote,
        String content,
        String coverUrl,
        LocalDateTime publishedAt
) {}