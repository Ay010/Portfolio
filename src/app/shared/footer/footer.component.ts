import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-footer',
    imports: [NgIf],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public sharedService: SharedService) {}
}
