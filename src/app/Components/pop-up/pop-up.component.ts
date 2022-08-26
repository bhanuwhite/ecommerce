import { Component, OnInit } from '@angular/core';
import { CurrentLocationService } from 'src/app/services/current-location.service';
import { SharedUserLocationDataService } from 'src/app/services/shared-user-location-data.service';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUPComponent implements OnInit {
  userLocationData!: string;
  data!: any;

  

  constructor(public currentLocationService: CurrentLocationService, private sharedUserLocationData: SharedUserLocationDataService) {
    
   }
ngOnInit(): void {}

  public getUserLocationData(pincode:string){
    this.currentLocationService.getUserLocationData(pincode).subscribe(data=>{
      this.data = data;
      this.sharedUserLocationData.sendLocation(data);
    })
  }

}
