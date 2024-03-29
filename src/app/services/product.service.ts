import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,Subject } from 'rxjs';
import { menuData, productData, products } from 'src/app/shared/dataset';
import { categoryData } from 'src/app/shared/dataset';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { 
    
  }

  products1(): Observable<productData[]> {
    return this.http.get<productData[]>("assets/data/json/featuredProduct.json");
  }
  products2(): Observable<productData[]> {
    return this.http.get<productData[]>("assets/data/json/NewProduct.json");
  }
  menu(): Observable<categoryData> {
    return this.http.get<categoryData>("assets/data/json/category.json");
  }
  products(): Observable<products> {
    return this.http.get<products>("assets/products/pro.json");
  }
  procategory(): Observable<menuData[]>{
    return this.http.get<menuData[]>("assets/products/procategory.json");
  }
}
