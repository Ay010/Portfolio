import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { IntroductionCardComponent } from './introduction-card/introduction-card.component';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [IntroductionCardComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {}
