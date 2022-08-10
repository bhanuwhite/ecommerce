import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { productData } from 'src/app/shared/dataset';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  public products: any=[];

  
  
  
  constructor(public cartservice: CartServiceService) { }
 
  ngOnInit(): void {
    this.cartservice.getProducts1()
    .subscribe((res: any)=>{
      this.products = res;
    })
    this.cartservice.getProducts2()
    .subscribe((res: any)=>{
      this.products = res;
    })
  }

 inc(item:any){
  console.log(item.qty)
  if(item.qty<5){
    item.qty +=1;
    
    
  }
 
 }
 dec(item:any){
  console.log(item.qty)
  if(item.qty>1){
    item.qty -=1;
  }
  

 }


}


  

 
