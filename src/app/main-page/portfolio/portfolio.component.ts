import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  public projects: {
    projectName: string;
    projectDescription: string;
    projectImage: string;
    usedTechnologies: string[];
  }[] = [
    {
      projectName: 'Join',
      projectDescription:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      projectImage: 'join.png',
      usedTechnologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
    },
    {
      projectName: 'Pokédex',
      projectDescription:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      projectImage: 'pokedex.png',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS', 'Api'],
    },
    {
      projectName: 'El pollo loco',
      projectDescription:
        'An exciting platformer game where players jump and run through various levels.',
      projectImage: 'Sharkie photo.png',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS', 'Api'],
    },
  ];
}
