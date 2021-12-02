import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../model/hotel';
import { HotelsService } from '../../service/hotels.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/service/auth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  listHotel:Hotel[]=[];
  rating=0;
   constructor( private hotelService:HotelsService, config: NgbRatingConfig,public authService: AuthService,private route: ActivatedRoute)
    {config.max = 5;
     config.readonly = true;
    hotelService.getHotels().subscribe(data=>this.listHotel=data);
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
   onSupprimer(id:number)
   {
     this.hotelService.supprimerHotel(id).subscribe(data =>{
     this.listHotel=this.listHotel.filter(elet=>elet.id!=id);
     });  
   }
   onModifier(id:number)
   {
     //this.hotelService.modifierHotel(id,this.listHotel).subscribe(data=>console.log(data));
   }
   onPersister()
   {
     // this.hotelService.persister();
   }

  

}
