import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templete',
  imports: [FormsModule],
  templateUrl: './templete.component.html',
  styleUrl: './templete.component.css'
})
export class TempleteComponent {

  studentObject: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    isAcceptTerms:false
  }

  findvalue: any;

  onsave() {
    debugger;
    this.findvalue = this.studentObject;
  }
}
