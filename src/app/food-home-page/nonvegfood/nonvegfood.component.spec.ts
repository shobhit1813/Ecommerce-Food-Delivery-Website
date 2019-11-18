import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegfoodComponent } from './nonvegfood.component';

describe('NonvegfoodComponent', () => {
  let component: NonvegfoodComponent;
  let fixture: ComponentFixture<NonvegfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonvegfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonvegfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
