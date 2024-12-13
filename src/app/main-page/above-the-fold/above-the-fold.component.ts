import { Component, HostListener } from '@angular/core';
import { IntroductionCardComponent } from './introduction-card/introduction-card.component';
import { SharedService } from '../../shared/shared.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [IntroductionCardComponent, NgIf],
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss'],
  animations: [
    trigger('fadeInShadow', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('* => false', animate('0.8s')),
      transition('* => true', animate('0.5s 0.3s ease-out')),
    ]),
  ],
})
export class AboveTheFoldComponent {
  public isShadowVisible: boolean = false;

  constructor(public sharedService: SharedService) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.sharedService.updateElementVisibility(
      '.above-the-fold-section-purple-shadow',
      'isShadowVisible',
      this
    );
  }
}
