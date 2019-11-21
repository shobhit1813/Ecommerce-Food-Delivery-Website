import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FoodServiceService } from '../services/food-service.service';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-filtercomponent',
  templateUrl: './filtercomponent.component.html',
  styleUrls: ['./filtercomponent.component.css']
})
export class FiltercomponentComponent implements OnInit {

  searchGroup: FormGroup;
  foodOptions: any[];
  fiteredFoodOptions: any[];

  constructor(private foodService: FoodServiceService) { }

  ngOnInit() {
    this.searchGroup = new FormGroup({
      search: new FormControl()
    });

    this.foodService.getFoodOptions().subscribe(data => {
      if (data !== undefined) {
        this.foodOptions = data.data;
        this.fiteredFoodOptions = data.data;
      }
    });

  this.searchGroup.controls.search.valueChanges.subscribe(changeValue => {
      startWith(''),
      this.fiteredFoodOptions = this.filterFood(changeValue);
    });
  }

  filterFood(food: string): any[] {
    if (!food)
      return [];
    return this.foodOptions.filter(option => option.name.toLowerCase().includes(food.toLowerCase()));
  }

  searchRestaurantOrDish(foodSearched: string) {
    this.foodService.getFoodOrRestaurant();
  }
}
