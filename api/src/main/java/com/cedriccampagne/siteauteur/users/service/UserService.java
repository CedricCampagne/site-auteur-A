package com.cedriccampagne.siteauteur.users.service;


import com.cedriccampagne.siteauteur.admin.dto.user.AdminUpdateRequest;
import com.cedriccampagne.siteauteur.admin.dto.user.AdminUserResponse;

import com.cedriccampagne.siteauteur.users.entity.User;

import com.cedriccampagne.siteauteur.users.exception.UserNotFoundException;
import com.cedriccampagne.siteauteur.users.mapper.UserMapper;
import com.cedriccampagne.siteauteur.users.repository.UserRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public List<AdminUserResponse> getAllForAdmin(){
        return userRepository.findAll()
                .stream()
                .map(userMapper::toAdminResponse)
                .toList();
    }

    public AdminUserResponse getByIdForAdmin(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("Utilisateur non trouvé"));

        return userMapper.toAdminResponse(user);
    }

    public AdminUserResponse updateByAdmin(Long id, AdminUpdateRequest request) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("Utilisateur non trouvé"));

        userMapper.updateUserFromAdmin(request, user);

        User saved = userRepository.save(user);

        return userMapper.toAdminResponse(saved);
    }

    public void deleteByAdmin(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("Utilisateur non trouvé"));

        userRepository.delete(user);
    }

    public AdminUserResponse toggle(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("Utilisateur non trouvé"));

        user.setIsActive(!user.getIsActive());

        User saved = userRepository.save(user);

        return userMapper.toAdminResponse(saved);
    }
}
