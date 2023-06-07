import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerloginComponent } from './ownerlogin.component';

describe('OwnerloginComponent', () => {
  let component: OwnerloginComponent;
  let fixture: ComponentFixture<OwnerloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerloginComponent]
    });
    fixture = TestBed.createComponent(OwnerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
