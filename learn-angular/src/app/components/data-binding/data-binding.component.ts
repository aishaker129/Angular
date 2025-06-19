import { Component, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],//import formsModule to use two way dataBinding
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  // string , number, boolean, date ( there four main datatype in typescript)

  courseName: string = "anguler";
  inputType = "checkbox";
  rollNo: number = 123;
  isStudent: boolean = true;
  currentdate: Date = new Date();
  myClassName: string = "bg-warning";
  state: string = "Netrokona";

  studentName= signal("Ai Shaker");

  constructor() { }
  
  showalert(message: string) {
      alert(message)
  }

  changeCourseName() {
    this.courseName = "Java Spring Boot"
    this.studentName.set("Akhlakul Islam")
  }
}
