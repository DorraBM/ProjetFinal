import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../model/hotel';
import { HotelsService } from '../../service/hotels.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  listHotel:Hotel[]=[];
  rating=0;
   constructor( private hotelService:HotelsService, config: NgbRatingConfig,public authService: AuthService,private route: ActivatedRoute,private router: Router) {config.max = 5;
     config.readonly = true;
    hotelService.getHotels().subscribe(data=>this.listHotel=data);
    }
    getNavigation(link, id){
      if(id === ''){
          this.router.navigate([link]);
      } else {
          this.router.navigate([link + '/' + id]);
      }
  }

 
   ngOnInit(): void {
    this.hotelService.getHotels().subscribe(data=>this.listHotel=data);
   
  //   this.route.params.subscribe(params => {
  //      if (params.searchTerm)
  //       this.listHotel = this.hotelService.getHotels().filter(hotel =>
  //         hotel.lieu.toLowerCase().includes(params.searchTerm.toLowerCase()));
  //    else
  //       this.hotelService.getHotels();
  //  })
    
   }
   

}
