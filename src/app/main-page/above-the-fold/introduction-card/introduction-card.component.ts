import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../button/button.component';
import { SharedService } from '../../../shared/shared.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-introduction-card',
  standalone: true,
  imports: [ButtonComponent, NgClass, NgIf],
  templateUrl: './introduction-card.component.html',
  styleUrls: ['./introduction-card.component.scss'],
})
export class IntroductionCardComponent implements OnInit {
  public isTitleVisible: boolean = false;

  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {
    setTimeout(() => (this.isTitleVisible = true), 300);
  }
}
