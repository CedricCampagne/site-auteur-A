package com.cedriccampagne.siteauteur.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LoginRequest(
        @Email
        @NotBlank
        @Size(max = 50)
        String email,

        @NotBlank
        @Size(min = 12, max = 200)
        String password
) {
}
