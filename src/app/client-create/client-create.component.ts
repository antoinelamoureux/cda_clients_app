import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../Client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  id: number;
  current: Client;

  constructor(private route: ActivatedRoute, private clientService: ClientService, private router: Router) { 
    this.current = new Client(null, "", "", null, null);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
    });
  }

  createClient(): void {
    console.log(this.current)
    this.clientService.createClient(this.current).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });

    this.router.navigate(['/clients']);
  }
}
