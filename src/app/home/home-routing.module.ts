import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PopularbrandComponent } from '../food-home-page/featured/popularbrand/popularbrand.component';
import { OffernearyouComponent } from '../food-home-page/featured/offernearyou/offernearyou.component';
import { OnlyletseatproductComponent } from '../food-home-page/featured/onlyletseatproduct/onlyletseatproduct.component';
import { PocketfriendlyComponent } from '../food-home-page/featured/pocketfriendly/pocketfriendly.component';
import { WhatsnewComponent } from '../food-home-page/featured/whatsnew/whatsnew.component';
import { MealboxComponent } from '../food-home-page/featured/mealbox/mealbox.component';
import { PageNotFoundComponent } from '../food-home-page/featured/page-not-found/page-not-found.component';
import { FoodCardComponent } from '../food-home-page/food-card/food-card.component';
import { FoodHomePageComponent } from '../food-home-page/food-home-page.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'home', component: FoodHomePageComponent, pathMatch: 'full' },
      { path: 'popular-brand', component: PopularbrandComponent, pathMatch: 'full' },
      { path: 'offers-near-you', component: OffernearyouComponent, pathMatch: 'full' },
      { path: 'only-on-lets-eat', component: OnlyletseatproductComponent, pathMatch: 'full' },
      { path: 'pocket-friendly', component: PocketfriendlyComponent, pathMatch: 'full' },
      { path: 'trending', component: WhatsnewComponent, pathMatch: 'full' },
      { path: 'meal-box', component: MealboxComponent, pathMatch: 'full' },
      { path: '', component: FoodHomePageComponent, pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
