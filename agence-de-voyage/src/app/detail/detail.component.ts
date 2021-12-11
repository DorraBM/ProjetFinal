import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/model/hotel';
import { AuthService } from 'src/service/auth.service';
import { HotelsService } from 'src/service/hotels.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  hotelID: any;
  hotelData: Hotel;
  ngOnInit(): void {
    this.hotelID = this.activeRoute.snapshot.params['id'];
    this.loadHotelDetails(this.hotelID);
  }
  constructor(public authService: AuthService, private hotelService: HotelsService, private route: Router, private activeRoute: ActivatedRoute) { }
  loadHotelDetails(productID) {
    this.hotelService.getProductDetails(productID).subscribe(data => {
    this.hotelData = data;
    });
  }
}
