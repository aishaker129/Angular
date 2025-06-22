import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';

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
    }
];
