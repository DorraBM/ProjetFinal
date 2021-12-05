import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { Hotel } from 'src/model/hotel';
import { HotelsService } from 'src/service/hotels.service';

@Component({
  selector: 'app-ajouter-hotel',
  templateUrl: './ajouter-hotel.component.html',
  styleUrls: ['./ajouter-hotel.component.css']
})
export class AjouterHotelComponent implements OnInit {
  newHotel = new Hotel(10, '', '', '', 0, 0, false, 0,"", 0, "", false, false, false,[]);
  listHotel:Hotel[]=[];
  hotelForm:FormGroup=new FormGroup({});
  message: string = "Votre nouveau Hotel a bien été ajouté";
  galerie:number=0;
  Discount:boolean=true;
 
  counter(i:number)
  {
    return new Array(i);
  }
  onAjouter() {
    this.hotelService.ajouterHotel(this.hotelForm.value).subscribe(data => {
      console.log(data);
      this.hotelForm.value.push(data);
     this.onReset();
    }
    );
  }
  onReset() {
    this.hotelForm.reset();
  }
  constructor(private hotelService: HotelsService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.hotelForm=this.fb.group({
      nom:['',Validators.required],
      prix:[0,Validators.required],
      lieu:['',Validators.required],
      adresse:['',Validators.required],
      telephone:['',[Validators.required, Validators.pattern('[1-9][0-9]{7}')]],
      nbEtoiles:[0,[Validators.required, Validators.pattern('[0-5]')]],
      promotion:[false],
      pourcentage:[0,Validators.pattern('[1-8][0-9]')],
      internet:[false],
      piscine:[false],
      Parking:[false],
      image:['']


    });
 
    this.hotelService.getHotels().subscribe(data=>this.listHotel=data);
    
  }
  discount()
  {this.Discount=false;

  }
  isValidTel():boolean
  { return this.hotelForm.controls['telephone'].errors?.pattern

  }
  isValidEtoile():boolean
  { return this.hotelForm.controls['nbEtoiles'].errors?.pattern

  }
 
  public get nom()
  {
    return this.hotelForm.get('nom');
  }
  public get prix()
  {
    return this.hotelForm.get('prix');
  }
  public get lieu()
  {
    return this.hotelForm.get('lieu');
  }
  public get telephone()
  {
    return this.hotelForm.get('telephone');
  }
  public get adresse()
  {
    return this.hotelForm.get('adresse');
  }
  public get nbEtoiles()
  {
    return this.hotelForm.get('nbEtoiles');
  }
  public get promotion()
  {
    return this.hotelForm.get('promotion');
  }
  public get pourcentage()
  {
    return this.hotelForm.get('pourcentage');
  }


}
function adresse(adresse: any): number {
  throw new Error('Function not implemented.');



}