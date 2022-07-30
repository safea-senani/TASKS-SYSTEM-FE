import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ticket } from '../Interface/Ticket';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  // Get Tasks by Status
  getTicketsByStatus(status: number) {
    return this.http.get(environment.baseURLAPI+'/home/get?status='+status);
  }

  // updateTicketList
  updateTicketList(idsList: number[], status: number) {
    return this.http.get(environment.baseURLAPI+'/TicketController/updateTicketList?idsList='+idsList+'&=status'+status);
  }

  // Create Ticket
  createTicket(ticketRecord: Ticket) {
    return this.http.post(environment.baseURLAPI+'/TicketController/createTicket',ticketRecord);
  }

  // Update Ticket
  updateTicket(ticketRecord: Ticket) {
    return this.http.post(environment.baseURLAPI+'/TicketController/updateTicket',ticketRecord);
  }

  // Get Task by Id
  getTicketById(ticketId: number) {
    return this.http.get(environment.baseURLAPI+'/TicketController/getTicketById?ticketId='+ticketId);
  }

}
