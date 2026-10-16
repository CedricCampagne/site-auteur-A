package com.cedriccampagne.siteauteur.comments.controller;

import com.cedriccampagne.siteauteur.comments.dto.CommentCreateRequest;
import com.cedriccampagne.siteauteur.comments.dto.CommentResponse;
import com.cedriccampagne.siteauteur.comments.service.CommentService;
import jakarta.validation.Valid;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/comments")
public class CommentController {

    private final CommentService commentService;

    @PostMapping
    public CommentResponse create(
            @RequestBody @Valid CommentCreateRequest request
    ) {
        return commentService.create(request);
    }
}
