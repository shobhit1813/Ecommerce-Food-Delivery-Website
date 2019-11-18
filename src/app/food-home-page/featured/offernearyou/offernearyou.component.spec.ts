import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffernearyouComponent } from './offernearyou.component';

describe('OffernearyouComponent', () => {
  let component: OffernearyouComponent;
  let fixture: ComponentFixture<OffernearyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffernearyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffernearyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
