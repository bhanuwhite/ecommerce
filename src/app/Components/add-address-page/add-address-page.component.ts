import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrentLocationService } from 'src/app/services/current-location.service';

@Component({
  selector: 'app-add-address-page',
  templateUrl: './add-address-page.component.html',
  styleUrls: ['./add-address-page.component.css']
})
export class AddAddressPageComponent implements OnInit {
  public addressForm!: FormGroup;
  userCity!: string;
  userState!: string;
  userLocation: any;
  userLocationData: any;
  pincode: any;
  data: any;


  constructor(private formBuilder: FormBuilder, private currentLocationService: CurrentLocationService ) {

    this.userLocation = localStorage.getItem("Data")
    this.userLocationData = JSON.parse(this.userLocation)
    console.log(this.userLocationData);
    
    this.userCity = this.userLocationData[0].PostOffice[1].District;
    this.userState = this.userLocationData[0].PostOffice[1].State;
    console.log(this.userLocationData[0].PostOffice[1].State);
    console.log(this.userLocationData[0].PostOffice[1].District);
  }

  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
      addressLine1: new FormControl('', Validators.required),
      addressLine2: new FormControl('', Validators.required),
      pincode: new FormControl('', [Validators.required, Validators.minLength(4)]),
      city: new FormControl(this.userCity, Validators.required),
      state: new FormControl(this.userState, Validators.required),

    })
  }
  public addAddress() {
    console.log(this.addressForm);
  }
  public sendPinCode(pincode:any){
    if(this.pincode.invalid){
      return
    }
    this.currentLocationService.getUserLocationData(pincode).subscribe(data => {
      this.data = data;
      console.log(data);
      
    })
  }
}
