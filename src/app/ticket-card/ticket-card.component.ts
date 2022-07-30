import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../Interface/Ticket';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TicketCardComponent implements OnInit {

  constructor(private router: Router,) { }

  @Input() ticket:Ticket | undefined
  status :string='done';
  priorty :string='low';

  ngOnInit(): void {  

  }

  // navigate to edit form
  goEdit(ticketId: any){
    this.router.navigate([`/form/edit/${ticketId}`]);
  }

}
