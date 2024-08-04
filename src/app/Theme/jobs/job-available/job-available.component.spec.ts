import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAvailableComponent } from './job-available.component';

describe('JobAvailableComponent', () => {
  let component: JobAvailableComponent;
  let fixture: ComponentFixture<JobAvailableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobAvailableComponent]
    });
    fixture = TestBed.createComponent(JobAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
