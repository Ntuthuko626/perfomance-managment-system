import { Injectable,Output,EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { AddUser } from '../add-user';
import { Users } from '../Users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:any;
  constructor(private httpClient:HttpClient) { }
 
  signInWithEmailAndPassword(userCredentials: any) {
    //console.log(userCredentials);
    const params = new HttpParams()
      .set('action', 'signInWithEmailAndPassword');

    return this.httpClient.post('http://localhost:8080/ArtHub/arthub_offeredServices_apiHandler.php',
      JSON.stringify({userCredentials}),
      {params: params, observe: "response", responseType: "json"});
  }

  getCurrentlyLoggedInUserId() {
    return <string>sessionStorage.getItem('userId');
  }

  logOut() {
    sessionStorage.clear();
  }

  public userlogin(email:any , pass:any){
  //alert 
  return this.httpClient.post<any>(this.baseUrl+'/login.php',{email,pass})
  .pipe(map(Users=>{
    console.log(Users)
    this.setToken(Users[0].fName);
  
  }))
  }
  setToken(token:string){
    localStorage.setItem('token',token);
  }
  }
