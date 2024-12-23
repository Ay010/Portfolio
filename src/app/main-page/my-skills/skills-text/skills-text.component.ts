import { Component, Input } from '@angular/core';
import { SharedService } from '../../../shared/shared.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ButtonComponent } from '../../../button/button.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-skills-text',
    imports: [NgIf, ButtonComponent],
    templateUrl: './skills-text.component.html',
    styleUrls: ['./skills-text.component.scss'],
    animations: [
        trigger('fadeIn', [
            state('true', style({ opacity: 1 })),
            state('false', style({ opacity: 0 })),
            transition('* => false', animate('0.3s')),
            transition('* => true', animate('0.5s ease-out')),
        ]),
        trigger('fadeInLeft', [
            state('true', style({ transform: 'translateX(0)', opacity: 1 })),
            state('false', style({ transform: 'translateX(-20%)', opacity: 0 })),
            transition('* => false', animate('0.3s')),
            transition('* => true', animate('1s 0.3s ease-out')),
        ]),
        trigger('zoom', [
            state('true', style({ transform: 'scale(1)' })),
            state('false', style({ transform: 'scale(0) translateY(-100px)' })),
            transition('* => false', animate('0.2s')),
            transition('* => true', animate('0.5s 0.5s ease-out')),
        ]),
    ]
})
export class SkillsTextComponent {
  @Input() isTitleVisible: boolean = false;
  @Input() isButtonVisible: boolean = false;
  @Input() isTextContainerVisible: boolean = false;

  constructor(public sharedService: SharedService) {}
}
