package com.hardiktraders.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
    
	private String clientId;
    
	private String clientName;
    
	private String contactInfo;
    
	private Date receivedDate;
    
	private String inventoryReceived;
    
	private String reportedIssues;
    
	private String clientNotes;
    
	private String assignedTechnician;
    
	private Double estimatedAmount;
    
	private Date deadline;
    
	private String status;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getClientId() {
		return clientId;
	}

	public void setClientId(String clientId) {
		this.clientId = clientId;
	}

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	public String getContactInfo() {
		return contactInfo;
	}

	public void setContactInfo(String contactInfo) {
		this.contactInfo = contactInfo;
	}

	public Date getReceivedDate() {
		return receivedDate;
	}

	public void setReceivedDate(Date receivedDate) {
		this.receivedDate = receivedDate;
	}

	public String getInventoryReceived() {
		return inventoryReceived;
	}

	public void setInventoryReceived(String inventoryReceived) {
		this.inventoryReceived = inventoryReceived;
	}

	public String getReportedIssues() {
		return reportedIssues;
	}

	public void setReportedIssues(String reportedIssues) {
		this.reportedIssues = reportedIssues;
	}

	public String getClientNotes() {
		return clientNotes;
	}

	public void setClientNotes(String clientNotes) {
		this.clientNotes = clientNotes;
	}

	public String getAssignedTechnician() {
		return assignedTechnician;
	}

	public void setAssignedTechnician(String assignedTechnician) {
		this.assignedTechnician = assignedTechnician;
	}

	public Double getEstimatedAmount() {
		return estimatedAmount;
	}

	public void setEstimatedAmount(Double estimatedAmount) {
		this.estimatedAmount = estimatedAmount;
	}

	public Date getDeadline() {
		return deadline;
	}

	public void setDeadline(Date deadline) {
		this.deadline = deadline;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
