package com.cedriccampagne.siteauteur.users.mapper;

import com.cedriccampagne.siteauteur.admin.dto.user.AdminUpdateRequest;
import com.cedriccampagne.siteauteur.admin.dto.user.AdminUserResponse;
import com.cedriccampagne.siteauteur.auth.dto.LoginRequest;
import com.cedriccampagne.siteauteur.auth.dto.LoginResponse;
import com.cedriccampagne.siteauteur.auth.dto.RegisterResponse;
import com.cedriccampagne.siteauteur.users.entity.User;

import com.cedriccampagne.siteauteur.auth.dto.RegisterRequest;

import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public User toUser(RegisterRequest request) {
        User user = new User();

        user.setUsername(request.username());
        user.setEmail(request.email());
        user.setPassword(request.password());

        return user;
    }

    public RegisterResponse toRegisterResponse(User user){
        return new RegisterResponse(
                user.getId(),
                user.getUsername(),
                user.getEmail()
        );
    }

    public LoginResponse toLoginResponse(User user) {
        return new LoginResponse(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getRole()
        );
    }

    public AdminUserResponse toAdminResponse(User user) {
        return new AdminUserResponse(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getCreatedAt(),
                user.getIsActive()
        );
    }

    public void updateUserFromAdmin(AdminUpdateRequest request, User user){
        user.setUsername(request.username());
        user.setEmail(request.email());
    }
}
