package com.cedriccampagne.siteauteur.chronicles.repository;

import com.cedriccampagne.siteauteur.chronicles.dto.ChronicleDetails;
import com.cedriccampagne.siteauteur.chronicles.entity.Chronicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChronicleRepository extends JpaRepository<Chronicle, Long> {

    List<Chronicle> findTop3ByIsActiveTrueOrderByPublishedAtDesc();
    List<Chronicle> findAllByIsActiveTrueOrderByPublishedAtDesc();
    Optional<Chronicle> findByIdAndIsActiveTrue(Long id);
}
