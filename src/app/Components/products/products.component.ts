import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductService } from 'src/app/services/product.service';
import { productData } from 'src/app/shared/dataset';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public items!: productData[];
  public items1!: productData[];
  searchKey: string="";
  public filterCategory: any;

  constructor(public api: ProductService,
    public cartservice: CartServiceService,

  ) { }

  ngOnInit(): void {
    this.api.apiCall().subscribe((data) => {
      this.items = data;
      this.filterCategory = data;
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
    this.cartservice.search.subscribe(val=>{
      this.searchKey= val;
    })
  }
  public addtoCart1(product: productData) {
    this.cartservice.addtoCart1(product);
  }
  public filter(category:string){
    this.filterCategory = this.items.filter((a:any)=>{
      if(a.category ==category || category=='')
      return a;
    })
  }

}
