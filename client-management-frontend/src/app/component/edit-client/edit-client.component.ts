import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client';
import { ClientService } from '../../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-client',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.clientService.getClientById(id).subscribe(
        (data) => {
          this.client = data;
        },
        (error) => {
          console.error('Error fetching client data', error);
        }
      );
    }
  }

  onSubmit(): void {
    const id = this.client.id;
    if (id) {
      this.clientService.updateClient(id, this.client).subscribe(
        (response) => {
          this.router.navigate(['']);
        },
        (error) => {
          console.error('Error updating client data', error);
        }
      );
    }
  }
}
