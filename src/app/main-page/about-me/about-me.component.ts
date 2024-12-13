import { Component, HostListener, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { SharedService } from '../../shared/shared.service';
import { NgIf } from '@angular/common';
import { ProfileImageComponent } from './profile-image/profile-image.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgIf, ProfileImageComponent],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('* => false', animate('0.4s ease-in')),
      transition('* => true', animate('0.5s 0.2s ease-out')),
    ]),
  ],
})
export class AboutMeComponent {
  public elementsState: Record<string, boolean> = {
    imgContainer: false,
    text1: false,
    text2: false,
    text3: false,
  };

  constructor(private el: ElementRef, public sharedService: SharedService) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.toggleElementState('.img-container', 'imgContainer');
    ['.text1', '.text2', '.text3'].forEach((selector, index) =>
      this.toggleElementState(selector, `text${index + 1}`)
    );
  }

  private toggleElementState(selector: string, stateKey: string): void {
    const element = this.el.nativeElement.querySelector(selector);
    this.elementsState[stateKey] = element
      ? this.isElementVisible(element)
      : false;
  }

  private isElementVisible(element: HTMLElement): boolean {
    const { top, height } = element.getBoundingClientRect();
    return top + height / 2 <= window.innerHeight;
  }
}
