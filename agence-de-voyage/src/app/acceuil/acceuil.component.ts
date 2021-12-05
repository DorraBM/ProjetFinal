import { FormGroup } from '@angular/forms';
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
    ) 
    {
      config.max = 5;
      config.readonly = true;
      hotelService.getHotels().subscribe(data => this.listHotel = data);
    }
    hotelForm:FormGroup=new FormGroup({});
  listHotel: Hotel[] = [];
  allHotels: Hotel[] = [];
  rating = 0;
  hotelID: any;
  hotelData: Hotel;
  newHotel = new Hotel(10, '', '', '', 0, 0, true,0, "", 0, "", true, true, true, []);
  galerie: string[] = this.newHotel.images;

  ngOnInit(): void {
    this.hotelID = this.route.snapshot.params['id'];
    this.loadHotelDetails(this.hotelID);
    this.hotelService.getHotels().subscribe(data => this.listHotel = data);
    this.hotelService.getHotels().subscribe(data => this.allHotels = data);
  }
  loadHotelDetails(productID) {
    this.hotelService.getProductDetails(productID).subscribe(data => {


      this.hotelData = data;


    });
  }
  getNavigation(link, id) {
    if (id === '') {
      this.router.navigate([link]);
    } else {
      this.router.navigate([link + '/' + id]);
    }
  }
  onSupprimer(id: number) {
    this.hotelService.supprimerHotel(id).subscribe(data => {
      this.listHotel = this.listHotel.filter(elet => elet.id != id);
      this.SuccessSnackBar("Hotel Deleted");
    });
  }
  nePasSupprimer() {
    this.SuccessSnackBar("Hotel is not Deleted");

  }
  onModifier(id: number, t: Hotel) {
    let p = Object.assign({}, t)
    this.newHotel = p;
    console.log("listHotel:" + this.listHotel);


  }
  upDate()
   {
    this.hotelService.modifierHotel(this.newHotel.id, this.newHotel).subscribe(data =>
      {
        this.SuccessSnackBar("Hotel Modified");
        console.log("listHotel:" + data)
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
    {
      this.listHotel = this.allHotels.filter(hotel =>
        hotel.lieu.toLowerCase().includes(a.toLowerCase()));
    }
    else
      this.listHotel = this.allHotels;
  }

  public get nom()
  {
    return this.hotelForm.get('nom');
  }
  public get prix()
  {
    return this.hotelForm.get('prix');
  }
  public get lieu()
  {
    return this.hotelForm.get('lieu');
  }
  public get telephone()
  {
    return this.hotelForm.get('telephone');
  }
  public get adresse()
  {
    return this.hotelForm.get('adresse');
  }
  public get nbEtoiles()
  {
    return this.hotelForm.get('nbEtoiles');
  }
  public get promotion()
  {
    return this.hotelForm.get('promotion');
  }
  public get pourcentage()
  {
    return this.hotelForm.get('pourcentage');
  }
  isValidTel():boolean
  { return this.hotelForm.controls['telephone'].errors?.pattern('[1-9][0-9]{7}')

  }
  isValidEtoile():boolean
  { return this.hotelForm.controls['nbEtoiles'].errors?.pattern('[0-5]')

  }


}
