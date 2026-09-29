package com.cedriccampagne.siteauteur.chronicles.repository;

import com.cedriccampagne.siteauteur.chronicles.entity.Chronicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChronicleRepository extends JpaRepository<Chronicle, Long> {

    List<Chronicle> findTop3ByIsActiveTrueOrderByPublishedAtDesc();

}
