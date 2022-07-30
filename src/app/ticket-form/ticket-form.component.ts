import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Ticket } from '../Interface/Ticket';
import { LookupService } from '../services/lookup.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TicketFormComponent implements OnInit {

  constructor( 
    private lookupService: LookupService,
    private ticketService: TicketService,
    private router: Router,
    private route: ActivatedRoute) { }

  @Input() action = 'Add';
  @ViewChild('ticketForm') ticketForm: NgForm | undefined;
  
  projects:any;
  priorities:any;
  statuses:any;
  assignees:any;
  today: any;
  isEdit: boolean= false;
  ticket: any={
    Name: "",
    Description: "",
    DueDate:"",
    Project: "",
    Assignee: "",
    Status: "",
    Priorty: "",
  };



  ngOnInit(): void {
    //get Current Date
    var today = new Date();
    this.today = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    // Lookups
    this.getProjectsList();
    this.getPrioritiesList();
    this.getStatusesList();
    this.getAssigneesList();

    var id = this.route.snapshot.paramMap.get('id');
    
    if(id){
      this.getTaskById(id);
      this.isEdit=true;
    }
  }

  getTaskById(id: any){
    this.ticketService.getTicketById(id).subscribe(value =>{
      if(value!=null){
        this.ticket=value;
      }
      })
  }

  Submit(){
    if(this.ticketForm?.valid){
      if(this.isEdit){
        // Update Task
        this.ticketService.updateTicket(this.ticket).subscribe(data =>{
          var result = data;
          if(result){
            Swal.fire('Thank you...', 'Your task updated succesfully!', 'success');
            this.router.navigate(['/tickets']);
          }else{
            Swal.fire('Sorry...', 'There was error in updating your task!', 'error')
          }
        });
      }else{
        // Create Task
        this.ticketService.createTicket(this.ticket).subscribe(data =>{
          var result = data;
          if(result){
            Swal.fire('Thank you...', 'Your task submitted succesfully!', 'success');
            this.router.navigate(['/tickets']);
  
            
          }else{
            Swal.fire('Sorry...', 'There was error in submitting your task!', 'error')
          }
        });
      }

    }
  }

  //=============== LOOKUPS =======================

  getProjectsList(){
    this.lookupService.getProjects().subscribe(value => { 
    this.projects=value;
   });
  }

  getPrioritiesList(){
    this.lookupService.getPriorities().subscribe(value => { 
    this.priorities=value;
   });
  }

  getStatusesList(){
    this.lookupService.getStatuses().subscribe(value => { 
    this.statuses=value;
   });
  }

  getAssigneesList(){
    this.lookupService.getAssignees().subscribe(value => { 
    this.assignees=value;
   });
  }

}
