import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  imports: [ NaPipe, AsyncPipe ,JsonPipe, DatePipe,UpperCasePipe,LowerCasePipe,TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  text: string = "angular";
  textu: string = "ANGULAR";
  textt: string = "this is demo title";

  currentData: Date = new Date();

  studentinfo: any = {
    'name': 'Akhlakul Islam',
    'dept': 'CSE',
    'city': 'Netrokona',
    'state':'MYM'
  }

  currentTime: Observable<Date> = new Observable<Date>;

  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }
}
