import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor(private http: HttpClient) { }

  getFoodCardList(): Observable<any> {
    return this.http.get<any>(
      environment.production ? '/FoodList' : '/assets/foodlist.json'
    );
  }

  getFeaturedList(): Observable<any> {
    return this.http.get<any>(environment.production ? '/featuredlist' : '/assets/featuredlist.json');
  }

  getFoodOptions(): Observable<any> {
    return this.http.get<any>(environment.production ? '/food_option' : '/assets/foodoption.json');
  }

  getFoodOrRestaurant(): Observable<any> {
    return this.http.get<any>(environment.production ? '/foodOrRestaurant' : '/assets/foodOrRestaurant.json');
  }

  getPopularBrand(): Observable<any> {
    return this.http.get<any>(environment.production ? '/popular-brand' : '/assets/popular_brand.json');
  }

  getCartItems():Observable<any>{
    return this.http.get<any>(environment.production ? '/cart' : '/assets/user_cart.json');
  }
}
