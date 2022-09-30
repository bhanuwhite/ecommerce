import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareMenuItemsService {
  
  private menuItemsData = new Subject<[]>();
  menuItems$ = this.menuItemsData.asObservable();
   private subMenuItemsData = new Subject<[]>();
   subMenuItems$ = this.subMenuItemsData.asObservable();

  constructor() { }
  sendSelectMenu(category:any){
    this.menuItemsData.next(category);
    }
  sendSelectSubMenu(data:any){
     this.subMenuItemsData.next(data);
     }
}
