import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/shared/project.service';
import { Addproject } from 'src/app/addproject';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private project:ProjectService) { }

  addForm:FormGroup | any;
  
  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
    
   projectName:['', Validators.required],
   objectives:['', Validators.required],
   goal:['', Validators.required],
   sdbipNo:['', Validators.required],
   ProjectId:['', Validators.required],
   institution:['', Validators.required],
   Annualtarget:['', Validators.required],
   Duedate:['', Validators.required],
   Strategy:['', Validators.required],
   Department:['', Validators.required],
   budget:['', Validators.required],
   Q1:['', Validators.required],
   Q2:['', Validators.required],
   Q3:['', Validators.required],
   Q4:['', Validators.required]
     
      
    });
  }
  onSubmit(){
    this.project.addproject(this.addForm.value)
     .subscribe(_data =>{
     this.router.navigate(['viewProject']);
   })
 }

}
