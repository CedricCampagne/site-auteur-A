package com.cedriccampagne.siteauteur.admin.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record AdminUpdateRequest (

        @NotBlank
        @Size(min = 3, max = 50)
        String username,

        @Email
        @NotBlank
        @Size(max = 50)
        String email
) {
}
