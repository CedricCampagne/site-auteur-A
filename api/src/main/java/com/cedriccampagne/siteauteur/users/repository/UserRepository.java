package com.cedriccampagne.siteauteur.users.repository;

import com.cedriccampagne.siteauteur.users.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
}
