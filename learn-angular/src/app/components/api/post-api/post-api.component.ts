import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoalTrackerService } from '../../../services/goal-tracker.service';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

  userList: any[] = [];

  UserObject = {
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
  }
  
  ngOnInit(): void {
    this.getUser();
  }

  http = inject(HttpClient);
  constructor(private goalService:GoalTrackerService){}

  // onSave() {
  //   debugger;
  //   this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.UserObject).subscribe({
  //     next: (result) => {
  //       debugger;
  //       alert("User created successfully");
  //       this.getUser();

  //     }, error: (error) => {
  //       debugger;
  //       alert("error -" + error.error);
  //     }
  //   })
  // }

  onSave() {
    debugger;
    this.goalService.saveUser(this.UserObject).subscribe({
      next: (res) => {
        debugger;
        alert("User created successfully..!!")
      }, error: (error) => {
        debugger;
        alert("error -" + error.error);
      }
      
    })
  }

  // getUser() {
  //   this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res: any) => {
  //     this.userList = res;
  //   })
  // }

  getUser() {
    this.goalService.getGoalTrackerUser().subscribe((res: any) => {
      debugger;
      this.userList = res;
    })
  }

  onReset() {
    this.UserObject = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    }
  }
}
