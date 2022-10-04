import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productslist: any = [];
  searchKey: string = "";
  public sortedArray: any = [];
  subMenu: string = '';
  menu: string = '';
  items: any;
  menuData: any = [];
  subMenuData: any = [];


  constructor(private route: ActivatedRoute,
    public api: ProductService,
  ) { }
  ngOnInit(): void {
    this.getProducts()
    this.getSubMenu()
  }
  public getProducts() {
    this.api.products().subscribe((data) => {
      this.productslist = data;
      this.productslist.forEach((a: any) => {
        Object.assign(a)
      })
      this.sorting();
      this.getMenu();
     this.getSubMenu()
    });
  }

  public getMenu() {
    this.route.queryParams.subscribe((params: any) => {
      this.menu = params.data
      this.menuData = this.productslist
        .filter((x: any) => {
          return x.category.toLowerCase().includes(this.menu.toLowerCase());
        })
      console.log(this.menuData)
    })
  }
public getSubMenu() {
    this.route.queryParams.subscribe((params: any) => {
      this.subMenu = params.data
     })
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
  public filter() {


  }
}
