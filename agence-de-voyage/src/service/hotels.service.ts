
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

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(URL);
  }
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(url);
  }
  getProductDetails(id): Observable<Hotel> {
    return this.http.get<Hotel>(URL + "/" + id);
  }
  ajouterHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(URL, hotel);
  }
  supprimerHotel(id: number) {
    return this.http.delete(URL + "/" + id);
  }
  supprimerImage(id:number)
  {}
  supprimerReservation(id: number) {
    return this.http.delete(url + "/" + id);
  }
  modifierHotel(id: number, hotel: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(URL + "/" + id, hotel);
  }
  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(url, reservation);
  }
  constructor(private http: HttpClient) { }
}
