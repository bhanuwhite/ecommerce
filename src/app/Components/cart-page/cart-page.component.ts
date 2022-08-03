import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  public products: any = [];
  public grandTotal:number=0;
  constructor(public cartservice: CartServiceService) { }

  ngOnInit(): void {
    this.cartservice.getProducts1()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartservice.getTotalPrice();
    })
    this.cartservice.getProducts2()
    .subscribe(res=>{
      this.products = res;
    })
    
   
  }
  

}
