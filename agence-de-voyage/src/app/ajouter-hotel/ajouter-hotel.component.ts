import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hotel } from 'src/model/hotel';
import { HotelsService } from 'src/service/hotels.service';

@Component({
  selector: 'app-ajouter-hotel',
  templateUrl: './ajouter-hotel.component.html',
  styleUrls: ['./ajouter-hotel.component.css']
})
export class AjouterHotelComponent implements OnInit {
  newHotel= new Hotel(10, '', '', '', 0,0,true,"",0,"",true,true,true);
  message:string="Votre nouveau Hotel a bien été ajouté";
  ajouterHotels(id:string,nom:string,prix:string,lieu:string,nbEtoiles:string,promotion:string,image:string)
  {
   this.newHotel=new Hotel(Number(id), nom, image, lieu, Number(prix),Number(nbEtoiles),Boolean(promotion),description,Number(telephone),Number(adresse),Boolean(internet),Boolean(piscine),Boolean(parking));
   this.hotelService.ajouterHotel(this.newHotel);
   console.log();

 
  }
  constructor( private hotelService:HotelsService) { }

  ngOnInit(): void {
  }
 onReset(f:NgForm)
 {
   f.reset();
 }
}
function adresse(adresse: any): number {
  throw new Error('Function not implemented.');
}

