import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/model/hotel';
import { AuthService } from 'src/service/auth.service';
import { HotelsService } from 'src/service/hotels.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
   
  etoiles = 5;
  
  hotelID: any;
  hotelData: Hotel;
  lesHotels:Hotel[]=[];
  newHotel:Hotel;
  commentaireForm:FormGroup=new FormGroup({});
  constructor(public authService: AuthService,private formBuilder: FormBuilder,
    etoiles: NgbRatingConfig, private hotelService: HotelsService,
     private route: Router, private activeRoute: ActivatedRoute,private _snackBar: MatSnackBar) { 
      etoiles.max = 5;
   
     }
    

  ngOnInit(): void {
   
    this.commentaireForm = this.formBuilder.group(
      {
        nom: [""],
       date: [],
        texte: [""],
       nbEtoiles:[null],
        email: [""],
       

  })
  this.hotelID = this.activeRoute.snapshot.params['id'];
    
    this.loadHotelDetails(this.hotelID);
}

  
  loadHotelDetails(productID) {
    this.hotelService.getProductDetails(productID).subscribe(data => {
     
      
      this.hotelData = data;
     this.newHotel=data;
     
    });
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 3000 });
  }
 ajouterCommentaire(){
  var today = new Date();
  var date =today.getFullYear() +  '-' + (today.getMonth()+1 ) +'-' + (today.getDate());

  this.commentaireForm.value['date']= date;

  if (this.commentaireForm.value['nom'] ==' ' || this.commentaireForm.value['texte'] ==' '|| this.commentaireForm.value['nbEtoiles'] ==0
  || this.commentaireForm.value['email'] == ' ') {
  this.ErrorSnackBar("please fill all the fiels");}
  else{
   this.newHotel.commentaires.push(this. commentaireForm.value);
    this.hotelService.modifierHotel(this.hotelData.id,this.newHotel)
    .subscribe(
      data => {
         let pos = this.lesHotels.findIndex(l=> l.id == this.hotelData.id)
         this.lesHotels[pos]= this.commentaireForm.value   

      }   )        
    }
  }
   
  }
