import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Hotel } from 'src/model/hotel';
import { HotelsService } from 'src/service/hotels.service';

@Component({
  selector: 'app-acceuil-user',
  templateUrl: './acceuil-user.component.html',
  styleUrls: ['./acceuil-user.component.css']
})
export class AcceuilUserComponent implements OnInit {

 
  listHotel:Hotel[]=[];
  rating=0;
   constructor( private hotelService:HotelsService, config: NgbRatingConfig) 
   {config.max = 5;
     config.readonly = true; }
 
   ngOnInit(): void {
    this.listHotel= this.hotelService.getHotel();
   }
 
 
}
