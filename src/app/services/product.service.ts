import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productData } from 'src/app/shared/dataset';
import { categoryData } from 'src/app/shared/dataset';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  apiCall(): Observable<productData[]> {
    return this.http.get<productData[]>("assets/data/json/featuredProduct.json");
  }
  apiCall1(): Observable<productData[]> {
    return this.http.get<productData[]>("assets/data/json/NewProduct.json");
  }
  apiCall2(): Observable<categoryData> {
    return this.http.get<categoryData>("assets/data/json/category.json");
  }
}
