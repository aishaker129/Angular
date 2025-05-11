import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-email',
  imports: [MatFormFieldModule,MatInputModule,FormsModule,MatButtonModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {

}
