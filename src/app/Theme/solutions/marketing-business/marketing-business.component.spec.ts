import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingBusinessComponent } from './marketing-business.component';

describe('MarketingBusinessComponent', () => {
  let component: MarketingBusinessComponent;
  let fixture: ComponentFixture<MarketingBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingBusinessComponent]
    });
    fixture = TestBed.createComponent(MarketingBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
