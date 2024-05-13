import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmCodeComponent } from './comfirm-code.component';

describe('ComfirmCodeComponent', () => {
  let component: ComfirmCodeComponent;
  let fixture: ComponentFixture<ComfirmCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComfirmCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComfirmCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
