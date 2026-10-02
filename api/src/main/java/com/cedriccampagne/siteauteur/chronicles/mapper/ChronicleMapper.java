package com.cedriccampagne.siteauteur.chronicles.mapper;

import com.cedriccampagne.siteauteur.chronicles.dto.ChronicleCard;
import com.cedriccampagne.siteauteur.chronicles.dto.ChronicleDetails;
import com.cedriccampagne.siteauteur.chronicles.dto.ChronicleListCard;
import com.cedriccampagne.siteauteur.chronicles.entity.Chronicle;
import org.springframework.stereotype.Component;

@Component
public class ChronicleMapper {

    public ChronicleCard toChronicleCard(Chronicle chronicle) {
        return  new ChronicleCard(
                chronicle.getId(),
                chronicle.getTitle(),
                chronicle.getQuote(),
                chronicle.getSummary(),
                chronicle.getCoverUrl()
        );
    }

    public ChronicleListCard toChronicleListCard(Chronicle chronicle) {
        return new ChronicleListCard(
                chronicle.getId(),
                chronicle.getCoverUrl(),
                chronicle.getTitle(),
                chronicle.getSlug(),
                chronicle.getQuote(),
                chronicle.getPublishedAt(),
                chronicle.getSummary()
        );
    }

    public ChronicleDetails toChronicleDetails(Chronicle chronicle) {
        return new ChronicleDetails(
                chronicle.getId(),
                chronicle.getTitle(),
                chronicle.getSlug(),
                chronicle.getQuote(),
                chronicle.getContent(),
                chronicle.getCoverUrl(),
                chronicle.getPublishedAt()
        );
    }
}
