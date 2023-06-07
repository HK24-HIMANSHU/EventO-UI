import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceListingComponent } from './space-listing.component';

describe('SpaceListingComponent', () => {
  let component: SpaceListingComponent;
  let fixture: ComponentFixture<SpaceListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceListingComponent]
    });
    fixture = TestBed.createComponent(SpaceListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
