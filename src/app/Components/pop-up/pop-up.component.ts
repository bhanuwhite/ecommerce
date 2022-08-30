import { Component, OnInit } from '@angular/core';
import { CurrentLocationService } from 'src/app/services/current-location.service';
import { SharedUserLocationDataService } from 'src/app/services/shared-user-location-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUPComponent implements OnInit {
  userLocationData!: string;
  data!: any;
  pincodeform!: FormGroup;
  constructor(public currentLocationService: CurrentLocationService,
    private sharedUserLocationData: SharedUserLocationDataService) {
  }
  ngOnInit(): void {
    this.pincodeform = new FormGroup({
      'pinCode': new FormControl(null,
        [
          Validators.required,
          Validators.pattern('^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$'),
        ]
      )
    })
  }
  public getUserLocationData(pincode: string) {
    this.currentLocationService.getUserLocationData(pincode).subscribe(data => {
      this.data = data;
      this.sharedUserLocationData.sendLocation(data);
    })
  }

}
