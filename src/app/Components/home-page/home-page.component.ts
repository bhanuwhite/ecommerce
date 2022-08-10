import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { productData} from 'src/app/shared/dataset';
import { ProductService } from 'src/app/services/product.service';
import { categoryData } from 'src/app/shared/dataset';
import { menuList } from 'src/app/shared/dataset';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(public api : ProductService, public cartservice: CartServiceService ) { }
  public items!: productData[];
  public items1!: productData[];
  public menuitems!: categoryData[];
  public subMenu!: menuList[];
  public totalItem: number=0;
  

  isDialogueOpen!: boolean;
  

 

  ngOnInit(): void {
    this.api.apiCall().subscribe((data)=>{
      this.items=data;
      console.log(data,'str')

      this.items.forEach((a:any)=>{
        Object.assign(a, {qty:1} )
      });
    });
    this.api.apiCall1().subscribe((data)=>{
      this.items1=data;
      console.log(data,'str')
      this.items.forEach((a:any)=>{
        Object.assign(a, {qty:1} )
      });
      
    });
    this.api.apiCall2().subscribe((data:any)=>{
      this.menuitems=data.menuitems;
      console.log(data,'str, boolean')
    });
    this.api.apiCall2().subscribe((data:any)=>{
      this.subMenu=data.subMenu;
      console.log(data,'str')
    });

    
    
   
    

   
  }
  toggleDialogueModel(){

    this.isDialogueOpen = !this.isDialogueOpen;
  }
  addtoCart1(product:any){
    
    console.log(product);
      this.cartservice.addtoCart1(product);
      this.totalItem +=1;

  }
  addtoCart2(product:any){
    this.cartservice.addtoCart2(product);
    this.totalItem +=1;

}




}

