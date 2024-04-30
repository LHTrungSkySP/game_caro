import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHallComponent } from './game-hall.component';

describe('GameHallComponent', () => {
  let component: GameHallComponent;
  let fixture: ComponentFixture<GameHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameHallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
