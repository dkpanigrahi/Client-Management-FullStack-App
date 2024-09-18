import { Component } from '@angular/core';
import { Client } from '../../model/client';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {

  Clients: Client[] = [];
  searchTerm: string = '';

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.getallClients();
  }

  getallClients(): void {
    this.clientService.getAllClients().subscribe((data) => {
      this.Clients = data;
    });
  }

  searchClients(): void {
    const searchTerm = this.searchTerm.trim();
  
    if (searchTerm) {
      
      const containsLetters = /[a-zA-Z]/.test(searchTerm);
      const containsDigits = /\d/.test(searchTerm);
  
      const isClientId = containsLetters && containsDigits; 
  
      if (isClientId) {
        this.clientService.getClientByIdOrName(searchTerm, undefined).subscribe((data) => {
          this.Clients = data;
        });
      } else {
        this.clientService.getClientByIdOrName(undefined, searchTerm).subscribe((data) => {
          this.Clients = data;
        });
      }
    } else {
     
      this.Clients = [];
    }
  }
  

  getClientById(id: number): void {
      this.router.navigate(['/view', id])
  }


  addClient(): void {
    this.router.navigate(['/add']);
  }

  editClient(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe(() => {
      this.getallClients();
    });
  }

  
  filteredJobSheets(): Client[] {
    return this.Clients; 
  }
}
