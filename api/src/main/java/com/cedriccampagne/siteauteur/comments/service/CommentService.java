package com.cedriccampagne.siteauteur.comments.service;

import com.cedriccampagne.siteauteur.comments.dto.CommentCard;

import com.cedriccampagne.siteauteur.comments.mapper.CommentMapper;

import com.cedriccampagne.siteauteur.comments.repository.CommentRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper;

    public List<CommentCard> getVisibleByChronicleId(Long chronicleId){
        return commentRepository.findByChronicleIdAndIsVisibleTrueOrderByCreatedAtDesc(chronicleId)
                .stream()
                .map(commentMapper::toCommentCard)
                .toList();
    }
}
