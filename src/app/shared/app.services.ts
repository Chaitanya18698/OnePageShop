import { Component } from '@angular/core';
// import { item, citem } from '../models/catalog.interface';
import { OnInit,Output } from "@angular/core";
import { EventEmitter } from '@angular/core';
import { products } from '../models/catalog.interface';

export class CartService {
    
     cartAdding  = new EventEmitter();
     total_amount:number=0;
     products_count  = 0;
     price=0;
     final:number;
     
    constructor(){}
     productListData:products[] = [
    {
      id:1,
      item:"Nike Shoes",
      price:2000
    },
    {
      id:2,
      item:"SkyBags--Back Pack",
      price:1000
    },
    {
      id:3,
      item:"Ray Ban Glasses",
      price:1000
    },
    {
      id:4,
      item:"Levis Jeans",
      price:1500
    },
    {
      id:5,
      item:"Rolex Watch",
      price:3000
    }
  ]
    AddCart(item:products){
    this.total_amount +=item.price;
    return this.total_amount;
    }
    DeleteCart(product,id:number){
      
    this.total_amount -=product.price
    return this.total_amount;
    
    }
    products_list(){
    return this.productListData;
    }

}