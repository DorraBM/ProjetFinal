import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/model/reservation';
import { Hotel } from '../model/hotel';
const URL = " http://localhost:4000/hotels";
const url = " http://localhost:4000/reservations"
@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private hotels: Hotel[]
  private reservation:Reservation[];
  //   new Hotel(1, 'El mouradi Africa', '../assets/hotels/africa/africa1.jfif', 'Tunis', 120,3,true),
  //   new Hotel(2, 'Hasdrabal Thalasso Djerba', '../assets/hotels/hasdrabal/hasdrubal1.jfif', 'Djerba', 210,3,false),
  //   new Hotel(3, ' Bel Azur Thalasson&bangaloas', '../assets/hotels/thalasson/thalasso1.jpg', 'Hamamet', 200,4,false),
  //   new Hotel(4, 'Iberostar selection royal el mansour ', '../assets/hotels/iberostar/iberostar1.jpg', 'Mahdia', 100,5,true),
  //   new Hotel(5, 'Mahdia Palace Thalasso', '../assets/hotels/thalasso/palace1.jpg', 'Mahdia', 220,5,false),
  //   new Hotel(6, 'Medina Belisaire ', '../assets/hotels/belisaire/belisaire1.jpg', 'Hammamet', 100,2,true),
  //   new Hotel(7, 'The Penthouse ', '../assets/hotels/the penthouse/penthouse1.webp', 'Tunis', 170,2,false),
  //   new Hotel(8, 'Vincci Helios Beach', '../assets/hotels/vincci/vincci1.jpg', 'Djerba', 130,2,true),
  //   new Hotel(9, ' Ulysse Palace Djerba Resort & Thalasso', '../assets/hotels/Ulysse/ulysse1.jpg', 'Djerba', 180,5,false)
  // ];
  // getHotel() {
  //   return this.hotels;
  // }
  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(URL);
  }
  getProductDetails(id): Observable<Hotel> {
    return this.http.get<Hotel>(URL +"/"+ id);
  }

  ajouterHotel(hotel: Hotel):Observable<Hotel> {
    return this.http.post<Hotel>(URL, hotel);
  }
  supprimerHotel(id: number) {
    return this.http.delete(URL + "/" + id);
  }
  modifierHotel(id: number, hotel: Hotel):Observable<Hotel> {
    return this.http.put<Hotel>(URL + "/" + id, hotel);
  }

  addReservation(reservation:Reservation):Observable<Reservation>
  {
    return this.http.post<Reservation>(url,reservation);
  }
  //  getReservationdetails():Observable<Reservation[]>{
  //   return this.http.get<Reservation[]>(url);
  //  }
  

  

  constructor(private http: HttpClient) { }
}
