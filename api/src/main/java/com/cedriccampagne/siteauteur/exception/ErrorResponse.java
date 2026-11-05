package com.cedriccampagne.siteauteur.exception;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public record ErrorResponse(
        String message,
        int status,
        LocalDateTime timestamp,
        Map<String, List<String>> errors
) {
}
