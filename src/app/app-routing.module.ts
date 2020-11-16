import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';
import { ClientCreateComponent } from './client-create/client-create.component';

const routes: Routes = [
  { path: '', component: ClientListComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/create', component: ClientCreateComponent },
  { path: 'clients/:clientId', component: ClientDetailsComponent },
  { path: 'clients/update/:id', component: ClientUpdateComponent },
  { path: 'clients/delete/:id', component: ClientDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
