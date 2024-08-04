import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackApplicationComponent } from './track-application.component';

describe('TrackApplicationComponent', () => {
  let component: TrackApplicationComponent;
  let fixture: ComponentFixture<TrackApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackApplicationComponent]
    });
    fixture = TestBed.createComponent(TrackApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
