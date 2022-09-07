import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import { AuthService } from 'src/app/shared/auth.service';//done
import {MatSnackBar} from '@angular/material/snack-bar';//done
import {HttpStatusCodesEnum} from 'src/app/shared/http-status-codes-enum';//done
import { first } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 angForm:FormGroup
  constructor(
    private fb:FormBuilder, private dataService :AuthService, private router: Router
  ) { 
    this.angForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'pass': new FormControl(null, Validators.required),
  })    
  }

  postdata(angForm:any){
    this.dataService.userlogin(angForm.value.email,angForm.value.pass)
    .pipe(first())
    .subscribe(
      data=>{
        console.log(data);
        //const redirect=this.dataService.redirectUrl? this.dataService.redirectUrl :'/sidebar';
        //this.router.navigate(['/sidebar']);
      },
      error =>{
        alert("Email or Password is incorrect");
      
      });
      
      
    
  }

  ngOnInit(): void {
  
  }


 
}


  
    
