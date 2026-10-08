package com.cedriccampagne.siteauteur.admin.controller;

import com.cedriccampagne.siteauteur.admin.dto.chronicle.AdminChronicleResponse;
import com.cedriccampagne.siteauteur.admin.dto.chronicle.AdminChronicleUpdateRequest;
import com.cedriccampagne.siteauteur.admin.dto.chronicle.AdminChronicleUpdateResponse;
import com.cedriccampagne.siteauteur.admin.dto.chronicle.AdminCreateChronicleRequest;

import com.cedriccampagne.siteauteur.chronicles.service.ChronicleService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/chronicles")
public class AdminChronicleController {

    private final ChronicleService chronicleService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public AdminChronicleResponse create(
            @RequestBody @Valid AdminCreateChronicleRequest request
    ){
        return chronicleService.createByAdmin(request);
    }

    @GetMapping
    public List<AdminChronicleResponse> getAll() {
        return chronicleService.getAllForAdmin();
    }

    @GetMapping("/{id}")
    public AdminChronicleUpdateResponse getById(
            @PathVariable Long id
    ) {
        return chronicleService.getByIdForAdmin(id);
    }

    @PutMapping("/{id}")
    public AdminChronicleUpdateResponse update(
            @PathVariable Long id,
            @RequestBody @Valid AdminChronicleUpdateRequest request
    ){
        return chronicleService.updateByAdmin(id, request);
    }

    @PatchMapping("/{id}/toggle")
    public AdminChronicleResponse toggle(
            @PathVariable Long id
    ) {
        return chronicleService.toggle(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(
            @PathVariable Long id
    ) {
        chronicleService.deleteByAdmin(id);
    }
}
