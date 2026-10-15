package com.cedriccampagne.siteauteur.admin.dto.comment;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record AdminCommentUpdateRequest(
        @NotBlank
        @Size(min = 5, message = "Le commentaire doit contenir au moins 5 caractères.")
        String content,

        @NotNull
        Boolean isVisible
) {
}
