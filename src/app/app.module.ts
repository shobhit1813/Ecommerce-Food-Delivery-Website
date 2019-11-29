import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatAutocompleteModule, MatFormFieldModule, MatDialog, MatSnackBar, MatSnackBarModule, MatCheckboxModule, MatBottomSheet, MatBottomSheetModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodHomePageComponent } from './food-home-page/food-home-page.component';
import { NonvegfoodComponent } from './food-home-page/nonvegfood/nonvegfood.component';
import { VegfoodComponent } from './food-home-page/vegfood/vegfood.component';
import { MatCardModule } from '@angular/material/card';
import { FiltercomponentComponent } from './filtercomponent/filtercomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodCardComponent } from './food-home-page/food-card/food-card.component';
import { AlertModule } from 'ngx-bootstrap';
import { MaterialElevationDirective } from './material-elevation.directive';
import { FeaturedComponent } from './food-home-page/featured/featured.component';
import { PopularbrandComponent } from './food-home-page/featured/popularbrand/popularbrand.component';
import { OffernearyouComponent } from './food-home-page/featured/offernearyou/offernearyou.component';
import { OnlyletseatproductComponent } from './food-home-page/featured/onlyletseatproduct/onlyletseatproduct.component';
import { PocketfriendlyComponent } from './food-home-page/featured/pocketfriendly/pocketfriendly.component';
import { WhatsnewComponent } from './food-home-page/featured/whatsnew/whatsnew.component';
import { MealboxComponent } from './food-home-page/featured/mealbox/mealbox.component';
import { PageNotFoundComponent } from './food-home-page/featured/page-not-found/page-not-found.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CustomDialogboxComponent } from './food-home-page/featured/custom-dialogbox/custom-dialogbox.component';
import {MatDialogModule} from '@angular/material';
import { BottomsheetComponent } from './food-home-page/featured/bottomsheet/bottomsheet.component';
import { CheckoutComponent } from './food-home-page/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodHomePageComponent,
    NonvegfoodComponent,
    HomeComponent,
    VegfoodComponent,
    FiltercomponentComponent,
    FoodCardComponent,
    MaterialElevationDirective,
    FeaturedComponent,
    PopularbrandComponent,
    OffernearyouComponent,
    OnlyletseatproductComponent,
    PocketfriendlyComponent,
    WhatsnewComponent,
    MealboxComponent,
    PageNotFoundComponent,
    CartComponent,
    CustomDialogboxComponent,
    BottomsheetComponent,
    CheckoutComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    HomeRoutingModule
  ],
  providers: [MatDialog,MatBottomSheet],
  bootstrap: [AppComponent],
  entryComponents: [CustomDialogboxComponent,BottomsheetComponent]
})
export class AppModule { }
