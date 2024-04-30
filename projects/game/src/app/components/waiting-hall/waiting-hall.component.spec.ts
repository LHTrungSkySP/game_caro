import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingHallComponent } from './waiting-hall.component';

describe('WaitingHallComponent', () => {
  let component: WaitingHallComponent;
  let fixture: ComponentFixture<WaitingHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaitingHallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaitingHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
