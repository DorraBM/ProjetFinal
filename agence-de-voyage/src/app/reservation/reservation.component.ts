import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Reservation } from '../../model/reservation';
import { HotelsService } from 'src/service/hotels.service';
import { Hotel } from 'src/model/hotel';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  hidden: boolean = true;
  visible: boolean = false;
prixTotal:number;
  nbNuits: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  nbChambres: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  nbAdultes: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  nbEnfants: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  pension: string[] = ["petit_dejeuner", "demi_pension", "all_inclusive_soft"];
  reservationForm: FormGroup = new FormGroup({});
  lesReservation: Reservation[] = [];
  reservationData: Reservation;
  reservationID: any;
  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private hotelsService: HotelsService, private _snackBar: MatSnackBar) { }

  //  getReservation() {
  hotelID: any;
  hotelData: Hotel;


  // }
  hiddenT() {
    this.hidden = false;
    this.visible = true;

  }
  // public get dateArivee() { return this.reservationForm.get('dateArivee'); }
  // public get nbNuit() { return this.reservationForm.get('nbNuits'); }
  // public get nbChambre() { return this.reservationForm.get('nbChambres'); }
  // public get nbAdulte() { return this.reservationForm.get('nbAdultes'); }
  // public get pensions() { return this.reservationForm.get('pension'); }

  calculerPRIX() {
    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      (today.getDate() + 1);
     

    if (this.reservationForm.value['nbNuits'] == null || this.reservationForm.value['pension'] == null || this.reservationForm.value['nbChambres']==null || this.reservationForm.value['nbAdultes'] ==null|| this.reservationForm.value['dateArivee'] == null) {
      this.ErrorSnackBar("please fill all the fiels");
    }
    else if (new Date(this.reservationForm.value['dateArivee']) < new Date(date)) {
      this.ErrorSnackBar(' Please choose a Future Date  ');
    }

    else {
      if (this.reservationForm.value['pension'] === "petit_dejeuner") {
        this.prixTotal= (this.reservationForm.value['nbNuits'] * this.hotelData.prix * this.reservationForm.value['nbChambres'] * this.reservationForm.value['nbAdultes']) + 100;
      }
      else if (this.reservationForm.value['pension'] === "demi_pension") {
        this.prixTotal= (this.reservationForm.value['nbNuits'] * this.hotelData.prix * this.reservationForm.value['nbChambres'] * this.reservationForm.value['nbAdultes']) + 300;
      }
      else if (this.reservationForm.value['pension'] === "all_inclusive_soft") {
        this.prixTotal= (this.reservationForm.value['nbNuits'] * this.hotelData.prix * this.reservationForm.value['nbChambres'] * this.reservationForm.value['nbAdultes']) + 700;
      }
      else{this.prixTotal= (this.reservationForm.value['nbNuits'] * this.hotelData.prix * this.reservationForm.value['nbChambres'] * this.reservationForm.value['nbAdultes'])}
    
   this.afficherPrix()
    }
  }
  ngOnInit(): void {

    this.reservationForm = this.formBuilder.group(
      {
        dateArivee: [null, Validators.required],
        nbNuits: [null, Validators.required],
        nbChambres: [null, Validators.required],
        nbAdultes: [null, Validators.required],
        nbEnfants: [0],
        pension: [null, Validators.required],
        
      }
    )
    
    this.hotelID = this.activatedRoute.snapshot.params['id'];

    this.loadHotelDetails(this.hotelID);

  }





  reserver() {
    this.hotelsService.addReservation(this.reservationForm.value)
      .subscribe(data => this.lesReservation.push(data));
  }


  //  this.reservationID = this.activatedRoute.snapshot.params['id'];
  // console.log(this.reservationID);


  loadHotelDetails(productID) {
    this.hotelsService.getProductDetails(productID).subscribe(data => {


      this.hotelData = data;
      console.log(this.hotelData.prix)


    });
  }

  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 3000 });
  }

  affiche: boolean = false;
  afficherPrix() {
    this.affiche = true;
  }

}

