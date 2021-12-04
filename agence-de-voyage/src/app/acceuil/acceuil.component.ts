import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../model/hotel';
import { HotelsService } from '../../service/hotels.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  listHotel: Hotel[] = [];
  allHotels: Hotel[] = [];
  rating = 0;
  hotelID: any;
  hotelData: Hotel;
  /*constructor(private hotelService: HotelsService, config: NgbRatingConfig, public authService: AuthService, private route: ActivatedRoute, private router: Router) {
    config.max = 5;
    config.readonly = true;
 
  }*/
 

  newHotel = new Hotel(10, '', '', '', 0, 0, true, "", 0, "", true, true, true,[]);
  /*listHotel:Hotel[]=[];
  rating=0;*/
   constructor( private hotelService:HotelsService,private _snackBar: MatSnackBar, config: NgbRatingConfig,public authService: AuthService,private route: ActivatedRoute,private router: Router)
    {config.max = 5;
     config.readonly = true;
    hotelService.getHotels().subscribe(data=>this.listHotel=data);
    }
 
   ngOnInit(): void {
    this.hotelID = this.route.snapshot.params['id'];
    
    this.loadHotelDetails(this.hotelID);
    this.hotelService.getHotels().subscribe(data => this.listHotel = data);
    this.hotelService.getHotels().subscribe(data => this.allHotels = data);

   
    //   this.route.params.subscribe(params => {
    //      if (params.searchTerm)
    //       this.listHotel = this.hotelService.getHotels().filter(hotel =>
    //         hotel.lieu.toLowerCase().includes(params.searchTerm.toLowerCase()));
    //    else
    //       this.hotelService.getHotels();
    //  })
    
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
   onSupprimer(id:number)
   {
     this.hotelService.supprimerHotel(id).subscribe(data =>{
     this.listHotel=this.listHotel.filter(elet=>elet.id!=id);
     this.SuccessSnackBar("Hotel Deleted");
     });  
   }
   onModifier(t:Hotel)
   { this.newHotel=t;
     
   }
   upDate()
   {
    this.hotelService.modifierHotel(this.newHotel.id,this.newHotel).subscribe(data=>
      {this.SuccessSnackBar("Hotel modified");}
      );
   }
   SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 3000});
  }
  /*ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 3000 });
  }*/
  search(a: string) {

    if (a != "") {

      this.listHotel = this.allHotels.filter(hotel =>
        hotel.lieu.toLowerCase().includes(a.toLowerCase()));

    }
    else
     this.listHotel=this.allHotels;


  }
  

}
