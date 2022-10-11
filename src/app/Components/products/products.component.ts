import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { categoryData, menuData, menuList } from 'src/app/shared/dataset';
import { SharedUserLocationDataService } from 'src/app/services/shared-user-location-data.service';
import { TranslateService } from '@ngx-translate/core';
import { PopUPComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productslist: any = [];
  searchKey: string="";
  public sortedArray: any = [];
  subMenu: string = '';
  menu: string = '';
  items: any;
  menuData: any = [];
  subMenuData: any = [];
  public menuitems!: categoryData[];
  public totalItem: number = 0;
  public isDialogueOpen!: boolean;
  searchTerm: string = "";
  userState!: string;
  userCity!: string;
  userLocationData!: any;
  dialogRef: any;
  subMenuItem!: menuList[];
  categoryItem!: menuData[];
  categoryData: any;
  categorymenu: any;

  constructor(private route: ActivatedRoute,
    public api: ProductService,
    private sharedUserLocationData: SharedUserLocationDataService,
    public translateService: TranslateService,
    public productService: ProductService
  ) { }
  ngOnInit(): void {
    this.getProducts()
   this.getCategoryItems()
   this.getCategory()
    this.translateService.addLangs(['en', 'hn']);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en')
  }
  public  getCategoryItems(){
    this.productService.procategory().subscribe((data)=>{
      this.categoryItem = data;
      console.log(this.categoryItem,"procat");
     })
  }
  public getProducts() {
    this.api.products().subscribe((data) => {
      this.productslist = data;
      this.productslist.forEach((a: any) => {
        Object.assign(a)
      })
      this.sorting();
      this.getMenu();
    });
  }
  public getMenu() {
    this.route.queryParams.subscribe((params: any) => {
      this.menu = params.data 
      this.menuData = this.productslist
        .filter((x: any) => {
          return x.category.toLowerCase().includes(this.menu.toLowerCase());
        })
    })
  }
  public getCategory(){
    this.route.queryParams.subscribe((params: any) => {
      this.categorymenu = params.data
      this.categoryData = this.categoryItem
        .filter((x: any) => {
          return x.category.includes(this.categorymenu.toLowerCase());
        })
        console.log(this.categoryData, "menu");
      })
  }
  public getSubMenu() {
    this.route.queryParams.subscribe((params: any) => {
      this.subMenu = params.data
      console.log(this.subMenu);
    })
  }
  public getMenuItem() {
    this.api.menu().subscribe((data: categoryData) => {
      this.menuitems = data.menuitems;
      console.log(data, 'str, boolean')
    });
  }
  public getSubMenuItem() {
    this.api.menu().subscribe((data: categoryData) => {
      this.subMenuItem = data.subMenu;
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
  public openDialog() {
    this.dialogRef.open(PopUPComponent);
  }
  public selectLanguage(lang: string) {
    this.translateService.use(lang)
    console.log(lang);
  }
  public sorting() {
    this.route.queryParams.subscribe((params: any) => {
      this.searchKey = params.data;
      for (var i in this.productslist) {
        var key = i;
        var val = this.productslist[i];
        for (var j in val) {
          var sub_key = j;
          var sub_val = val[j];
          if (sub_val.toString().toLowerCase().indexOf(this.searchKey) > -1) {
            this.sortedArray.push(this.productslist[i]);
            console.log(this.productslist[i], "item");
            break;
          }
        }
      }
    })
  }
}
