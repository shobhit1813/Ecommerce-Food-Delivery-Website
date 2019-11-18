import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDialogboxComponent } from './custom-dialogbox.component';

describe('CustomDialogboxComponent', () => {
  let component: CustomDialogboxComponent;
  let fixture: ComponentFixture<CustomDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
