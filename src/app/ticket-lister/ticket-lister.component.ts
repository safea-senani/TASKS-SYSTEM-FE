import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Status } from '../Interface/Status';
import { TicketService } from '../services/ticket.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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

    this.ticketService.updateTicketList([1,2],1).subscribe(value => { 
      console.log("updateTicketList: "+ value)
     });

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

  // this is for drag and drop
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      //alert("moveItemInArray");
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      // ========= DRAGE AND DROP ACTION =========================
      // here are list of tasks needs to be sent to API to be updated
      console.log(event['container'].data);
      // here we can get the status of the container
      console.log(event['container'].element.nativeElement);
      // API to update the status of the new list (API IS NOT READY YET)
      // this.ticketService.updateTicketList(ticketIds,status).subscribe(value => { 
      //   this.ongoingTickets=value;
      //   this.ongoingTicketsCount=this.ongoingTickets.length;
      //  });
      // ========= DRAGE AND DROP ACTION =========================
    }
  }
   

}
