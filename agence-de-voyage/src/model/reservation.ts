export class Reservation {
  constructor(  
      public dateArivee:Date,
    public nbNuits:number,
    public nbChambre:number,
    public nbAdultes:number,
    public nbEnfants:number,
    public pension:string,
  ){}

}
