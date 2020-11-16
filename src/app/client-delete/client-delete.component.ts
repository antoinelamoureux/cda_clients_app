import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../Client';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {
  id: number;
  current: Client;

  constructor(private route: ActivatedRoute, private clientService: ClientService, private router: Router) { 
    this.current = new Client(null, "", "", null, null);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id'); 
    });

    this.findClient();
  }

  findClient(): void {
    this.clientService.findClient(this.id).subscribe(response => {
      console.log(response);
      this.current = response;
    }, error => {
      console.log(error);
    });

  }

  deleteClient(): void {
    this.clientService.deleteClient(this.id).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });

    this.router.navigate(['/clients']);
  }

}
