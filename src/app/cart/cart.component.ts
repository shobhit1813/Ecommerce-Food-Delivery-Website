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
  @Input() cartItem:any[];
  constructor(private service: FoodServiceService) { }

  ngOnInit() {
  }



}
