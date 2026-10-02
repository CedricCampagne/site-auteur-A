package com.cedriccampagne.siteauteur.comments.mapper;

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
}
