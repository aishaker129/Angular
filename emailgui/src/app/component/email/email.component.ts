import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from '../../service/email.service';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-email',
  imports: [MatFormFieldModule,MatInputModule,FormsModule,MatButtonModule,CommonModule,HttpClientModule,MatProgressSpinnerModule],
  templateUrl: './email.component.html', 
  styleUrl: './email.component.css'
})
export class EmailComponent implements OnInit{

  data = {
    to: "",
    subject: "",
    message:""
  }

  flag = false;

  constructor(private email:EmailService,private snak:MatSnackBar){ }
  ngOnInit(): void {
      
  }

  doSubmitForm() {

    console.log("Try to From submit.....");
    console.log("Data", this.data);
    
    if (this.data.to == '' || this.data.subject == '' || this.data.message == '') {
      this.snak.open("fields can not be empty !!", "ok");
      return;
    }

    this.flag = true;
    this.email.sendEmail(this.data).subscribe(
      response=> {
        console.log(response);
        this.flag = false;
        this.snak.open("Send Success...", "OK");
      },
      error=> {
        console.log(error);
        this.flag = false;
        this.snak.open("ERROR !!", "OK");
      }
    )
    
  }
}
