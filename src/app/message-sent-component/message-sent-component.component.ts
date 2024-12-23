import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { SharedService } from '../shared/shared.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-message-sent-component',
    imports: [ButtonComponent, NgIf],
    templateUrl: './message-sent-component.component.html',
    styleUrl: './message-sent-component.component.scss'
})
export class MessageSentComponentComponent {
  constructor(public sharedService: SharedService) {}
}
