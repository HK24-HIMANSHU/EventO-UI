import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCardComponent } from './space-card.component';

describe('SpaceCardComponent', () => {
  let component: SpaceCardComponent;
  let fixture: ComponentFixture<SpaceCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceCardComponent]
    });
    fixture = TestBed.createComponent(SpaceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
