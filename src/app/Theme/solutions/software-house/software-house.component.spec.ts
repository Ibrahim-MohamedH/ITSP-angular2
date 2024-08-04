import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareHouseComponent } from './software-house.component';

describe('SoftwareHouseComponent', () => {
  let component: SoftwareHouseComponent;
  let fixture: ComponentFixture<SoftwareHouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftwareHouseComponent]
    });
    fixture = TestBed.createComponent(SoftwareHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
