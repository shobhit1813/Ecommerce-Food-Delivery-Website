import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-custom-dialogbox',
  templateUrl: './custom-dialogbox.component.html',
  styleUrls: ['./custom-dialogbox.component.css']
})
export class CustomDialogboxComponent implements OnInit {

  customizedDetail: any[];
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private _dialogRef: MatDialogRef<CustomDialogboxComponent>) { }

  ngOnInit() {
    this.customizedDetail = [];
  }

  selectedOption(event: Event, optionSelected) {
    this.customizedDetail.push(optionSelected);
  }

  addSelectedOption() {
    let totalPrice = 0;
    let selectedOptionString = '';
    this.customizedDetail.forEach((data,index) => {
      totalPrice += parseInt(data.price);
      selectedOptionString += index < this.customizedDetail.length - 1 ? data.name+',' : data.name; 
    })
    this._dialogRef.close({
      "name": this.data.item.name,
      "total_price": totalPrice,
      "selectedOptions": selectedOptionString,
      "isCustomized": true
    })
  }
}
