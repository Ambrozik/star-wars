import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidnavComponent } from './slidnav.component';

describe('SlidnavComponent', () => {
  let component: SlidnavComponent;
  let fixture: ComponentFixture<SlidnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
