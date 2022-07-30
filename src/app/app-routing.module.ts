import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { TicketListerComponent } from './ticket-lister/ticket-lister.component';

const routes: Routes = [
  //{ path: 'form/:productId', component: TicketFormComponent },
  { path: 'form/edit/:id', component: TicketFormComponent },
  { path: 'form/add', component: TicketFormComponent },
  { path: 'tickets', component: TicketListerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
