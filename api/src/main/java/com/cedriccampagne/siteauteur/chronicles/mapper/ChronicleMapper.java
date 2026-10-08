package com.cedriccampagne.siteauteur.chronicles.mapper;

import com.cedriccampagne.siteauteur.admin.dto.chronicle.AdminChronicleResponse;
import com.cedriccampagne.siteauteur.admin.dto.chronicle.AdminChronicleUpdateRequest;
import com.cedriccampagne.siteauteur.admin.dto.chronicle.AdminChronicleUpdateResponse;
import com.cedriccampagne.siteauteur.admin.dto.chronicle.AdminCreateChronicleRequest;

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

    public Chronicle toChronicle(AdminCreateChronicleRequest request) {
        Chronicle chronicle = new Chronicle();

        chronicle.setTitle(request.title());
        chronicle.setQuote(request.quote());
        chronicle.setSummary(request.summary());
        chronicle.setContent(request.content());
        chronicle.setCoverUrl(request.coverUrl());
        chronicle.setPublishedAt(request.publishedAt());
        chronicle.setIsActive(request.isActive());

        return chronicle;
    }

    public AdminChronicleResponse toAdminResponse(Chronicle chronicle) {
        return new AdminChronicleResponse(
                chronicle.getId(),
                chronicle.getTitle(),
                chronicle.getPublishedAt(),
                chronicle.getIsActive()
        );
    }

    public void updateChronicleForAdmin(AdminChronicleUpdateRequest request, Chronicle chronicle) {
        chronicle.setTitle(request.title());
        chronicle.setQuote(request.quote());
        chronicle.setSummary(request.summary());
        chronicle.setContent(request.content());
        chronicle.setCoverUrl(request.coverUrl());
        chronicle.setPublishedAt(request.publishedAt());
        chronicle.setIsActive(request.isActive());
    }

    public AdminChronicleUpdateResponse toAdminUpdateResponse( Chronicle chronicle) {
        return new AdminChronicleUpdateResponse(
                chronicle.getId(),
                chronicle.getTitle(),
                chronicle.getSlug(),
                chronicle.getQuote(),
                chronicle.getSummary(),
                chronicle.getContent(),
                chronicle.getCoverUrl(),
                chronicle.getPublishedAt(),
                chronicle.getIsActive(),
                chronicle.getUpdatedAt()
        );
    }
}
