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
  public isTitleVisible: boolean = false; // Anfangszustand ist false

  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {
    // Sobald die Komponente initialisiert wird, setzen wir isTitleVisible auf true
    setTimeout(() => {
      this.isTitleVisible = true; // Aktiviert die Animation
    }, 300); // Setze dies auf 0ms, um es sofort nach der Initialisierung anzuwenden
  }
}
