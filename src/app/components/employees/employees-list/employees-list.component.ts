import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
  employess: Employee[] = [];
  constructor(private employeeService:EmployeeService) {
    
  }
  ngOnInit():void{
    this.employeeService.getAllEmployees()
    .subscribe({
      next:(employess) => {
        this.employess = employess
      },
    error:(response) =>{
      console.log(response)
    }
    })
    
  }
}
