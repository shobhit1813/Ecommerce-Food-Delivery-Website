import { Component, OnInit, Input } from '@angular/core';
import { FoodServiceService } from '../services/food-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() items: any[];
  @Input() isCartNeeded: boolean;
  @Input() cartItem: any[];
  subtotalPrice: number;
  constructor(private service: FoodServiceService) {
  }

  ngOnInit() {
    if (this.cartItem != undefined) {
      this.cartItem.forEach(data => {
        this.subtotalPrice += data.customized_price;
        console.log("the price of order is " + this.subtotalPrice);
      });
    }
  }



}
