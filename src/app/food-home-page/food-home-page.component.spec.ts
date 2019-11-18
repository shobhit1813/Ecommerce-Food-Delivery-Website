import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodHomePageComponent } from './food-home-page.component';

describe('FoodHomePageComponent', () => {
  let component: FoodHomePageComponent;
  let fixture: ComponentFixture<FoodHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
