import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Addproject } from '../addproject';
import { Task } from '../task';
import { AddUser } from '../add-user';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  

  addUser(addUser:AddUser){
    return this.http.post('http://localhost:8080/AngularPHPCrud/insert.php',addUser);
  }

  addproject(addProject:Addproject){
    return this.http.post('http://localhost:8080/AngularPHPCrud/project.php',addProject);
  }
  addTask(task:Task){
    return this.http.post('http://localhost:8080/AngularPHPCrud/taskApi.php',task);
  }
}
