import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerNavbarComponent } from './owner-navbar.component';

describe('OwnerNavbarComponent', () => {
  let component: OwnerNavbarComponent;
  let fixture: ComponentFixture<OwnerNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerNavbarComponent]
    });
    fixture = TestBed.createComponent(OwnerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
