import { Component, HostListener } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NgFor, NgIf } from '@angular/common';
import { TestimonialListComponent } from './testimonial-list/testimonial-list.component';
import { SharedService } from '../../shared/shared.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, NgFor, TestimonialListComponent, NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  animations: [
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
      transition('* => false', [animate('0.5s')]),
      transition('* => true', [animate('0.7s 0.2s ease-out')]),
    ]),
    trigger('slideInFromBottom', [
      state(
        'true',
        style({
          transform: 'translateY(0)',
          opacity: 1,
        })
      ),
      state(
        'false',
        style({
          transform: 'translateY(50px)',
          opacity: 0,
        })
      ),
      transition('* => false', [animate('0.5s ease-out')]),
      transition('* => true', [animate('0.5s 0.2s ease-out')]),
    ]),
    trigger('fadeInShadow', [
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
      transition('* => false', [animate('0.5s')]),
      transition('* => true', [animate('0.7s 0.2s ease-out')]),
    ]),
  ],
})
export class PortfolioComponent {
  public isTitleVisible: boolean = false;
  public isDescriptionVisible: boolean = false;
  public isPurpleShadowVisible: boolean = false;
  public isGreenShadowVisible: boolean = false;

  constructor(public sharedService: SharedService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.sharedService.updateElementVisibility(
      '.portfolio-section-title',
      'isTitleVisible',
      this
    );

    this.sharedService.updateElementVisibility(
      '.portfolio-description',
      'isDescriptionVisible',
      this
    );

    this.sharedService.updateElementVisibility(
      '.portfolio-section-purple-shadow', // Selektor für das Purple Shadow Bild
      'isPurpleShadowVisible',
      this
    );
    this.sharedService.updateElementVisibility(
      '.portfolio-section-green-shadow', // Selektor für das Green Shadow Bild
      'isGreenShadowVisible',
      this
    );
  }

  public projects: {
    projectName: { en: string; de: string };
    projectDescription: { en: string; de: string };
    projectImage: string;
    usedTechnologies: string[];
    githubLink: string;
    websiteLink: string;
  }[] = [
    {
      projectName: {
        en: 'Join',
        de: 'Join',
      },
      projectDescription: {
        en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        de: 'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      },
      projectImage: 'join.png',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      githubLink: 'https://github.com/MarcelZalec/JOIN',
      websiteLink: '',
    },
    {
      projectName: {
        en: 'Pokédex',
        de: 'Pokédex',
      },
      projectDescription: {
        en: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
        de: 'Basierend auf der PokéAPI eine einfache Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
      },
      projectImage: 'pokedex.png',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS', 'Api'],
      githubLink: 'https://github.com/Ay010/Pokedex',
      websiteLink: '',
    },
    {
      projectName: {
        en: 'El pollo loco',
        de: 'El pollo loco',
      },
      projectDescription: {
        en: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
        de: 'Spring-, Lauf- und Wurfspiel basierend auf objektorientiertem Ansatz. Helfen Sie Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
      },
      projectImage: 'Sharkie photo.png',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/Ay010/El-pollo-loco',
      websiteLink: '',
    },
  ];
}
