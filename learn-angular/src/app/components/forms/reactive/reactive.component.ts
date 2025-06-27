import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("",[Validators.required,Validators.minLength(3)]),
    lastName: new FormControl("",[Validators.required,Validators.minLength(3)]),
    userName: new FormControl("",[Validators.email]),
    city: new FormControl("",[Validators.required,Validators.minLength(3)]),
    state: new FormControl("",[Validators.required]),
    zipCode: new FormControl("",[Validators.required,Validators.minLength(3)]),
    isAcceptTerms: new FormControl("",[Validators.required])
  });

  formValue: any;

  onSave() {
    this.formValue = this.studentForm.value;
  }
}
