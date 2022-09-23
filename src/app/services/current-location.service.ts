import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CurrentLocationService {
  constructor(private http: HttpClient) { }
  getUserLocationData(pincode: string){
  const url="https://api.postalpincode.in/pincode/"+pincode;
    return this.http.get(url);
  }
  userLocation(pin: string){
    const url="https://api.postalpincode.in/pincode/"+pin;
    return this.http.get(url);
  }
}
