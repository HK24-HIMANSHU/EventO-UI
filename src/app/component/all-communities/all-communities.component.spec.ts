import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCommunitiesComponent } from './all-communities.component';

describe('AllCommunitiesComponent', () => {
  let component: AllCommunitiesComponent;
  let fixture: ComponentFixture<AllCommunitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCommunitiesComponent]
    });
    fixture = TestBed.createComponent(AllCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
