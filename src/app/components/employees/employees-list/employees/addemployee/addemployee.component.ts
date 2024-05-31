import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
    addEmployeeRequest:Employee={
      id:'',
      name:'',
      email:'',
      phone:0,
      salary:0,
      department:''

    }
    constructor(private employeeService:EmployeeService,private router : Router) {
      
    }
    addEmployee(){
      this.employeeService.addEmployee(this.addEmployeeRequest)
      .subscribe({
        next:(employess) => {
          this.router.navigate(['employees'])
        },
      error:(response) =>{
        console.log(response)
      }
      })
    }
}
