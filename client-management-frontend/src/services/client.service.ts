import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../app/model/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8080/client';

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  getClientById(id: number): Observable<Client> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Client>(url);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  updateClient(id: number, client: Client): Observable<Client> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Client>(url, client, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  deleteClient(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  getClientByIdOrName(clientId?: string, clientName?: string): Observable<Client[]> {
    let params = new HttpParams();
    if (clientId) {
      params = params.append('clientId', clientId);
    }
    if (clientName) {
      params = params.append('clientName', clientName);
    }

    return this.http.get<Client[]>(`${this.apiUrl}/search`, { params });
  }
}
