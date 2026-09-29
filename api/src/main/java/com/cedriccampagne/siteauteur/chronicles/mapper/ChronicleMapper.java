package com.cedriccampagne.siteauteur.chronicles.mapper;

import com.cedriccampagne.siteauteur.chronicles.dto.ChronicleCard;
import com.cedriccampagne.siteauteur.chronicles.entity.Chronicle;
import org.springframework.stereotype.Component;

@Component
public class ChronicleMapper {

    public ChronicleCard toChronicleCard(Chronicle chronicle) {
        return  new ChronicleCard(
                chronicle.getTitle(),
                chronicle.getQuote(),
                chronicle.getSummary(),
                chronicle.getCoverUrl()
        );
    }
}
