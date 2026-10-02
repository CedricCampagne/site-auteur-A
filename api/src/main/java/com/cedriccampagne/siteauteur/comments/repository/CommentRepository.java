package com.cedriccampagne.siteauteur.comments.repository;

import com.cedriccampagne.siteauteur.chronicles.entity.Chronicle;
import com.cedriccampagne.siteauteur.comments.entity.Comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByChronicleIdAndIsVisibleTrueOrderByCreatedAtDesc(Long id);
}
