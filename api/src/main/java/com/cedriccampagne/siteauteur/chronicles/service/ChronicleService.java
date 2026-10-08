package com.cedriccampagne.siteauteur.chronicles.service;

import com.cedriccampagne.siteauteur.admin.dto.chronicle.AdminChronicleResponse;
import com.cedriccampagne.siteauteur.admin.dto.chronicle.AdminChronicleUpdateRequest;
import com.cedriccampagne.siteauteur.admin.dto.chronicle.AdminChronicleUpdateResponse;
import com.cedriccampagne.siteauteur.admin.dto.chronicle.AdminCreateChronicleRequest;

import com.cedriccampagne.siteauteur.chronicles.dto.ChronicleCard;
import com.cedriccampagne.siteauteur.chronicles.dto.ChronicleDetails;
import com.cedriccampagne.siteauteur.chronicles.dto.ChronicleListCard;

import com.cedriccampagne.siteauteur.chronicles.entity.Chronicle;

import com.cedriccampagne.siteauteur.chronicles.exception.ChronicleNotFoundException;
import com.cedriccampagne.siteauteur.chronicles.mapper.ChronicleMapper;

import com.cedriccampagne.siteauteur.chronicles.repository.ChronicleRepository;

import com.cedriccampagne.siteauteur.common.service.SlugService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChronicleService {

    private final ChronicleRepository chronicleRepository;
    private final ChronicleMapper chronicleMapper;
    private final SlugService slugService;

    public ChronicleService(
            ChronicleRepository chronicleRepository,
            ChronicleMapper chronicleMapper,
            SlugService slugService
    ){
        this.chronicleRepository = chronicleRepository;
        this.chronicleMapper = chronicleMapper;
        this.slugService = slugService;
    }

    public List<ChronicleCard> getLatestActiveChronicle(){

        List<Chronicle> chronicles = chronicleRepository.findTop3ByIsActiveTrueOrderByPublishedAtDesc();

        return chronicles.stream().map(chronicleMapper::toChronicleCard).toList();
    }

    public  List<ChronicleListCard> getAllActiveChronicle(){
        List<Chronicle> chronicles = chronicleRepository.findAllByIsActiveTrueOrderByPublishedAtDesc();

        return  chronicles.stream().map(chronicleMapper::toChronicleListCard).toList();
    }

    public ChronicleDetails getActiveById(Long id){
        Chronicle chronicle = chronicleRepository.findByIdAndIsActiveTrue(id)
                .orElseThrow(()-> new RuntimeException("erreur"));

        return chronicleMapper.toChronicleDetails(chronicle);
    }

    public AdminChronicleResponse createByAdmin(
            AdminCreateChronicleRequest request
    ) {
        String baseSlug = slugService.generateSlug(request.title());

        String slug = baseSlug;
        int counter = 2;

        while (chronicleRepository.existsBySlug(slug)) {
            slug = baseSlug + "-" + counter;
            counter++;
        }

        Chronicle chronicle = chronicleMapper.toChronicle(request);

        chronicle.setSlug(slug);

        Chronicle saved = chronicleRepository.save(chronicle);

        return chronicleMapper.toAdminResponse(saved);
    }

    public List<AdminChronicleResponse> getAllForAdmin() {
        return chronicleRepository.findAll()
                .stream()
                .map(chronicleMapper::toAdminResponse)
                .toList();
    }

    public AdminChronicleUpdateResponse getByIdForAdmin(Long id) {
        Chronicle chronicle = chronicleRepository.findById(id)
                .orElseThrow(() ->
                        new ChronicleNotFoundException("Chronique introuvable")
                );

        return chronicleMapper.toAdminUpdateResponse(chronicle);
    }

    public AdminChronicleUpdateResponse updateByAdmin(
            Long id,
            AdminChronicleUpdateRequest request
    ) {
        Chronicle chronicle = chronicleRepository.findById(id)
                .orElseThrow(()-> new ChronicleNotFoundException("Chronique introuvable"));

        chronicleMapper.updateChronicleForAdmin(request, chronicle);

        Chronicle saved = chronicleRepository.save(chronicle);

        return chronicleMapper.toAdminUpdateResponse(saved);
    }

    public AdminChronicleResponse toggle(Long id){
        Chronicle chronicle = chronicleRepository.findById(id)
                .orElseThrow(()-> new ChronicleNotFoundException("Chronique introuvable"));

        chronicle.setIsActive(!chronicle.getIsActive());

        Chronicle saved = chronicleRepository.save(chronicle);

        return chronicleMapper.toAdminResponse(saved);
    }

    public void deleteByAdmin(Long id) {
        Chronicle chronicle = chronicleRepository.findById(id)
                .orElseThrow(()-> new ChronicleNotFoundException("Chronique introuvable"));

        chronicleRepository.delete(chronicle);
    }


}
