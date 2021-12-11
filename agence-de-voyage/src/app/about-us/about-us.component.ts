import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  local:boolean=true;
  team:boolean=true;
  constructor() { }
  Afficherlocal()
  {this.local=false; }
  Cacherlocal()
  {this.local=true; }
  Afficherteam()
  {this.team=false;}
  Cacherteam()
  {this.team=true; }
  ngOnInit(): void {
  }

}
