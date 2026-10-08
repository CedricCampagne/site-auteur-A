package com.cedriccampagne.siteauteur.comments.mapper;

import com.cedriccampagne.siteauteur.admin.dto.comment.AdminCommentResponse;
import com.cedriccampagne.siteauteur.admin.dto.comment.AdminCommentUpdateRequest;
import com.cedriccampagne.siteauteur.comments.dto.CommentCard;
import com.cedriccampagne.siteauteur.comments.entity.Comment;
import org.springframework.stereotype.Component;

@Component
public class CommentMapper {

    public CommentCard toCommentCard(Comment comment){
        return  new CommentCard(
                comment.getId(),
                comment.getUser().getUsername(),
                comment.getContent(),
                comment.getCreatedAt()
        );
    }

    public AdminCommentResponse toAdminCommentResponse(Comment comment) {
        return new AdminCommentResponse(
                comment.getId(),
                comment.getUser().getUsername(),
                comment.getChronicle().getTitle(),
                comment.getContent(),
                comment.getIsVisible()
        );
    }

    public void updateCommentForAdmin(
            AdminCommentUpdateRequest request,
            Comment comment
    ) {
        comment.setContent(request.content());
        comment.setIsVisible(request.isVisible());
    }

}
