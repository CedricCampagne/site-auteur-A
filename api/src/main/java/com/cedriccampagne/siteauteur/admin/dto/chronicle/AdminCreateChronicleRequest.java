package com.cedriccampagne.siteauteur.admin.dto.chronicle;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;

public record AdminCreateChronicleRequest(

        @NotBlank
        @Size(max = 255)
        String title,

        @NotBlank
        String quote,

        @NotBlank
        String summary,

        @NotBlank
        String content,

        @NotBlank
        @Size(max = 255)
        String coverUrl,

        LocalDateTime publishedAt,

        @NotNull
        Boolean isActive
) {
}
