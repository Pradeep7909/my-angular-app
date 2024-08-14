import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstscreenComponent } from './firstscreen.component';

describe('FirstscreenComponent', () => {
  let component: FirstscreenComponent;
  let fixture: ComponentFixture<FirstscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
