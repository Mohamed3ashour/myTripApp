import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripServiceService {

  constructor(private http: HttpClient) { }
  API ='http://localhost:9090';
  public registerTrip(tripData: any){
    return this.http.post(this.API + '/registerTrip',tripData);
  }
  public gitTrip(){
    return this.http.get(this.API+ '/getTrip')
  }
  public deleteTrip(id: BigInteger){
    return this.http.delete(this.API+ '/deletTrip?idTrip='+ id)
  }
}