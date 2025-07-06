import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { GoalTrackerService } from '../../../services/goal-tracker.service';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: any[] = [];
  eventList: any[] = [];

  // injection
  //http = inject(HttpClient);

  // dependency injection
  constructor(private http: HttpClient,private goalService: GoalTrackerService) { }
  
  // showValue() {
  //   debugger;
  //   this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result: any) => {
  //     debugger;
  //     this.userList = result;
  //   })
  // }

  showValue() {
    debugger;
    this.goalService.getAllUser().subscribe((res: any) => {
      debugger;
      this.userList = res;
    })
  }



  // showEvent() {
  //   debugger;
  //   this.http.get('https://gradbond.up.railway.app/api/events/').subscribe((res: any) => {
  //     debugger;
  //     this.eventList = res.events;
  //   })
    
  // }

  showEvent() {
    debugger;
    this.goalService.getAllEvent().subscribe((res: any) => {
      debugger;
      this.eventList = res.events;
    })
  }

}
