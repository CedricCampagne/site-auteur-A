package com.cedriccampagne.siteauteur.chronicles.dto;

public record ChronicleCard(
        Long id,
        String title,
        String quote,
        String summary,
        String coverUrl
) {
}
