import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


 @Input() amount1;
 
  ngOnInit() { }

}
