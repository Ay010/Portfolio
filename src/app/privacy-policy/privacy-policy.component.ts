import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
    selector: 'app-privacy-policy',
    imports: [NgIf],
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(public sharedService: SharedService) {}
}
