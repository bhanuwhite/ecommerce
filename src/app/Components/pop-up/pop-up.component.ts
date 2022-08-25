import { Component, OnInit } from '@angular/core';
import { CurrentLocationService } from 'src/app/services/current-location.service';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUPComponent implements OnInit {
  userLocationData!: Object;

  constructor(public location: CurrentLocationService) {
    
   }
ngOnInit(): void {}

  public getUserLocationData(pincode:string){
    this.location.getUserLocationData(pincode).subscribe(data=>{
      console.log("data",data);
      data:{
        
      }
    })
    
 }

}
