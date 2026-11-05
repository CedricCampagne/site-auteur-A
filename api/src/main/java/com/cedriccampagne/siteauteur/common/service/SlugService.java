package com.cedriccampagne.siteauteur.common.service;

import org.springframework.stereotype.Service;

import java.text.Normalizer;

@Service
public class SlugService {

    public String generateSlug(String text) {
        return Normalizer.normalize(text, Normalizer.Form.NFD)
                .replaceAll("\\p{M}", "")
                .toLowerCase()
                .replaceAll("[^a-z0-9]+", "-")
                .replaceAll("^-|-$", "");
    }
}
