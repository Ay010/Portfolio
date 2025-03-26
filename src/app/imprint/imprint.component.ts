import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-imprint',
  imports: [NgIf],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  constructor(public sharedService: SharedService) {}
}
