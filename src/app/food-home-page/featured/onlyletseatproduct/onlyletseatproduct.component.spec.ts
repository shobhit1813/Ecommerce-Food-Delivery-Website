import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyletseatproductComponent } from './onlyletseatproduct.component';

describe('OnlyletseatproductComponent', () => {
  let component: OnlyletseatproductComponent;
  let fixture: ComponentFixture<OnlyletseatproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyletseatproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyletseatproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
