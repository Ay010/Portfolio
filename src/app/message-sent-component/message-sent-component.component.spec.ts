import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSentComponentComponent } from './message-sent-component.component';

describe('MessageSentComponentComponent', () => {
  let component: MessageSentComponentComponent;
  let fixture: ComponentFixture<MessageSentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageSentComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageSentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
