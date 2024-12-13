import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-profile-image',
  standalone: true,
  imports: [],
  templateUrl: './profile-image.component.html',
  styleUrl: './profile-image.component.scss',
  animations: [
    trigger('openClose', [
      state('true', style({ transform: 'translateX(0)', opacity: 1 })),
      state('false', style({ transform: 'translateX(50%)', opacity: 0 })),
      transition('* => false', animate('0.4s ease-in')),
      transition('* => true', animate('0.5s 0.2s ease-out')),
    ]),
  ],
})
export class ProfileImageComponent {
  @Input() isOpen: boolean = false; // Empfang des States
}
