import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterHotelComponent } from './ajouter-hotel/ajouter-hotel.component';
import { CarousselComponent } from './Meneu/caroussel/caroussel.component';
import { NavbarComponent } from './Meneu/navbar/navbar.component';
import { FooterComponent } from './Meneu/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { ErrorComponent } from './error/error.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';



import { TelephonePipe } from '../pipe/telephone.pipe';
import { ReservationComponent } from './reservation/reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LoginComponent,
    DetailComponent,
    AjouterHotelComponent,
    CarousselComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    ErrorComponent,
  
   
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
