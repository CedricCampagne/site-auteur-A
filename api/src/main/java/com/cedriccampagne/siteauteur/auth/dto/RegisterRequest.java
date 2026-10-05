package com.cedriccampagne.siteauteur.users.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RegisterRequest(
        @NotBlank
        @Size(min = 3, max = 50)
        String username,

        @NotBlank
        @Size(max = 50)
        String email,

        @NotBlank
        @Size(min = 12, max = 200)
        String password
) {
}
