import { Component } from '@angular/core';
import { ButtonComponent } from '../../../button/button.component';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-introduction-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './introduction-card.component.html',
  styleUrl: './introduction-card.component.scss',
})
export class IntroductionCardComponent {
  constructor(public sharedService: SharedService) {}
}
