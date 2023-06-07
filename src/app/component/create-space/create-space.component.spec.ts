import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpaceComponent } from './create-space.component';

describe('CreateSpaceComponent', () => {
  let component: CreateSpaceComponent;
  let fixture: ComponentFixture<CreateSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSpaceComponent]
    });
    fixture = TestBed.createComponent(CreateSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
