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

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgIf],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'true',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      state(
        'false',
        style({
          transform: 'translateX(50%)',
          opacity: 0,
        })
      ),
      transition('* => false', [animate('0.4s ease-in')]),
      transition('* => true', [animate('0.5s 0.2s ease-out')]),
    ]),
    trigger('fadeIn', [
      state(
        'true',
        style({
          opacity: 1,
        })
      ),
      state(
        'false',
        style({
          opacity: 0,
        })
      ),
      transition('* => false', [animate('0.4s ease-in')]),
      transition('* => true', [animate('0.5s 0.2s ease-out')]),
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

  private textTimers: Map<string, ReturnType<typeof setTimeout>> = new Map();

  constructor(private el: ElementRef, public sharedService: SharedService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.handleAnimation('.img-container', 'imgContainer');
    this.sequenceAnimations(['.text1', '.text2', '.text3']);
  }

  handleAnimation(selector: string, stateKey: string) {
    const element = this.el.nativeElement.querySelector(selector);
    if (element && this.isElementVisible(element))
      this.elementsState[stateKey] = true;
    else this.elementsState[stateKey] = false;
  }

  sequenceAnimations(selectors: string[]) {
    selectors.forEach((selector, index) => {
      const elementKey = `text${index + 1}`;
      const element = this.el.nativeElement.querySelector(selector);

      if (element && this.isElementVisible(element)) {
        // Timer setzen
        // const timer = setTimeout(() => {
        this.elementsState[elementKey] = true;
        // }, index * 300); // Zeitversetzt für nacheinander

        // this.textTimers.set(elementKey, timer);
      } else {
        this.elementsState[elementKey] = false;
      }
    });
  }

  isElementVisible(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return rect.top + rect.height / 2 <= window.innerHeight;
  }
}
