import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealboxComponent } from './mealbox.component';

describe('MealboxComponent', () => {
  let component: MealboxComponent;
  let fixture: ComponentFixture<MealboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
