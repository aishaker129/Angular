import { Routes } from '@angular/router';
import { EmailComponent } from './component/email/email.component';
import { HomeComponent } from './component/home/home.component';
import { EmailService } from './service/email.service';
import { HttpClientModule } from '@angular/common/http';



export const routes: Routes = [
    {
        path: "sendemail",
        component: EmailComponent,
        pathMatch:"full"
    },
    {
        path: "",
        component: HomeComponent,
        pathMatch:"full"
    }, {
        path: "",
        component: EmailService,
        pathMatch:"full"
    }
];
