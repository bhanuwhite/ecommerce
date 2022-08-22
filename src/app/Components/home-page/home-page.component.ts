import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { productData } from 'src/app/shared/dataset';
import { ProductService } from 'src/app/services/product.service';
import { categoryData } from 'src/app/shared/dataset';
import { menuList } from 'src/app/shared/dataset';
import { CartServiceService } from 'src/app/services/cart-service.service';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(public api: ProductService, public cartservice: CartServiceService, public translateService: TranslateService) {
}
  public items!: productData[];
  public items1!: productData[];
  public menuitems!: categoryData[];
  public subMenu!: menuList[];
  public totalItem: number = 0;
  public isDialogueOpen!: boolean;

  ngOnInit(): void {
    this.translateService.addLangs(['en', 'hn']);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en')
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
      this.menuitems = data.menuitems;
      console.log(data, 'str, boolean')
    });
    this.api.apiCall2().subscribe((data: categoryData) => {
      this.subMenu = data.subMenu;
      console.log(data, 'str');
    });
  }
  public selectLanguage(lang:any){
    this.translateService.use(lang)
    console.log(lang);
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
}

