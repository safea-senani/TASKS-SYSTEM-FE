import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { TicketListerComponent } from './ticket-lister/ticket-lister.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketCardComponent,
    TicketFormComponent,
    TicketListerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
