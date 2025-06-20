import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDiv1Visible: boolean = false;
  isDiv2Visible: boolean = false;

  num1: string = "";
  num2: string = "";

  isChecked: boolean = false;
  selectedState: string = "";

  cityArray: string[] = ['Dhaka', 'Netrokona', 'Kishorgang', 'Sunamganj'];

  studentList: any[] = [
    {studentId:1,name:'aa',city:'dhaka',isActive:false},
    {studentId:12,name:'bb',city:'netrokona',isActive:true},
    {studentId:32,name:'cc',city:'Kishorganj',isActive:false},
    {studentId:56,name:'dd',city:'sunamganj',isActive:true},
    {studentId:76,name:'ee',city:'gazipur',isActive:false}
  ]
  showDiv1() {
    this.isDiv1Visible = true;
  }
  hideDiv1() {
    this.isDiv1Visible = false;
  }

  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible
    // if (this.isDiv2Visible == true) {
    //   this.isDiv2Visible = false;
    // }
    // else {
    //   this.isDiv2Visible = true;
    // }
  }
}
