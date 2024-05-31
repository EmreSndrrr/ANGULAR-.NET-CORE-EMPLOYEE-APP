import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  base="https://localhost:7169"
  url="/api/Employee"
  constructor(private http: HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
   return this.http.get<Employee[]>(this.base+this.url);
  }
  addEmployee(addEmployeeRequest : Employee):Observable<Employee>{
   addEmployeeRequest.id='00000000-0000-0000-0000-000000000000'
    return this.http.post<Employee>(`https://localhost:7169/api/Employee`,addEmployeeRequest)
  }

  getEmployee(id:string):Observable<Employee>{
    return this.http.get<Employee>(this.base+this.url+'/'+id)
  }
  
  updateEmployee(id:string, updateEmployeeRequest:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.base+this.url+'/'+id, updateEmployeeRequest)
  }

  deleteEmployee(id:string):Observable<Employee>{
    return this.http.delete<Employee>(this.base + this.url + '/' + id);
  }
}
