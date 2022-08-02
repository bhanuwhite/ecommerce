import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public cartItemList : any= [];
  public items = new BehaviorSubject<any>([]);
  public items1 = new BehaviorSubject<any>([]);
  

  constructor() { }

  getProducts1(){
    return this.items.asObservable();
  }
  setProduct1 (product:any){
    this.cartItemList.push(product);
    this.items.next(product);

  }
  addtoCart1(product:any){
    this.cartItemList.push(product);
    this.items.next(this.cartItemList)
    console.log(this.cartItemList);
  }
  getProducts2(){
    return this.items1.asObservable();
  }
  setProduct2 (product:any){
    this.cartItemList.push(product);
    this.items1.next(product);

  }
  addtoCart2(product:any){
    this.cartItemList.push(product);
    this.items1.next(this.cartItemList)
    console.log(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice() :number{
    let grandTotal =0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=a.total;
    })
    return grandTotal;
  }
  
  
}
