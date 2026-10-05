package com.cedriccampagne.siteauteur.chronicles.controller;

import com.cedriccampagne.siteauteur.chronicles.dto.ChronicleCard;
import com.cedriccampagne.siteauteur.chronicles.dto.ChronicleDetails;
import com.cedriccampagne.siteauteur.chronicles.dto.ChronicleListCard;
import com.cedriccampagne.siteauteur.chronicles.service.ChronicleService;
import com.cedriccampagne.siteauteur.comments.dto.CommentCard;
import com.cedriccampagne.siteauteur.comments.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/chronicles")
public class ChronicleController {

    private final ChronicleService chronicleService;
    private final CommentService commentService;

    @GetMapping("/latest")
    public List<ChronicleCard> getLatestActive(){
        return chronicleService.getLatestActiveChronicle();
    }

    @GetMapping("/list")
    public List<ChronicleListCard> getAllActive(){
        return chronicleService.getAllActiveChronicle();
    }

    @GetMapping("/{id}")
    public ChronicleDetails getActiveDetails(@PathVariable Long id){
        return chronicleService.getActiveById(id);
    }

    @GetMapping("/{id}/comments")
    public List<CommentCard> getChronicleComment(@PathVariable Long id) {
        return commentService.getVisibleByChronicleId(id);
    }
}
