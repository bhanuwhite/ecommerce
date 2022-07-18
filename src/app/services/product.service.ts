import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiCall():Observable<any> {
    throw new Error('');
  }

  constructor() { }
}
