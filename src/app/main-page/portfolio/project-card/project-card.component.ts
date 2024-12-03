import { Component, HostListener, Input } from '@angular/core';
import { ButtonComponent } from '../../../button/button.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ButtonComponent, NgFor, NgIf, NgClass],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  animations: [
    trigger('rotateIn', [
      state(
        'true',
        style({
          transform: 'rotateX(0deg)', // Bild in seine finale Position drehen
          opacity: 1, // Bild sichtbar machen
        })
      ),
      state(
        'false',
        style({
          transform: 'rotateX(-90deg)', // Bild von der Seite kommen lassen
          opacity: 0, // Bild unsichtbar machen
        })
      ),
      transition('* => false', [animate('0.3s ease-out')]), // Übergang von sichtbar zu unsichtbar
      transition('* => true', [animate('0.3s 0.2s ease-out')]), // Übergang von unsichtbar zu sichtbar
    ]),
    trigger('fadeIn', [
      state(
        'true',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'false',
        style({
          opacity: 0,
          transform: 'translateY(15px)',
        })
      ),
      transition('* => false', [animate('0.3s ease-out')]),
      transition('* => true', [animate('0.3s 0.2s ease-out')]),
    ]),
    trigger('scaleIn', [
      state(
        'true',
        style({
          transform: 'scale(1)', // Endgröße
          opacity: 1,
        })
      ),
      state(
        'false',
        style({
          transform: 'scale(0)', // Anfangsgröße
          opacity: 0,
        })
      ),
      transition('* => false', [animate('0.3s ease-out')]), // Übergang von groß zu klein
      transition('* => true', [animate('0.2s 0.5s ease-out')]), // Übergang von klein zu groß
    ]),
  ],
})
export class ProjectCardComponent {
  @Input() projectName: { en: string; de: string } = { en: '', de: '' };
  @Input() projectDescription: { en: string; de: string } = { en: '', de: '' };
  @Input() usedTechnologies: string[] = [];
  @Input() projectImage: string = '';
  @Input() githubLink: string = '';
  @Input() websiteLink: string = '';
  @Input() reverse: boolean = false;
  @Input() i: number = 0;
  public isImageVisible: boolean = false;
  public isTitleVisible: boolean = false;
  public isTechnologiesVisible: boolean = false;
  public isDescriptionVisible: boolean = false;
  public isLiveTestButtonVisible: boolean = false;
  public isGithubButtonVisible: boolean = false;

  constructor(public sharedService: SharedService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const selector = `#project-image-${this.i}`;
    const containerSelector = `#project-container-${this.i}`;
    const liveTestSelector = `#live-test-button-${this.i}`;
    const githubSelector = `#github-button-${this.i}`;

    this.sharedService.updateElementVisibility(
      selector,
      'isImageVisible',
      this
    );

    this.sharedService.updateElementVisibility(
      containerSelector,
      'isTitleVisible',
      this
    );
    this.sharedService.updateElementVisibility(
      containerSelector,
      'isTechnologiesVisible',
      this
    );
    this.sharedService.updateElementVisibility(
      containerSelector,
      'isDescriptionVisible',
      this
    );

    this.sharedService.updateElementVisibility(
      liveTestSelector,
      'isLiveTestButtonVisible',
      this
    );

    this.sharedService.updateElementVisibility(
      githubSelector,
      'isGithubButtonVisible',
      this
    );
  }
}
