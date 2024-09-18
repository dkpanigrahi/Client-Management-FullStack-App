import { Component } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../model/client';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-client',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-client.component.html',
  styleUrl: './view-client.component.css'
})
export class ViewClientComponent {

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
  clientNotes: string = '';
  fileUrl: string='';

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const clientId = Number(this.route.snapshot.paramMap.get('id'));
    if (clientId) {
      this.clientService.getClientById(clientId).subscribe(
        data => {
          this.client = data;
          this.clientNotes = data.clientNotes;
        },
        error => {
          console.error('Error fetching client data', error);
        }
      );
    }
  }

  saveNote(): void {
    const id = this.client.id;
    this.client.clientNotes = this.clientNotes;
    this.clientService.updateClient(id,this.client).subscribe(
      response => {
        console.log('Note updated successfully');
      },
      error => {
        console.error('Error saving note', error);
      }
    );
  }

  deleteClient(): void {
    const clientId = Number(this.route.snapshot.paramMap.get('id'));
    this.clientService.deleteClient(clientId).subscribe(
      response => {
        this.router.navigate(['']);
      },
      error => {
        console.error('Error deleting client', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  saveAsPDF(): void {
  
  }

  editClient(){
    
  }

}
