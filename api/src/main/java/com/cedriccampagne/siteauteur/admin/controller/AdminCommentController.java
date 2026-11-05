package com.cedriccampagne.siteauteur.admin.controller;

import com.cedriccampagne.siteauteur.admin.dto.comment.AdminCommentResponse;
import com.cedriccampagne.siteauteur.admin.dto.comment.AdminCommentUpdateRequest;
import com.cedriccampagne.siteauteur.comments.service.CommentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/comments")
public class AdminCommentController {

    private final CommentService commentService;

    @GetMapping
    public List<AdminCommentResponse> getAll() {
        return commentService.getAllForAdmin();
    }

    @GetMapping("/{id}")
    public AdminCommentResponse getById(
            @PathVariable Long id
    ) {
        return commentService.getByIdForAdmin(id);
    }

    @PatchMapping("/{id}")
    public AdminCommentResponse update(
            @PathVariable Long id,
            @RequestBody @Valid AdminCommentUpdateRequest request
    ) {
        return commentService.updateByAdmin(id, request);
    }

    @PatchMapping("/{id}/toggle")
    public AdminCommentResponse toggle(
            @PathVariable Long id
    ) {
        return commentService.toggle(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        commentService.deleteByAdmin(id);
    }

}
