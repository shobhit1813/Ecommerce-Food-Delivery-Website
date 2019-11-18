import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { foodCard } from 'src/app/services/datatypes/foodCard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})

export class FoodCardComponent implements OnInit {
  @Input() isCartNeeded: boolean;
  @Input() foodWorkload: foodCard;
  @Output() addToCart = new EventEmitter<foodCard>();

  constructor(private router: Router) { }
  defaultElevation = 2;
  raisedElevation = 8;
  ngOnInit() {
    console.log("the cart is needed or not " + this.isCartNeeded);
  }

  onCardClick(event: MouseEvent) {
    // this.router.navigate(['/home/restaurant/-1']);
  }

  addItemToCart(food) {
    this.addToCart.emit(food);
  }
}
