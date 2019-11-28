import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FoodServiceService } from '../services/food-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnChanges {

  @Input() items: any[];
  @Input() isCartNeeded: boolean;
  @Input() cartItem: any;
  subtotalPrice: number = 0;
  constructor(private service: FoodServiceService, private route: Router) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cartItem'].currentValue != changes['cartItem'].previousValue) {
      this.subtotalPrice = 0;
      this.cartItem.cartItem.forEach(data => {
        this.subtotalPrice += parseInt(data.customized_price);
      });
    }
  }
}
