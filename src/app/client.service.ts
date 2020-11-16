import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './Client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url: string = 'http://localhost:8080/tp_angular_clients/clients';
  clients: Client[];

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url);
  }

  findClient(id: number): Observable<any> {
    return this.http.get<Client[]>(this.url+"/"+id);
    
  }

  createClient(obj: Client): Observable<any> {
    console.log("Service Create :" + obj.nom)
    return this.http.post(this.url, obj);
  }

  updateClient(obj: Client): Observable<any>  {
    console.log("Service Update" + obj)
    return this.http.put(this.url+"/"+obj.id, obj);
  }

  deleteClient(id: number): Observable<any> {
    console.log("Service Delete" + id)
    return this.http.delete(this.url+"/"+id);
  }
}
