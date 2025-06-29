import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [JsonPipe],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: any[] = [];
  eventList: any[] = [];

  // injection
  //http = inject(HttpClient);

  // dependency injection
  constructor(private http: HttpClient) { }
  
  showValue() {
    debugger;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result: any) => {
      debugger;
      this.userList = result;
    })
  }

  showEvent() {
    debugger;
    this.http.get('https://gradbond.up.railway.app/api/events/').subscribe((res: any) => {
      debugger;
      this.eventList = res.events;
    })
    
  }

}
