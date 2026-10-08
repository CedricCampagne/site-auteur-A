package com.cedriccampagne.siteauteur.admin.dto.comment;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record AdminCommentUpdateRequest(
        @NotBlank
        String content,

        @NotNull
        Boolean isVisible
) {
}
