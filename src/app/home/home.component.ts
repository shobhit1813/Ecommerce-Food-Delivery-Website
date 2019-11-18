import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageLoad: string = '';
  constructor() { }

  ngOnInit() {
    this.pageLoad='featuredlist';
  }

}
