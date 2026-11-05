package com.cedriccampagne.siteauteur.comments.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record CommentCreateRequest(
        @NotBlank
        @Size(min= 5, message = "Le comentaire doit contenir au moins 5 caractères.")
        String content,

        @NotNull
        Long chronicleId
) {
}
