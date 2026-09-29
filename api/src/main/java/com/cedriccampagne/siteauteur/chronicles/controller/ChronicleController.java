package com.cedriccampagne.siteauteur.chronicles.controller;

import com.cedriccampagne.siteauteur.chronicles.dto.ChronicleCard;
import com.cedriccampagne.siteauteur.chronicles.service.ChronicleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/chronicles")
public class ChronicleController {

    private final ChronicleService chronicleService;

    @GetMapping("/latest")
    public List<ChronicleCard> getLatestActive(){
        return chronicleService.getLatestActiveChronicle();
    }
}
