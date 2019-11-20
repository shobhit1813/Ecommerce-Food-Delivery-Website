import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.css']
})
export class BottomsheetComponent implements OnInit {

  constructor(private bottomSheetRef :MatBottomSheetRef<BottomsheetComponent> ) { }

  ngOnInit() {
  }

  repeatLast(): void {
    this.bottomSheetRef.dismiss({
      message: 'no',
    });
    event.preventDefault();
  }

  customizeAgain() {
    this.bottomSheetRef.dismiss({
      message: 'yes'
    });
  }


}
