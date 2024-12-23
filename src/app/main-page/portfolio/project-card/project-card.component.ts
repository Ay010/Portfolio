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
    imports: [ButtonComponent, NgFor, NgIf, NgClass],
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss'],
    animations: [
        trigger('rotateIn', [
            state('true', style({ transform: 'rotateX(0deg)', opacity: 1 })),
            state('false', style({ transform: 'rotateX(-90deg)', opacity: 0 })),
            transition('* => false', [animate('0.3s ease-out')]),
            transition('* => true', [animate('0.3s 0.2s ease-out')]),
        ]),
        trigger('fadeIn', [
            state('true', style({ opacity: 1, transform: 'translateY(0)' })),
            state('false', style({ opacity: 0, transform: 'translateY(15px)' })),
            transition('* => false', [animate('0.3s ease-out')]),
            transition('* => true', [animate('0.3s 0.2s ease-out')]),
        ]),
        trigger('scaleIn', [
            state('true', style({ transform: 'scale(1)', opacity: 1 })),
            state('false', style({ transform: 'scale(0)', opacity: 0 })),
            transition('* => false', [animate('0.3s ease-out')]),
            transition('* => true', [animate('0.2s 0.5s ease-out')]),
        ]),
    ]
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

  public isImageVisible = false;
  public isTitleVisible = false;
  public isTechnologiesVisible = false;
  public isDescriptionVisible = false;
  public isLiveTestButtonVisible = false;
  public isGithubButtonVisible = false;

  constructor(public sharedService: SharedService) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const elementIds = [
      { id: `#project-image-${this.i}`, visibilityKey: 'isImageVisible' },
      { id: `#project-container-${this.i}`, visibilityKey: 'isTitleVisible' },
      {
        id: `#project-container-${this.i}`,
        visibilityKey: 'isTechnologiesVisible',
      },
      {
        id: `#project-container-${this.i}`,
        visibilityKey: 'isDescriptionVisible',
      },
      {
        id: `#live-test-button-${this.i}`,
        visibilityKey: 'isLiveTestButtonVisible',
      },
      {
        id: `#github-button-${this.i}`,
        visibilityKey: 'isGithubButtonVisible',
      },
    ];

    elementIds.forEach(({ id, visibilityKey }) =>
      this.sharedService.updateElementVisibility(id, visibilityKey, this)
    );
  }
}
