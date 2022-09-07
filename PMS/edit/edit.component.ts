import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ProjectService } from 'src/app/shared/project.service';
import { Router, Params,ActivatedRoute } from '@angular/router';  
import { AddUser } from 'src/app/add-user';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router, private routes: ActivatedRoute ) { }

  addForm:FormGroup | any;

  ngOnInit(){
    const routeParams=this.routes.snapshot.params;
    console.log(routeParams);
    this.addForm=this.formBuilder.group({
    
    fName:['',Validators.required],
    lName:['',[Validators.required,Validators.maxLength(12)]],
    email:['',[Validators.required,Validators.maxLength(30)]]
   });
  }
  update(){
    console.log('update');
     
  }

}
