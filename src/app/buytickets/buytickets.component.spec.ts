import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyticketsComponent } from './buytickets.component';

describe('BuyticketsComponent', () => {
  let component: BuyticketsComponent;
  let fixture: ComponentFixture<BuyticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyticketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
