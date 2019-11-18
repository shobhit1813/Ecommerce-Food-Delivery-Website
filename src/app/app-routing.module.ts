import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularbrandComponent } from './food-home-page/featured/popularbrand/popularbrand.component';
import { OffernearyouComponent } from './food-home-page/featured/offernearyou/offernearyou.component';
import { OnlyletseatproductComponent } from './food-home-page/featured/onlyletseatproduct/onlyletseatproduct.component';
import { PocketfriendlyComponent } from './food-home-page/featured/pocketfriendly/pocketfriendly.component';
import { WhatsnewComponent } from './food-home-page/featured/whatsnew/whatsnew.component';
import { MealboxComponent } from './food-home-page/featured/mealbox/mealbox.component';
import { PageNotFoundComponent } from './food-home-page/featured/page-not-found/page-not-found.component';
import { FoodCardComponent } from './food-home-page/food-card/food-card.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
