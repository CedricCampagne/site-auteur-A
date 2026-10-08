package com.cedriccampagne.siteauteur.comments.service;

import com.cedriccampagne.siteauteur.admin.dto.comment.AdminCommentResponse;
import com.cedriccampagne.siteauteur.admin.dto.comment.AdminCommentUpdateRequest;
import com.cedriccampagne.siteauteur.comments.dto.CommentCard;

import com.cedriccampagne.siteauteur.comments.entity.Comment;
import com.cedriccampagne.siteauteur.comments.exception.CommentNotFoundException;
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

    public List<AdminCommentResponse> getAllForAdmin() {
        return commentRepository.findAll()
                .stream()
                .map(commentMapper::toAdminCommentResponse)
                .toList();
    }

    public AdminCommentResponse getByIdForAdmin(Long id) {

        Comment comment = commentRepository.findById(id)
                .orElseThrow(()-> new CommentNotFoundException("Commentaire introuvable"));

        return commentMapper.toAdminCommentResponse(comment);
    }

    public AdminCommentResponse updateByAdmin (
            Long id,
            AdminCommentUpdateRequest request
    ) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(()-> new CommentNotFoundException("Commentaire introuvable"));

        commentMapper.updateCommentForAdmin(request, comment);

        Comment saved = commentRepository.save(comment);

        return commentMapper.toAdminCommentResponse(saved);
    }

    public AdminCommentResponse toggle(
            Long id
    ) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(()-> new CommentNotFoundException("Commentaire introuvable"));

        comment.setIsVisible(!comment.getIsVisible());

        Comment saved = commentRepository.save(comment);

        return commentMapper.toAdminCommentResponse(saved);
    }

    public void deleteByAdmin( Long id){
        Comment comment = commentRepository.findById(id)
                .orElseThrow(()-> new CommentNotFoundException("Commentaire introuvable"));

        commentRepository.delete(comment);
    }
}
