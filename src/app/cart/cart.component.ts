import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { citem } from './cart.component.interface';
import { CartService } from '../shared/app.services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  constructor(private cartService:CartService) {}
  @Input() citems;
  @Input() amount1;
 
  @Output() at:number=0;
  @Output() public dlt=new EventEmitter;
 total:number;
remove(n:number,it:any)
{
  this.total=this.cartService.DeleteCart(it,n);
  this.citems.splice(n,1); 
  this.dlt.emit(this.total);
}

  ngOnInit() {
  }

}
