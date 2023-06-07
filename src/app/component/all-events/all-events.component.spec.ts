import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEventsComponent } from './all-events.component';

describe('AllEventsComponent', () => {
  let component: AllEventsComponent;
  let fixture: ComponentFixture<AllEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllEventsComponent]
    });
    fixture = TestBed.createComponent(AllEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
