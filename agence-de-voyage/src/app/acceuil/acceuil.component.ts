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

  listHotel: Hotel[] = [];
  allHotels: Hotel[] = [];
  rating = 0;
  constructor(private hotelService: HotelsService, config: NgbRatingConfig, public authService: AuthService, private route: ActivatedRoute, private router: Router) {
    config.max = 5;
    config.readonly = true;
 
  }
  getNavigation(link, id) {
    if (id === '') {
      this.router.navigate([link]);
    } else {
      this.router.navigate([link + '/' + id]);
    }
  }


  ngOnInit(): void {
    this.hotelService.getHotels().subscribe(data => this.listHotel = data);
    this.hotelService.getHotels().subscribe(data => this.allHotels = data);





  }
  onSupprimer(id: number) {
    this.hotelService.supprimerHotel(id).subscribe(data => {
      this.listHotel = this.listHotel.filter(elet => elet.id != id);
    });
  }
  onModifier(id: number) {
    //this.hotelService.modifierHotel(id,this.listHotel).subscribe(data=>console.log(data));
  }
  onPersister() {
    // this.hotelService.persister();
  }

  search(a: string) {

    if (a != "") {

      this.listHotel = this.allHotels.filter(hotel =>
        hotel.lieu.toLowerCase().includes(a.toLowerCase()));

    }
    else
     this.listHotel=this.allHotels;


  }

}
