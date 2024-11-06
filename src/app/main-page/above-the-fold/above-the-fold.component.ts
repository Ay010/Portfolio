import { Component } from '@angular/core';
import { IntroductionCardComponent } from './introduction-card/introduction-card.component';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [IntroductionCardComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  constructor(public sharedService: SharedService) {}

  navigateToSection(sectionId: string) {
    this.sharedService.scrollToSection(sectionId);
  }
}
