package com.cedriccampagne.siteauteur.chronicles.service;

import com.cedriccampagne.siteauteur.chronicles.dto.ChronicleCard;
import com.cedriccampagne.siteauteur.chronicles.dto.ChronicleDetails;
import com.cedriccampagne.siteauteur.chronicles.dto.ChronicleListCard;

import com.cedriccampagne.siteauteur.chronicles.entity.Chronicle;

import com.cedriccampagne.siteauteur.chronicles.mapper.ChronicleMapper;

import com.cedriccampagne.siteauteur.chronicles.repository.ChronicleRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChronicleService {

    private final ChronicleRepository chronicleRepository;
    private final ChronicleMapper chronicleMapper;

    public ChronicleService(ChronicleRepository chronicleRepository, ChronicleMapper chronicleMapper){
        this.chronicleRepository = chronicleRepository;
        this.chronicleMapper = chronicleMapper;
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
}
