import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProduitGuard } from './admin.guard';
import { AjouterHotelComponent } from './ajouter-hotel/ajouter-hotel.component';
import { ContactComponent } from './contact/contact.component';

import { DetailComponent } from './detail/detail.component';
import { ErrorComponent } from './error/error.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: 'acceuil', component: AcceuilComponent  },
  { path: 'contact', component: ContactComponent  },
  { path: 'aboutus', component: AboutUsComponent  },

  { path: 'menu', component: MenuComponent  },
  {path:'search/:searchTerm', component:AcceuilComponent},
  {path: 'detail/:id', component:DetailComponent},
  {path: 'detail', component:DetailComponent},
  {path: 'app-forbidden', component: ForbiddenComponent}, 
  {path : 'Ajouter', component :AjouterHotelComponent, canActivate:[ProduitGuard]}, 
 { path: 'login', component: LoginComponent },
 { path: 'reserver/:id', component: ReservationComponent },
 {path:'',redirectTo:'acceuil', pathMatch:'full'},
 { path: '**', component: ErrorComponent },
   
 
 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
