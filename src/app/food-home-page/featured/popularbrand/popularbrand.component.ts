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
  isRestaurant: boolean = true;
  cartItem: any[];
  constructor(private service: FoodServiceService, private _customizeDialog: MatDialog, private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.service.getPopularBrand().subscribe((data) => {
      if (data !== undefined && data.length !== 0) {
        this.popularBrandList = data.list;
        this.isCartNeeded = true;
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
        this.cartItem = data && data.message == 'no' ? this.cartItem = this.cartItem : this.openCustomizeOptionDialog(itemSelected);
      })
    }
    else {
      this.openCustomizeOptionDialog(itemSelected);
    }
  }

  openCustomizeOptionDialog(itemSelected) {
    if (itemSelected !== undefined && itemSelected.customize !== undefined) {
      const customizeRef = this._customizeDialog.open(CustomDialogboxComponent, {
        width: '500px',
        data: { item: itemSelected, customize: itemSelected.customize }
      });

      customizeRef.afterClosed().subscribe(customizedValue => {
        const customized_price = parseInt(itemSelected.price) + parseInt(customizedValue.total_price);
        this.cartItem.push(JSON.parse('{"name":"' + customizedValue.name + '","customized_price":"' + customized_price + '","customized_options":"' + customizedValue.selectedOptions + '"}'));
      });
    }
    else {
      this.cartItem.push(itemSelected);
    }
    return this.cartItem;
  }
}
