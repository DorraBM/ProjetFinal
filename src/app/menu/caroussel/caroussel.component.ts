import { AuthService } from 'src/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements OnInit {

  constructor (public authService: AuthService) {} 

  ngOnInit(): void {
  }

}
