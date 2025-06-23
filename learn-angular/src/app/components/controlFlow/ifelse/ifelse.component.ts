import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-ifelse',
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
  isdiv1visible: boolean = false;
  isdiv2visible: boolean = false;
  num1: string = '';
  num2: string = '';
  selectedStatus: string = '';

  showdiv1() {
    this.isdiv1visible = true;
  }
  hidediv1() {
    this.isdiv1visible = false;
  }
  togglediv2() {
    this.isdiv2visible = !this.isdiv2visible;
  }

  constructor(private router:Router) {
    
  }

  nevigtatetostructuralattribute() {
    this.router.navigateByUrl('for-switch');
  }
}
