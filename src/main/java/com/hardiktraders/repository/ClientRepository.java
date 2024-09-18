package com.hardiktraders.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hardiktraders.entity.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {

	List<Client> findByClientIdOrClientName(String clientId, String clientName);
}
