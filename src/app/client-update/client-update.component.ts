import { Component, OnInit } from '@angular/core';
import { Client } from '../Client';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {
  id: number;
  current: Client;

  constructor(private route: ActivatedRoute, private clientService: ClientService, private router: Router) { 
    this.current = new Client(null, "", "", null, null);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
    });
    console.log("ID ==>" + this.id);
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

  updateClient(): void {
    this.clientService.updateClient(this.current).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });

    this.router.navigate(['/clients']);
  }
}
