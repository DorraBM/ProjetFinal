import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DetailHotelComponent } from './detail-user/detail-user.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { DetailComponent } from './detail/detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcceuilUserComponent } from './acceuil-user/acceuil-user.component';
import { AjouterHotelComponent } from './ajouter-hotel/ajouter-hotel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CarousselComponent } from './menu/caroussel/caroussel.component';
import { NavbarComponent } from './menu/navbar/navbar.component';
import { FooterComponent } from './menu/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { ErrorComponent } from './error/error.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { ModifierHotelComponent } from './modifier-hotel/modifier-hotel.component';
import { TelephonePipe } from './telephone.pipe';
import { ReservationComponent } from './reservation/reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    DetailHotelComponent,
    LoginComponent,
    MenuComponent,
    DetailComponent,
    AcceuilUserComponent,
    AjouterHotelComponent,
    ForbiddenComponent,
    CarousselComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    ErrorComponent,
  
    ModifierHotelComponent,
    TelephonePipe,
    ReservationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    NoopAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
