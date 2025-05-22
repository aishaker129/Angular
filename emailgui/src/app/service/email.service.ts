import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  private baseUrl:string="http://localhost:8080"

  constructor(private http:HttpClient) { }

 // In your service:
sendEmail(data: any) {
  return this.http.post(`${this.baseUrl}/sendmail`, data);
}

}
