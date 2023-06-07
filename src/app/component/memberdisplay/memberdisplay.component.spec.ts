import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberdisplayComponent } from './memberdisplay.component';

describe('MemberdisplayComponent', () => {
  let component: MemberdisplayComponent;
  let fixture: ComponentFixture<MemberdisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberdisplayComponent]
    });
    fixture = TestBed.createComponent(MemberdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
