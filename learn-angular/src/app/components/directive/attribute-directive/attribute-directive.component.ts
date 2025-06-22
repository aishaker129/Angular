import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  div1BgColor: string = "";
  isActive: boolean = false;
  num1: string = '';
  num2: string = '';

  isCheck: boolean = false;
  state: string = "";

  customerStyle: any = {
    'color': 'white',
    'background-color': 'green',
    'width': '200px',
    'height': '200px',
    'border-radius': '50%',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'text-align': 'center'
  };

  studentList: any[] = [
    {studentId:1,name:'aa', totalMarks:23, gender:'male',city:'dhaka',isActive:false},
    {studentId:12,name:'bb', totalMarks:53, gender:'female',city:'netrokona',isActive:true},
    {studentId:32,name:'cc', totalMarks:95, gender:'male',city:'Kishorganj',isActive:false},
    {studentId:56,name:'dd', totalMarks:83, gender:'female',city:'sunamganj',isActive:true},
    {studentId:76,name:'ee', totalMarks:93, gender:'male',city:'gazipur',isActive:false}
  ]

  redButtonclick() {
    this.div1BgColor = 'bg-danger';
  }
  blueButtonclick() {
    this.div1BgColor = 'bg-primary';
  }
  addToggol() {
    this.isActive = !this.isActive;
  }
}
