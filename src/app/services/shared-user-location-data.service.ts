import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedUserLocationDataService {
 
  private userLoctionData = new Subject<any>();
  userLocation$ = this.userLoctionData.asObservable();

  constructor() { }
sendLocation(location: any){
    this.userLoctionData.next(location);
  }
}
