import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ShareMenuItemsService } from 'src/app/services/share-menu-items.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productslist!: any;
  searchKey: string = "";
  public sortedArray: any = [];
  clickedMenu: any;
  clickedSubMenu: any;

  constructor(private route: ActivatedRoute,
    public api: ProductService,
    public shareMenuItems: ShareMenuItemsService,
  ) {
    this.api.products().subscribe((data) => {
      this.productslist = data;
      console.log(this.productslist, "productslist");
      this.sorting();
    }); 
  } 
 ngOnInit(): void {
  this.getMenu();
  this.getSubMenu();

  }
  public getMenu(){
    this.shareMenuItems.menuItems$.subscribe(res=>{
      this.clickedMenu = res;
      if(this.clickedMenu.name ===this.productslist.category){
          
      }
      console.log(this.clickedMenu.name);
    })
  }
  public getSubMenu(){
    this.shareMenuItems.subMenuItems$.subscribe(res=>{
      this.clickedSubMenu = res;
      console.log(this.clickedSubMenu);
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


}
