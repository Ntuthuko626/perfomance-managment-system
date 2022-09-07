import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/shared/project.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private task:ProjectService,
   ) { }
   addForm:FormGroup | any;
  ngOnInit(){
    this.addForm=this.formBuilder.group({
      projectName:['', Validators.required],
      taskId:['', Validators.required],
      taskName:['',Validators.required],
      taskDescription:['', Validators.required],
      taskDueDate:['', Validators.required],
      whoDoTask:['', Validators.required]
      
      
    });
  }
  onSubmit(){
     this.task.addTask(this.addForm.value)
      .subscribe(_data =>{
      this.router.navigate(['viewTask']);
    })
  }


}
