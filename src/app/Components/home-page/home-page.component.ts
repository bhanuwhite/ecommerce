import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { productData } from 'src/app/shared/dataset';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
productsList:any;
  constructor(public api : ProductService ) { }
  public items!: productData[];

  ngOnInit(): void {
    this.api.apiCall().subscribe((data)=>{
      this.items=data;
    });
  }


}
