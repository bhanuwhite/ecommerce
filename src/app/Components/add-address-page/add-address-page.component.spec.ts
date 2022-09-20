import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressPageComponent } from './add-address-page.component';

describe('AddAddressPageComponent', () => {
  let component: AddAddressPageComponent;
  let fixture: ComponentFixture<AddAddressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAddressPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
