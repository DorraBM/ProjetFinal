import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
 listHotel:Hotel[]=[];
  constructor( private hotelService:HotelsService) { }

  ngOnInit(): void {
   this.listHotel= this.hotelService.getHotel();
  }

}
