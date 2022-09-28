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
  public userCity!: string;
  public userState!: string;
  public userLocation: any;
  public userLocationData: any;
  public pincode: any;
  public data: any;
  public City!: string;
  public State!: string;

    constructor(private formBuilder: FormBuilder, private currentLocationService: CurrentLocationService) {

    this.userLocation = localStorage.getItem("Data")
    this.userLocationData = JSON.parse(this.userLocation)
    this.userCity = this.userLocationData[0].PostOffice[1].District;
    this.userState = this.userLocationData[0].PostOffice[1].State;
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
  public sendPinCode(pin: any) {
    this.currentLocationService.userLocation(pin).subscribe(data => {
      this.data = data;
      console.log(this.data, "address");
      this.City = this.data[0].PostOffice[1].District;
      this.State = this.data[0].PostOffice[1].State;
    })
  }
}