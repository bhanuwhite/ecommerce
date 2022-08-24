import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUPComponent } from './pop-up.component';

describe('PopUPComponent', () => {
  let component: PopUPComponent;
  let fixture: ComponentFixture<PopUPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
