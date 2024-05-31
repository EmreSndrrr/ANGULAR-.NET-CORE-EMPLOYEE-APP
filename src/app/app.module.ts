import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddemployeeComponent } from './components/employees/employees-list/employees/addemployee/addemployee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddemployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
