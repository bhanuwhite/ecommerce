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
import { ShareMenuItemsService } from 'src/app/services/share-menu-items.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userLocationData: any;
  public items!: productData[];
  public items1!: productData[];
  public menuitems!: categoryData[];
  public subMenu!: menuList[];
  public totalItem: number = 0;
  public isDialogueOpen!: boolean;
  searchTerm: string = "";
  userState!: string;
  userCity!: string;

  constructor(private route: Router,
    public api: ProductService,
    public cartservice: CartServiceService,
    public translateService: TranslateService,
    private dialogRef: MatDialog,
    private sharedUserLocationData: SharedUserLocationDataService,
    private shareMenuItems: ShareMenuItemsService
  ) {}

  ngOnInit(): void {
    this.translateService.addLangs(['en', 'hn']);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en')

    this.api.products1().subscribe((data) => {
      this.items = data;
      this.items.forEach((a: productData) => {
        Object.assign(a)
      });
    });
    this.api.products2().subscribe((data) => {
      this.items1 = data;
      console.log(data, 'str')
      this.items.forEach((a: productData) => {
        Object.assign(a)
      });
    });
    this.api.menu().subscribe((data: categoryData) => {
      this.menuitems = data.menuitems;
      console.log(data, 'str, boolean')
    });
    this.api.menu().subscribe((data: categoryData) => {
      this.subMenu = data.subMenu;
      console.log(data, 'str');
    });
    this.getUserLocationData();
  }
  public getUserLocationData() {
    this.sharedUserLocationData.userLocation$
      .subscribe((userLocation) => {
        this.userState =  userLocation[0].PostOffice[1].District;
        this.userCity =  userLocation[0].PostOffice[1].State;
        this.userLocationData = (this.userState + " ," + this.userCity)
        console.log(this.userLocationData);
      });
  }
  public selectLanguage(lang: string){
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
  public selectMenu(category:any){
    this.shareMenuItems.sendSelectMenu(category);
}
getSubMenu(category:any,selectedSubMenu:any){
  let data = { category : category , selectedsubmenu : selectedSubMenu }
  this.shareMenuItems.sendSelectSubMenu(data);
}
}

