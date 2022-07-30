import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get(environment.baseURLAPI+'/LookupController/getProjects');
  }

  getPriorities(){
    return this.http.get(environment.baseURLAPI+'/LookupController/getPriorities');
  }

  getStatuses(){
    return this.http.get(environment.baseURLAPI+'/LookupController/getStatuses');
  }

  getAssignees(){
    return this.http.get(environment.baseURLAPI+'/LookupController/getAssignees');
  }



}
