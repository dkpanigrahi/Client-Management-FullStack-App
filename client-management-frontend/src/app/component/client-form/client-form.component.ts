import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../../services/client.service';
import { Router } from '@angular/router';
import { Client } from '../../model/client';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {

  client: Client = {
    id: 0,
    clientId: '',
    clientName: '',
    contactInfo: '',
    receivedDate: new Date(),
    inventoryReceived: '',
    reportedIssues: '',
    clientNotes: '',
    assignedTechnician: '',
    estimatedAmount: 0,
    deadline: new Date(),
    status: 'pending'
  };

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    if (this.isValidForm()) {
      this.clientService.createClient(this.client).subscribe({
        next: (response) => {
          console.log('Client Created successfully:', response);
          this.router.navigate(['']);
        },
        error: (err) => {
          console.error('Error creating client:', err);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }

  
  isValidForm(): boolean {
    return this.client.clientId !== '' &&
           this.client.clientName !== '' &&
           this.client.contactInfo !== '' &&
           this.client.estimatedAmount > 0 &&
           this.client.status !== '';
  }
}
