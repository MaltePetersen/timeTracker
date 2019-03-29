package com.frs.timetracker.repository;

import java.util.Optional;

import com.frs.timetracker.domain.Role;
import com.frs.timetracker.domain.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}