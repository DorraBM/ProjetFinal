import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/user';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user=new User();
 erreur=0;
 constructor(private authService : AuthService, 
  private  router: Router) { } 
 onLoggedin(){ 
 // console.log(this.user);   
  let isValidUser: Boolean = this.authService.SignIn(this.user); 
   if (isValidUser)     
    this.router.navigate(['acceuil']);   
    else      
  this.erreur=1;
    
  } 

 


  ngOnInit(): void {
  }

}
