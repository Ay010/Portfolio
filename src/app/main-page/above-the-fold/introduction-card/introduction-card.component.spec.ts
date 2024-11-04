import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionCardComponent } from './introduction-card.component';

describe('IntroductionCardComponent', () => {
  let component: IntroductionCardComponent;
  let fixture: ComponentFixture<IntroductionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroductionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
