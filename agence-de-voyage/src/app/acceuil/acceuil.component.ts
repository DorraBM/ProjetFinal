import { Reservation } from '../../model/reservation';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../model/hotel';
import { HotelsService } from '../../service/hotels.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  constructor(
    private hotelService: HotelsService, 
    private _snackBar: MatSnackBar, 
    config: NgbRatingConfig, 
    public authService: AuthService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private fb: FormBuilder
    ) 
    {
      config.max = 5;
      config.readonly = true;
      hotelService.getHotels().subscribe(data => this.listHotel = data);
    }
    hotelForm:FormGroup=new FormGroup({ 
      // images: this.fb.array([])
    });
  listHotel: Hotel[] = [];
  listReservation:Reservation[]=[];
  allHotels: Hotel[] = [];
  rating = 0;
  hotelID: any;
  hotelData: Hotel;
  newHotel = new Hotel(10, '', '', '', 0, 0, true,0, "", 0, "", true, true, true, []);
  images: string[] = this.newHotel.images;
  count:number;


  ngOnInit(): void {
    this.hotelID = this.route.snapshot.params['id'];
    this.loadHotelDetails(this.hotelID);
    this.hotelService.getHotels().subscribe(data => this.listHotel = data); 
    this.hotelService.getHotels().subscribe(data => this.allHotels = data);
    this.hotelService.getReservations().subscribe(data=>{this.listReservation=data;
  });
  
  }
  loadHotelDetails(productID: any): void {
    this.hotelService.getProductDetails(productID).subscribe(data => {
      this.hotelData = data;
    });
  }
  getNavigation(link: string,id: number) {
      this.router.navigate([link + '/' + id]); 
  }
  onSupprimer(id: number) {
    this.hotelService.supprimerHotel(id).subscribe(data => {
      this.listHotel = this.listHotel.filter(elet => elet.id != id);
      this.SuccessSnackBar("Hotel Deleted");
    });
  }

  SupprimerImage(i:number)
  { /*console.log(i);
    const index = i;
    if (index !== -1) {
      this.images.splice(index, 1);
    }
    console.log(index);*/
    /*this.hotelService.supprimerImage(i).subscribe(data => {
      this.listHotel = this.listHotel.filter(elet => elet.images[i]!=this.newHotel.images[i]);
      this.SuccessSnackBar("image Deleted");
    });*/ 
  }
  nePasSupprimer() {
    this.SuccessSnackBar("Hotel is not Deleted");
  }
  onModifier(id: number, t: Hotel) {
    let p = Object.assign({}, t)
    this.newHotel = p;
  }
  upDate()
   {
    this.hotelService.modifierHotel(this.newHotel.id, this.newHotel).subscribe(data =>
      { 
        this.SuccessSnackBar("Hotel Modified");
      }
    );
  }
  annuler()
   {
    this.SuccessSnackBar("Hotel is not Modified");
  }
  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 3000 });
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 3000 });
  }
  search(a: string) {
    if (a != "") 
    {this.listHotel = this.allHotels.filter(hotel =>
        hotel.lieu.toLowerCase().includes(a.toLowerCase()));
        this.count=this.listHotel.length; 
    }
    else{
      this.listHotel = this.allHotels;
      this.count=this.listHotel.length;
  }
}
isValidTel():boolean
{ return this.hotelForm.controls['telephone'].errors?.pattern('[1-9][0-9]{7}')

}
isValidEtoile():boolean
{ return this.hotelForm.controls['nbEtoiles'].errors?.pattern('[0-5]')}
SupprimerReservation(id:number)
{
  this.hotelService.supprimerReservation(id).subscribe(data => {
    this.listReservation = this.listReservation.filter(elet => elet.id != id);
    this.SuccessSnackBar("Reservation Deleted");
  });
}
}
