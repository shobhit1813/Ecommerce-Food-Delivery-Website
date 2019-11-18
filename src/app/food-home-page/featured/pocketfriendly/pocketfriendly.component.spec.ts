import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketfriendlyComponent } from './pocketfriendly.component';

describe('PocketfriendlyComponent', () => {
  let component: PocketfriendlyComponent;
  let fixture: ComponentFixture<PocketfriendlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocketfriendlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketfriendlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
