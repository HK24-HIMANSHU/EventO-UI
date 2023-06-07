import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSignupComponent } from './owner-signup.component';

describe('OwnerSignupComponent', () => {
  let component: OwnerSignupComponent;
  let fixture: ComponentFixture<OwnerSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerSignupComponent]
    });
    fixture = TestBed.createComponent(OwnerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
