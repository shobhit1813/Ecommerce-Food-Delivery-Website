import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from 'src/app/services/food-service.service';
import { MatDialog, MatDialogRef, } from '@angular/material/dialog';
import { CustomDialogboxComponent } from '../custom-dialogbox/custom-dialogbox.component';
import { MatBottomSheet } from '@angular/material';
import { BottomsheetComponent } from '../bottomsheet/bottomsheet.component';

@Component({
  selector: 'app-popularbrand',
  templateUrl: './popularbrand.component.html',
  styleUrls: ['./popularbrand.component.css']
})
export class PopularbrandComponent implements OnInit {

  popularBrandList: any[];
  isCartNeeded: boolean;
  cartItem: any[];
  noOfItems: number;
  isRestaurant: boolean = true;
  isAlreadyInCart: boolean;
  indexItemSelected: number;
  constructor(private service: FoodServiceService, private _customizeDialog: MatDialog, private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.service.getPopularBrand().subscribe((data) => {
      if (data !== undefined && data.length !== 0) {
        this.popularBrandList = data.list;
        this.noOfItems = this.popularBrandList.length;
        this.isCartNeeded = true;
        this.isAlreadyInCart = false;
      }
    })

    this.service.getCartItems().subscribe((data) => {
      this.cartItem = data.items;
    })
  }

  addedItemToCart(itemSelected) {
    if (this.cartItem !== undefined && this.cartItem.filter(data => data.name === itemSelected.name).length > 0) {
      const bottomSheetRef = this._bottomSheet.open(BottomsheetComponent);
      bottomSheetRef.afterDismissed().subscribe((data) => {
        this.cartItem = data && data.message !== 'choose' ? this.repeatLastOrder(itemSelected) : this.openCustomizeOptionDialog(itemSelected);
      })
    }
    else {
      this.openCustomizeOptionDialog(itemSelected);
    }
  }

  repeatLastOrder(itemSelected) {
    this.cartItem.filter((data, index) => {
      if (data.name === itemSelected.name) {
        console.log("data ",data);
        data.quantity = parseInt(data.quantity)+1;
        data.customized_price = data.customized_price * data.quantity;
        // return this.cartItem.push(this.cartItem[index]);
      }
    })
    return this.cartItem;
  }

  openCustomizeOptionDialog(itemSelected) {
    if (itemSelected !== undefined && itemSelected.customize !== undefined) {
      itemSelected.quantity = parseInt(itemSelected.quantity) + 1;
      const customizeRef = this._customizeDialog.open(CustomDialogboxComponent, {
        width: '500px',
        data: { item: itemSelected, customize: itemSelected.customize }
      });
      customizeRef.afterClosed().subscribe(customizedValue => {
        itemSelected.quantity = parseInt(itemSelected.quantity) + 1;
        this.cartItem.forEach((item,index) => {
          if (item.name === customizedValue.name && item.customized_options === customizedValue.selectedOptions) {
            this.isAlreadyInCart = true;
            this.indexItemSelected = index;
          }
        })
        if (this.isAlreadyInCart) {
          itemSelected.quantity = parseInt(itemSelected.quantity) + 1;
          this.cartItem[this.indexItemSelected].customized_price = this.cartItem[this.indexItemSelected].customized_price * itemSelected.quantity;
          this.isAlreadyInCart = false;
        }
        else {
          const customized_price = parseInt(itemSelected.price) + parseInt(customizedValue.total_price);
          this.cartItem.push(JSON.parse('{"name":"' + customizedValue.name + '","customized_price":"' + customized_price + '","quantity":"' + customizedValue.quantity + '","customized_options":"' + customizedValue.selectedOptions + '"}'));
        }
      })
    }
    else {
      console.log("in outer else")
      this.cartItem.push(itemSelected);
    }
    return this.cartItem;
  }

}
// https://stackoverflow.com/questions/43223582/why-angular-2-ngonchanges-not-responding-to-input-array-push