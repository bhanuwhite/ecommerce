import { Component, OnInit } from '@angular/core';
import { productData } from 'src/app/shared/dataset';
import { ProductService } from 'src/app/services/product.service';
import { categoryData } from 'src/app/shared/dataset';
import { menuList } from 'src/app/shared/dataset';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { TranslateService } from "@ngx-translate/core";
import { PopUPComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedUserLocationDataService } from 'src/app/services/shared-user-location-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLocationData: any;
  public items!: productData[];
  public items1!: productData[];
  public menuitems!: categoryData[];
  public subMenu!: menuList[];
  public totalItem: number = 0;
  public isDialogueOpen!: boolean;
  searchTerm: any;
  userState!: string;
  userCity!: string;
  

  constructor(private route: Router,
    public api: ProductService,
    public cartservice: CartServiceService,
    public translateService: TranslateService,
    private dialogRef: MatDialog,
    private sharedUserLocationData: SharedUserLocationDataService,) { }

  ngOnInit(): void {
    this.translateService.addLangs(['en', 'hn']);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en')
    this.getFeaturedProducts();
    this.getNewProducts();
    this.getMenuItem();
    this.getSubMenuItem();
    this.getUserLocationData();
  }
  public getFeaturedProducts() {
    this.api.products1().subscribe((data) => {
      this.items = data;
      this.items.forEach((a: productData) => {
        Object.assign(a)
      });
    });
  }
  public getNewProducts() {
    this.api.products2().subscribe((data) => {
      this.items1 = data;
      console.log(data, 'str')
      this.items.forEach((a: productData) => {
        Object.assign(a)
      });
    });
  }
  public getMenuItem() {
    this.api.menu().subscribe((data: categoryData) => {
      this.menuitems = data.menuitems;
      console.log(data, 'str, boolean')
    });
  }
  public getSubMenuItem() {
    this.api.menu().subscribe((data: categoryData) => {
      this.subMenu = data.subMenu;
      console.log(data, 'str');
    });
  }
  public getUserLocationData() {
    this.sharedUserLocationData.userLocation$
      .subscribe((userLocation) => {
        this.userState = userLocation[0].PostOffice[1].District;
        this.userCity = userLocation[0].PostOffice[1].State;
        this.userLocationData = (this.userState + " ," + this.userCity)
      });
  }
  public selectLanguage(lang: string) {
    this.translateService.use(lang)
    console.log(lang);
  }
  public addtoCart1(product: productData) {
    this.cartservice.addtoCart1(product);
    this.totalItem += 1;
  }
  public addtoCart2(product: productData) {
    this.cartservice.addtoCart2(product);
    this.totalItem += 1;
  }
  public openDialog() {
    this.dialogRef.open(PopUPComponent);
  }
  public sendUserSearchTerm() {
    this.route.navigate(['./products'], { queryParams: { data: this.searchTerm } })
  }
  selectMenu(category: any) {
    this.route.navigate(['./products'], { queryParams: { data: category } })
  }
  getSubMenu(selectedSubMenu: string) {
    this.route.navigate(['./products'], { queryParams: { data: selectedSubMenu } })
  }
}




