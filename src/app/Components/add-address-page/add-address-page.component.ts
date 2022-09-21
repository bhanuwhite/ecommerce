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
  userCity!: string;
  userState!: string;
  
  constructor(private formBuilder: FormBuilder,private sharedUserLocationData: SharedUserLocationDataService) { 
    this.getUserLocationData();

  }

  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
      addressLine1: new FormControl('', Validators.required),
      addressLine2: new FormControl('', Validators.required),
      pincode: new FormControl('', [Validators.required, Validators.minLength(4)]),
      city : new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      
    })
}
  public getUserLocationData() {
   this.sharedUserLocationData.userLocation$
      .subscribe((userLocation) => {
          this.userState= userLocation[0].PostOffice[1].Circle;
          this.userCity= userLocation[0].PostOffice[1].Block;
          console.log(this.userState);
          console.log(this.userState);
        });
  }
  public addAddress(){
    console.log(this.addressForm);
  }

}
