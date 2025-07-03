import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-api',
  imports: [FormsModule],
  templateUrl: './put-api.component.html',
  styleUrl: './put-api.component.css'
})
export class PutApiComponent implements OnInit {

  userList: any[] = [];

  UserObject = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "createDate": new Date(),
    "fullName": "",
    "mobileNo": ""
  }

  ngOnInit(): void {
    this.getUser();
  }

  http = inject(HttpClient);

  onSave() {
    debugger;
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.UserObject).subscribe({
      next: (result) => {
        debugger;
        alert("User created successfully");
        this.getUser();

      }, error: (error) => {
        debugger;
        alert("error -" + error.error);
      }
    })
  }

  getUser() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res: any) => {
      this.userList = res;
    })
  }

  onEdit(item: any) {
    this.UserObject = item;
  }

  onUpdate() {
    this.UserObject.createDate = new Date();
    debugger;
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id="+this.UserObject.userId, this.UserObject).subscribe({
      next: (result) => {
        debugger;
        alert("User Update successfully");
        this.getUser();

      }, error: (error) => {
        debugger;
        alert("error -" + error.error);
      }
    })
  }

  onDelete(id: number) {
    const isDelete = confirm("Do you want to delete this data");
    if (isDelete) {
      this.http.post("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById=" + id, this.UserObject).subscribe({
        next: (result) => {
          debugger;
          alert("User Update successfully");
          this.getUser();

        }, error: (error) => {
          debugger;
          alert("error -" + error.error);
        }
      })
    }
  }

  onReset() {
    this.UserObject = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "createDate": new Date(),
      "fullName": "",
      "mobileNo": ""
    }
  }
}
