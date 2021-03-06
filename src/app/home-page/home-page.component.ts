import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { productData } from 'src/app/shared/dataset';
import { ProductService } from 'src/app/services/product.service';
import { categoryData } from 'src/app/shared/dataset';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(public api : ProductService ) { }
  public items!: productData[];
  public items1!: productData[];
  public items2!: categoryData[];
  isDialogueOpen!: boolean;
 

  ngOnInit(): void {
    this.api.apiCall().subscribe((data)=>{
      this.items=data;
      console.log(data,'str')
    });
    this.api.apiCall1().subscribe((data)=>{
      this.items1=data;
      console.log(data,'str')
    });
    this.api.apiCall2().subscribe((data)=>{
      this.items2=data;
      console.log(data,'str')
    });
    

   
  }
  toggleDialogueModel(){

    this.isDialogueOpen = !this.isDialogueOpen;
  }



}

