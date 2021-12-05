export class Reservation {
  constructor(  
      public dateArivee:Date,
    public nbNuits:number,
    public nbChambre:number,
    public nbAdultes:number,
    public nbEnfants:number,
    public pension:string,
    public first_name:string,
    public last_name:string,
    public email:string,
    public phone_number:number

  ){}

}
