import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/user';
import { AuthService } from 'src/service/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user=new User();
motdepasse:string="password";
eye:boolean=true;
 constructor(private authService : AuthService,private _snackBar: MatSnackBar, 
  private  router: Router) { } 
 onLoggedin(){ 
 // console.log(this.user);   
  let isValidUser: Boolean = this.authService.SignIn(this.user); 
   if (isValidUser)     
    {this.router.navigate(['acceuil']); 
    this.SuccessSnackBar("Login succeeded")}  
    else      
  {
  this.ErrorSnackBar("Adress ou mot  erronés...");
  } 
  } 
 
  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 1000});
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 2000 });
  }


  ngOnInit(): void {
    console.log(this.motdepasse);
  }

eyes()
{
  this.eye=!this.eye;
  if(this.eye)
  {this.motdepasse="password";}
  else
  {this.motdepasse="text";}
  console.log(this.motdepasse);
  console.log(this.eye);
  
}
}
