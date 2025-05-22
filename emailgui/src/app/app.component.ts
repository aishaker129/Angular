import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';

@Component({
  selector: 'aishaker',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet,RouterModule], // ✅ Import the NavbarComponent here
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emailgui';
}
