import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FoodServiceService } from '../services/food-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnChanges {

  @Input() items: any[];
  @Input() isCartNeeded: boolean;
  @Input() cartItem: any[];
  subtotalPrice: number = 0;
  constructor(private service: FoodServiceService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cartItem'].currentValue !== undefined) {
      this.cartItem.forEach(data => {
        this.subtotalPrice += parseInt(data.customized_price);
        console.log("the price of order is " + this.subtotalPrice);
      });
    }
  }



}
