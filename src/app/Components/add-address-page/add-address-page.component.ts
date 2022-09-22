import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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


  constructor(private formBuilder: FormBuilder) {

    this.userLocation = localStorage.getItem("Data")
    this.userLocationData = JSON.parse(this.userLocation)
    this.userCity = this.userLocationData[0].PostOffice[1].Block;
    this.userState = this.userLocationData[0].PostOffice[1].Circle;
    console.log(this.userLocationData[0].PostOffice[1].Circle);
    console.log(this.userLocationData[0].PostOffice[1].Block);
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
}
