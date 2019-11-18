import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegfoodComponent } from './vegfood.component';

describe('VegfoodComponent', () => {
  let component: VegfoodComponent;
  let fixture: ComponentFixture<VegfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
