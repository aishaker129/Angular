import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-for-switch',
  imports: [FormsModule],
  templateUrl: './for-switch.component.html',
  styleUrl: './for-switch.component.css'
})
export class ForSwitchComponent {
  city: string[] = ['Dhaka', 'Netrokona', 'Kishorgang', 'Sunamgang', 'Gazipur'];
  
  studentList: any[] = [
    {studentId:1,name:'aa', totalMarks:23, gender:'male',city:'dhaka',isActive:false},
    {studentId:12,name:'bb', totalMarks:53, gender:'female',city:'netrokona',isActive:true},
    {studentId:32,name:'cc', totalMarks:95, gender:'male',city:'Kishorganj',isActive:false},
    {studentId:56,name:'dd', totalMarks:83, gender:'female',city:'sunamganj',isActive:true},
    {studentId:76,name:'ee', totalMarks:93, gender:'male',city:'gazipur',isActive:false}
  ]

  number: string = '';

  constructor(private router:Router) {
    
  }
  
  nevigateTotheIfElse() {
    this.router.navigateByUrl('if-else')
  }
}
