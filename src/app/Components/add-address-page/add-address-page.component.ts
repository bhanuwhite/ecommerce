import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedUserLocationDataService } from 'src/app/services/shared-user-location-data.service';


@Component({
  selector: 'app-add-address-page',
  templateUrl: './add-address-page.component.html',
  styleUrls: ['./add-address-page.component.css']
})
export class AddAddressPageComponent implements OnInit {
  public addressForm!: FormGroup;
  userLocationData: any;
  

  constructor(private sharedUserLocationData: SharedUserLocationDataService) { }

  ngOnInit(): void {
    this.getUserLocationData();
  }
  
  public getUserLocationData() {
   this.sharedUserLocationData.userLocation$
      .subscribe((userLocation) => {
        console.log(this.userLocationData);
        console.log(userLocation[0].PostOffice[1].Block);
        console.log(userLocation[0].PostOffice[1].Circle);
          this.userLocationData= userLocation[0].PostOffice[1].Circle;
          this.userLocationData= userLocation[0].PostOffice[1].Block;
  });
  }

}
