import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 { path: 'acceuil', component: AcceuilComponent  },
{ path: 'login', component: LoginComponent },
{path:'',redirectTo:'acceuil', pathMatch:'full'}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
