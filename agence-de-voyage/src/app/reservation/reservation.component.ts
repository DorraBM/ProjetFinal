import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  prixTotal: number;
  nbNuits: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  nbChambres: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  nbAdultes: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  nbEnfants: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  pension: string[] = ["breakfast", "half_pension", "all_inclusive_soft"];
  reservationForm: FormGroup = new FormGroup({});
  lesReservation: Reservation[] = [];
  reservationData: Reservation;
  reservationID: any;
  hotelID: any;
  hotelData: Hotel;
  prix: number = 0;
  affiche: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private route: Router, private formBuilder: FormBuilder, private hotelsService: HotelsService, private _snackBar: MatSnackBar) { }
  ngOnInit(): void {

    this.reservationForm = this.formBuilder.group(
      {
        dateArivee: [null],
        nbNuits: [null],
        nbChambres: [null],
        nbAdultes: [null],
        nbEnfants: [0],
        pension: [null],
        first_name: ['', [Validators.required, Validators.pattern('[A-Z][a-z]+')]],
        last_name: ['', Validators.required],
        email: ['', [Validators.required, , Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        phone_number: [0, [Validators.required, Validators.pattern('[0-9]{8}')]],
      }
    )

    this.hotelID = this.activatedRoute.snapshot.params['id'];
    this.loadHotelDetails(this.hotelID);
    if (this.hotelData.promotion) {
      this.prix = this.hotelData.prix - (this.hotelData.prix * this.hotelData.pourcentage / 100);
    }
    else {
      this.prix = this.hotelData.prix;
    }
  }


  public get first_name() { return this.reservationForm.get('first_name'); }
  public get last_name() { return this.reservationForm.get('last_name'); }
  public get email() { return this.reservationForm.get('email'); }
  public get phone_number() { return this.reservationForm.get('phone_number'); }

  hiddenT() {
    this.hidden = false;
    this.visible = true;
  }

  calculerPRIX() {
    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      (today.getDate() + 1);

    if (this.reservationForm.value['nbNuits'] == null || this.reservationForm.value['pension'] == null || this.reservationForm.value['nbChambres'] == null || this.reservationForm.value['nbAdultes'] == null || this.reservationForm.value['dateArivee'] == null) {
      this.ErrorSnackBar("please fill all the fiels");
    }
    else
      if (new Date(this.reservationForm.value['dateArivee']) < new Date(date)) {
        this.ErrorSnackBar(' Please choose a Future Date  ');
      }
      else {
        if (this.reservationForm.value['pension'] === "breakfast") {
          this.prixTotal = ((this.reservationForm.value['nbNuits'] * this.prix) + (this.reservationForm.value['nbChambres'] * 50)) + (100 * this.reservationForm.value['nbAdultes']);
        }
        else
          if (this.reservationForm.value['pension'] === "half_pension") {
            this.prixTotal = ((this.reservationForm.value['nbNuits'] * this.prix) + (this.reservationForm.value['nbChambres'] * 50)) + (200 * this.reservationForm.value['nbAdultes']);
          }
          else
            if (this.reservationForm.value['pension'] === "all_inclusive_soft") {
              this.prixTotal = ((this.reservationForm.value['nbNuits'] * this.prix) + (this.reservationForm.value['nbChambres'] * 50)) + (300 * this.reservationForm.value['nbAdultes']);
            }
            else {
              this.prixTotal = ((this.reservationForm.value['nbNuits'] * this.prix) + (this.reservationForm.value['nbChambres'] * 50));
            }
        this.afficherPrix()
      }
  }
  
  afficherPrix() {
    this.affiche = true;
  }

  retourAcceuil() {
    this.route.navigate(['/acceuil']);
    this.SuccessSnackBar("Reservation confirmed");
  }

  reset() {
    this.reservationForm.reset();
  }
  reserver() {
    this.hotelsService.addReservation(this.reservationForm.value)
      .subscribe(data => {
        this.lesReservation.push(data);
        this.retourAcceuil();
      });
  }
  loadHotelDetails(productID) {
    this.hotelsService.getProductDetails(productID).subscribe(data => {
      this.hotelData = data;
      console.log(this.hotelData.prix)
    });
  }

  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 3000 });
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 3000 });
  }



}

