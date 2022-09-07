import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productslist!: any;
  searchKey: string = "";
  public sortedArray: any = [];

  constructor(private route: ActivatedRoute,
    public api: ProductService,
    public cartservice: CartServiceService,
  ) {
    this.api.products().subscribe((data) => {
      this.productslist = data;
      console.log(this.productslist, "productslist");
      this.sorting();
    });
  }

  ngOnInit(): void {

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
