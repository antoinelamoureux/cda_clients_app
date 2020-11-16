import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../Client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe(response => {
      this.clients = response;
    }, error => {
      console.log(error);
    });
  }

}
