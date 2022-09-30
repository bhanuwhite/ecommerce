import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productData } from '../shared/dataset';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public cartItemList: productData[] = [];
  public items = new BehaviorSubject<productData[]>([]);
  public items1 = new BehaviorSubject<productData[]>([]);

constructor() { }
  getProducts1() {
    return this.items.asObservable();
  }
  setProduct1(product: productData) {
    this.cartItemList.push(product);
    this.items.next(this.cartItemList);
  }
  addtoCart1(product: productData) {
    this.cartItemList.push(product);
    this.items.next(this.cartItemList);
    console.log(this.cartItemList);
  }
  getProducts2() {
    return this.items1.asObservable();
  }
  setProduct2(product: productData) {
    this.cartItemList.push(product);
    this.items1.next(this.cartItemList);
  }
  addtoCart2(product: productData) {
    this.cartItemList.push(product);
    this.items1.next(this.cartItemList);
  }
   
}

