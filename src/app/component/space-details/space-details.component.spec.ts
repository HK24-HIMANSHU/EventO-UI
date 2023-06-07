import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceDetailsComponent } from './space-details.component';

describe('SpaceDetailsComponent', () => {
  let component: SpaceDetailsComponent;
  let fixture: ComponentFixture<SpaceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceDetailsComponent]
    });
    fixture = TestBed.createComponent(SpaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
