import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../button/button.component';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ButtonComponent, NgFor, NgIf, NgClass],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() projectName: string = '';
  @Input() projectDescription: string = '';
  @Input() usedTechnologies: string[] = [];
  @Input() projectImage: string = '';
  @Input() githubLink: string = '';
  @Input() websiteLink: string = '';
  @Input() reverse: boolean = false;
}
