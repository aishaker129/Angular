import { Routes } from '@angular/router';
import { EmailComponent } from './component/email/email.component';
import { HomeComponent } from './component/home/home.component';



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
    }
];
