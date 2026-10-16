package com.cedriccampagne.siteauteur.comments.service;

import com.cedriccampagne.siteauteur.admin.dto.comment.AdminCommentResponse;
import com.cedriccampagne.siteauteur.admin.dto.comment.AdminCommentUpdateRequest;
import com.cedriccampagne.siteauteur.chronicles.entity.Chronicle;
import com.cedriccampagne.siteauteur.chronicles.exception.ChronicleNotFoundException;
import com.cedriccampagne.siteauteur.chronicles.repository.ChronicleRepository;
import com.cedriccampagne.siteauteur.comments.dto.CommentCard;

import com.cedriccampagne.siteauteur.comments.dto.CommentCreateRequest;
import com.cedriccampagne.siteauteur.comments.dto.CommentResponse;
import com.cedriccampagne.siteauteur.comments.entity.Comment;
import com.cedriccampagne.siteauteur.comments.exception.CommentNotFoundException;
import com.cedriccampagne.siteauteur.comments.mapper.CommentMapper;

import com.cedriccampagne.siteauteur.comments.repository.CommentRepository;

import com.cedriccampagne.siteauteur.users.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper;
    private final ChronicleRepository chronicleRepository;

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

    public CommentResponse create(CommentCreateRequest request) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        User user = (User) auth.getPrincipal();

        Chronicle chronicle = chronicleRepository.findById(request.chronicleId())
                .orElseThrow(()-> new ChronicleNotFoundException("Chronique introuvable"));

        Comment comment = new Comment();
        comment.setContent(request.content());
        comment.setChronicle(chronicle);
        comment.setUser(user);
        comment.setIsVisible(true);
        comment.setCreatedAt(LocalDateTime.now());
        comment.setUpdatedAt(LocalDateTime.now());

        Comment saved = commentRepository.save(comment);

        return  commentMapper.toCommentResponse(saved);
    }
}
