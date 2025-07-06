import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalTrackerService {

  apiURL: string = "https://api.freeprojectapi.com/api/GoalTracker/";

  constructor(private http: HttpClient) { }
  
  // get api integration
  getAllUser() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  getAllEvent() {
    return this.http.get('https://gradbond.up.railway.app/api/events/');
  }

  // post api integration
  saveUser(obj:any) {
    return this.http.post(this.apiURL+"register", obj);
  }

  getGoalTrackerUser() {
    return this.http.get(this.apiURL+"getAllUsers");
  }

  // put & delete api integration 

  // saveUserData(obj: any) {
  //   return this.http.post("")
  // }

  updateUser(obj: any) {
    this.http.put(this.apiURL+"updateUser?id=" + obj.userId, obj);
  }

  deleteUser(id:number) {
    return this.http.delete(this.apiURL+"deleteUserById?id="+id);
  }

}
