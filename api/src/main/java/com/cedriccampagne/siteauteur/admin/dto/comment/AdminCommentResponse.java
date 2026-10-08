package com.cedriccampagne.siteauteur.admin.dto.comment;

public record AdminCommentResponse(
        Long id,
        String username,
        String chronicleTitle,
        String content,
        Boolean isVisible
) {
}
