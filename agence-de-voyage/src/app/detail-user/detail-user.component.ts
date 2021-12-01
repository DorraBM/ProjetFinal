import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailHotelComponent implements OnInit {
  identifiant: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
  }


}
