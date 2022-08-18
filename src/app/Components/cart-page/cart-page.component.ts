import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductService } from 'src/app/services/product.service';
import { categoryData, menuList, productData } from 'src/app/shared/dataset';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public items!: productData[];
  public items1!: productData[];
  public menuitems!: menuList[];
  public subMenu!: menuList[];
  public products!: productData[];
  public totalItem: number = 0;
  public isDialogueOpen!: boolean;
  constructor(public api: ProductService, public cartservice: CartServiceService) { }

  ngOnInit(): void {
    this.api.apiCall().subscribe((data) => {
      this.items = data;
      console.log(data, 'str')
      this.items.forEach((a: productData) => {
        Object.assign(a)
      });
    });
    this.api.apiCall1().subscribe((data) => {
      this.items1 = data;
      console.log(data, 'str')
      this.items.forEach((a: productData) => {
        Object.assign(a)
      });
    });
    this.api.apiCall2().subscribe((data: categoryData) => {
      this.menuitems = data.subMenu;
      console.log(data, 'str, boolean')
    });
    this.api.apiCall2().subscribe((data: categoryData) => {
      this.subMenu = data.subMenu;
      console.log(data, 'str')
    });
    this.cartservice.getProducts1()
      .subscribe((res: productData[]) => {
        this.products = res;
      })
    this.cartservice.getProducts2()
      .subscribe((res: productData[]) => {
        this.products = res;
      })
  }
  public toggleDialogueModel() {
    this.isDialogueOpen = !this.isDialogueOpen;
  }
  public addtoCart1(product: productData) {
    this.cartservice.addtoCart1(product);
    this.totalItem += 1;
  }
  public addtoCart2(product: productData) {
    this.cartservice.addtoCart2(product);
    this.totalItem += 1;
  }
  public inc(item: productData) {
    if (item.qty < 5) {
      item.qty += 1;
    }
  }
  public dec(item: productData) {
    console.log(item.qty)
    if (item.qty > 1) {
      item.qty -= 1;
    }
  }
}





