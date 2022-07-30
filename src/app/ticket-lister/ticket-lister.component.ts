import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Status } from '../Interface/Status';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket-lister',
  templateUrl: './ticket-lister.component.html',
  styleUrls: ['./ticket-lister.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TicketListerComponent implements OnInit {

  constructor(
    private ticketService: TicketService,
) { }

totalTasks: number=0;
pendingTickets:any;
ongoingTickets:any;
doneTickets:any;
pendingTicketsCount:number=0;
ongoingTicketsCount:number=0;
doneTicketsCount:number=0;
status: Status=new Status();
  ngOnInit(): void {
    this.getAllTickets();
    setTimeout(() => {
      this.totalTasks=this.pendingTicketsCount+this.ongoingTicketsCount+this.doneTicketsCount
    }, 100)
    // this.ticketService.getProjects().subscribe(value => { 
    //   this.projects=value;
    //  });

  }

  getAllTickets(){
    // Get Pending Tickets
    this.ticketService.getTicketsByStatus(this.status.Pending).subscribe(value => { 
      this.pendingTickets=value;
      this.pendingTicketsCount=this.pendingTickets.length;
     });

    // Get Ongoing Tickets
    this.ticketService.getTicketsByStatus(this.status.Ongoing).subscribe(value => { 
      this.ongoingTickets=value;
      this.ongoingTicketsCount=this.ongoingTickets.length;
     });

    // Get DoneTickets Tickets
    this.ticketService.getTicketsByStatus(this.status.Done).subscribe(value => { 
      this.doneTickets=value;
      this.doneTicketsCount=this.doneTickets.length;
     });
  }
   

}
