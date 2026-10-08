package com.cedriccampagne.siteauteur.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RegisterRequest(
        @NotBlank
        @Size(min = 3, max = 50)
        String username,

        @Email
        @NotBlank
        @Size(max = 50)
        String email,

        @NotBlank
        @Size(min = 12, max = 200)
        String password
) {
}
