import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';
  controlFlow: string = '';
  directive: string = '';
  form: string = '';
  api: string = '';

  constructor(private router:Router){}
  onSelectionChangeControlFlow() {
    switch (this.controlFlow) {
      case 'if-else':
        this.router.navigate(['if-else']);
        break;
      case 'switch-for':
        this.router.navigate(['for-switch'])
        break;
    }
  }

  onSelectionChangeDirective() {
    switch (this.directive) {
      case 'attribute':
        this.router.navigate(['attribute-dir']);
        break;
      case 'stAttribute':
        this.router.navigate(['struc-dir'])
        break;
    }
  }
  onSelectionChangeForm() {
    switch (this.form) {
      case 'templete':
        this.router.navigate(['form-templete']);
        break;
      case 'reactive':
        this.router.navigate(['reactive-form'])
        break;
    }
  }
  onSelectionChangeApi() {
    switch (this.api) {
      case 'get':
        this.router.navigate(['get-api']);
        break;
      case 'post':
        this.router.navigate(['post-api'])
        break;
      case 'put':
        this.router.navigate(['put-api']);
        break;
      case 'delete':
        this.router.navigate(['delete-api']);
        break;
    }
  }
}
