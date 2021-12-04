import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  identifiant:number = 0;
  nbNuits:number[]=[1,2,3,4,5,6,7,8];
  nbChambres:number[]=[1,2,3,4,5,6,7,8];
  nbAdultes:number[]=[1,2,3,4,5,6,7,8];
  constructor(private activatedRoute:ActivatedRoute) { }
 

  ngOnInit(): void {
   
  
  this.identifiant = this.activatedRoute.snapshot.params['id'];
}
}



