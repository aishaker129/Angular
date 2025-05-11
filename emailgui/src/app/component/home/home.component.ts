import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule,MatSnackBarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private snack:MatSnackBar) {}

  ngOnInit(): void {
      
  }

  btnClick() {
    console.log("btn click");

    this.snack.open("Hey wellcome to this app","Cancel");
    
  }
}
