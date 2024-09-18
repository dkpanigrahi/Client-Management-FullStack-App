package com.hardiktraders.controller;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hardiktraders.entity.Client;
import com.hardiktraders.repository.ClientRepository;

@RestController
@RequestMapping("/client")
@CrossOrigin(origins = "http://localhost:4200")
public class ClientController {

	@Autowired
    private ClientRepository clientRepository;

    @GetMapping
    public ResponseEntity<List<Client>> getAllClient() {
        List<Client> jobSheets = clientRepository.findAll();
        return ResponseEntity.ok(jobSheets);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Client>> getClientById(@PathVariable Long id) {
        Optional<Client> selectedClient = clientRepository.findById(id);
		return ResponseEntity.ok(selectedClient);
    }
    
    
    @GetMapping("/search")
    public ResponseEntity<List<Client>> getClientByIdOrName(
            @RequestParam(value = "clientId", required = false) String clientId,
            @RequestParam(value = "clientName", required = false) String clientName) {

        List<Client> clients = clientRepository.findByClientIdOrClientName(clientId, clientName);

        if (!clients.isEmpty()) {
            return ResponseEntity.ok(clients);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.emptyList());
        }
    }


    @PostMapping
    public ResponseEntity<Client> createClient(@RequestBody Client client) {
        Client newClient = clientRepository.save(client);
        return ResponseEntity.status(HttpStatus.CREATED).body(newClient);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client clientDetails) {
    	Client client = clientRepository.findById(id).orElse(null);
    	
    	if (client == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        client.setClientId(clientDetails.getClientId());
        client.setClientName(clientDetails.getClientName());
        client.setContactInfo(clientDetails.getContactInfo());
        client.setReceivedDate(clientDetails.getReceivedDate());
        client.setInventoryReceived(clientDetails.getInventoryReceived());
        client.setReportedIssues(clientDetails.getReportedIssues());
        client.setClientNotes(clientDetails.getClientNotes());
        client.setAssignedTechnician(clientDetails.getAssignedTechnician());
        client.setEstimatedAmount(clientDetails.getEstimatedAmount());
        client.setDeadline(clientDetails.getDeadline());
        client.setStatus(clientDetails.getStatus());

        Client updatedClient = clientRepository.save(client);
        return ResponseEntity.ok(updatedClient);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable Long id) {
    	
    	Client client = clientRepository.findById(id).orElse(null);
    	if (client == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        clientRepository.delete(client);
        return ResponseEntity.noContent().build();
    }
}
