import { Component, OnInit,Output,EventEmitter, Input} from '@angular/core';
import { products } from '../models/catalog.interface';
import { CartService } from '../shared/app.services';
import { log } from 'util';
import { logging } from 'selenium-webdriver';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  amount:any=0;
  catalog=[];
  constructor(private cartService:CartService){}
            ngOnInit() {
              this.catalog= this.cartService.products_list();
              console.log(this.catalog)
            }
  citems:products[]=[]
  @Output() public tmp = new EventEmitter(); 
  @Output() public amt = new EventEmitter(); 
 
 total:number=0;  
addcart(it:products)
{
  console.log(it);
  
  this.total=this.cartService.AddCart(it)
  this.citems.push(it);
  console.log(this.citems)
  this.tmp.emit(this.citems);  
  this.amt.emit(this.total);  
}
}       
