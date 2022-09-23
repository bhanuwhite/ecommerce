import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CurrentLocationService } from 'src/app/services/current-location.service';
import { SharedUserLocationDataService } from 'src/app/services/shared-user-location-data.service';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUPComponent implements OnInit {

  userLocationData!: string;
  data!: any;
  pincodeControl: any = new FormControl('', [Validators.required,
  Validators.maxLength(6),
  Validators.minLength(6),
 Validators.pattern(/^[0-9_]+$/)]);

  submitted: boolean= false;
  constructor(
    private route: Router,
  public dialogRef: MatDialogRef<PopUPComponent>,
    public currentLocationService: CurrentLocationService,
    private sharedUserLocationData: SharedUserLocationDataService) {
  }
  ngOnInit(): void {

  }
  
  
  public getUserLocationData(pincode: string) {
    if(this.pincodeControl.invalid){
      return
    }
    this.currentLocationService.getUserLocationData(pincode).subscribe(data => {
      this.data = data;
      this.sharedUserLocationData.sendLocation(data);
    })
    this.dialogRef.close();
  }
  public close(){
    this.dialogRef.close();
}
}


