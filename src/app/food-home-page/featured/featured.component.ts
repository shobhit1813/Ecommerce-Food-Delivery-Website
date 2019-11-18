import { Component, OnInit, Input } from '@angular/core';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  @Input() pageLoad : string;
  featuredlist : any[];
  loadedpage : string;
  constructor(private service: FoodServiceService) { }

  ngOnInit() {
    this.service.getFeaturedList().subscribe(data =>{
      if(data !== undefined || data.length !== 0){
        this.featuredlist = data.list;
        this.featuredlist.unshift("home");
      }
    });
  }
}
