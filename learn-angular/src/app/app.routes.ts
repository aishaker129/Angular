import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';
import { ForSwitchComponent } from './components/controlFlow/for-switch/for-switch.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TempleteComponent } from './components/forms/templete/templete.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { GetApiComponent } from './components/api/get-api/get-api.component';
import { PostApiComponent } from './components/api/post-api/post-api.component';
import { PutApiComponent } from './components/api/put-api/put-api.component';
import { DeleteApiComponent } from './components/api/delete-api/delete-api.component';

export const routes: Routes = [
    {
        path: 'add-emp',
        component:AddEmployeeComponent
    },
    {
        path: 'emp-list',
        component:EmployeeListComponent
    },
    {
        path: 'data-binding',
        component:DataBindingComponent
    },
    {
        path: 'attribute-dir',
        component:AttributeDirectiveComponent
    },
    {
        path: 'struc-dir',
        component:StructuralDirectiveComponent
    },
    {
        path: 'if-else',
        component: IfelseComponent
    },
    {
        path: 'for-switch',
        component:ForSwitchComponent
    },
    {
        path: 'pipe',
        component:PipeComponent
    },
    {
        path: 'form-templete',
        component:TempleteComponent
    },
    {
        path: 'reactive-form',
        component:ReactiveComponent
    },
    {
        path: 'get-api',
        component:GetApiComponent
    },
    {
        path: 'post-api',
        component:PostApiComponent
    },
    {
        path: 'put-api',
        component:PutApiComponent
    },
    {
        path: 'delete-api',
        component:DeleteApiComponent
    }
];
