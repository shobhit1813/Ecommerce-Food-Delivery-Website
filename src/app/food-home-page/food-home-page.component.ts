import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../services/food-service.service';

@Component({
  selector: 'app-food-home-page',
  templateUrl: './food-home-page.component.html',
  styleUrls: ['./food-home-page.component.css']
})
export class FoodHomePageComponent implements OnInit {
  isCartNeeded: boolean;
  isFoodCard: boolean;
  foodWorkload : any[];

  constructor(private foodService: FoodServiceService) { }
  
  ngOnInit() {
    this.isCartNeeded = false;
    this.foodService.getFoodCardList().subscribe(data =>{
      if(data !== undefined){
        this.foodWorkload = data.data;
      }
    });
  }

}
