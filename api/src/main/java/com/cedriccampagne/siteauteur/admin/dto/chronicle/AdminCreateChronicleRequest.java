package com.cedriccampagne.siteauteur.admin.dto.chronicle;

import java.time.LocalDateTime;

public record AdminCreateChronicleRequest(

        String title,
        String quote,
        String summary,
        String content,
        String coverUrl,
        LocalDateTime publishedAt,
        Boolean isActive
) {
}
