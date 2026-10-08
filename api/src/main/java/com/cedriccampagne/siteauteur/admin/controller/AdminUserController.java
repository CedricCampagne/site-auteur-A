package com.cedriccampagne.siteauteur.admin.controller;

import com.cedriccampagne.siteauteur.admin.dto.user.AdminUserUpdateRequest;
import com.cedriccampagne.siteauteur.admin.dto.user.AdminUserResponse;
import com.cedriccampagne.siteauteur.users.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/user")
@RequiredArgsConstructor
public class AdminUserController {

    private final UserService userService;

    @GetMapping
    public List<AdminUserResponse> getAll(){
        return userService.getAllForAdmin();
    }

    @GetMapping("/{id}")
    public AdminUserResponse getById(@PathVariable Long id) {
        return userService.getByIdForAdmin(id);
    }

    @PutMapping("/{id}")
    public AdminUserResponse update(
            @PathVariable Long id,
            @RequestBody @Valid AdminUserUpdateRequest request
    ) {
        return userService.updateByAdmin(id, request);
    }

    @PutMapping("/{id}/toggle")
    public AdminUserResponse toggle(@PathVariable Long id) {
        return userService.toggle(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        userService.deleteByAdmin(id);
    }
}
