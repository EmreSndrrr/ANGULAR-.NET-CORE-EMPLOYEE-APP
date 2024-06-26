import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddemployeeComponent } from './components/employees/employees-list/employees/addemployee/addemployee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path:"",
    component:EmployeesListComponent
  },
  {
    path:"employees",
    component:EmployeesListComponent
  },
  {
    path:"employees/add",
    component:AddemployeeComponent
  },
  {
    path:"employees/edit/:id",
    component:EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
