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
    createFadeTrigger('fadeIn'),
    createSlideTrigger('slideInFromBottom', 'translateY(50px)'),
    createFadeTrigger('fadeInShadow'),
  ],
})
export class PortfolioComponent {
  public isTitleVisible: boolean = false;
  public isDescriptionVisible: boolean = false;
  public isPurpleShadowVisible: boolean = false;
  public isGreenShadowVisible: boolean = false;

  public projects: Project[] = [
    {
      projectName: { en: 'Join', de: 'Join' },
      projectDescription: {
        en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        de: 'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      },
      projectImage: 'join2.png',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      githubLink: 'https://github.com/MarcelZalec/JOIN',
      websiteLink: 'http://join.ayyub-qarar.de/summary.html',
    },
    {
      projectName: { en: 'Pokédex', de: 'Pokédex' },
      projectDescription: {
        en: 'Based on the PokéAPI, a simple library that provides and catalogues Pokémon information.',
        de: 'Basierend auf der PokéAPI, eine einfache Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
      },
      projectImage: 'pokedex2.png',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS', 'Api'],
      githubLink: 'https://github.com/Ay010/Pokedex',
      websiteLink: 'http://pokedex.ayyub-qarar.de',
    },
    {
      projectName: { en: 'El pollo loco', de: 'El pollo loco' },
      projectDescription: {
        en: 'Jump, run and throw game based on an object-oriented approach. Help Pepe to find coins and Tabasco salsa to fight against the crazy hen.',
        de: 'Spring-, Lauf- und Wurfspiel basierend auf objektorientiertem Ansatz. Helfen Sie Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
      },
      projectImage: 'el-pllo-loco.png',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/Ay010/El-pollo-loco',
      websiteLink: 'http://el-pollo-loco.ayyub-qarar.de',
    },
  ];

  constructor(public sharedService: SharedService) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const elements = [
      { selector: '.portfolio-section-title', prop: 'isTitleVisible' },
      { selector: '.portfolio-description', prop: 'isDescriptionVisible' },
      {
        selector: '.portfolio-section-purple-shadow',
        prop: 'isPurpleShadowVisible',
      },
      {
        selector: '.portfolio-section-green-shadow',
        prop: 'isGreenShadowVisible',
      },
    ];
    elements.forEach(({ selector, prop }) =>
      this.sharedService.updateElementVisibility(selector, prop, this)
    );
  }
}

type Project = {
  projectName: { en: string; de: string };
  projectDescription: { en: string; de: string };
  projectImage: string;
  usedTechnologies: string[];
  githubLink: string;
  websiteLink: string;
};

function createFadeTrigger(name: string) {
  return trigger(name, [
    state('true', style({ opacity: 1 })),
    state('false', style({ opacity: 0 })),
    transition('* => false', [animate('0.5s')]),
    transition('* => true', [animate('0.7s 0.2s ease-out')]),
  ]);
}

function createSlideTrigger(name: string, translateYValue: string) {
  return trigger(name, [
    state('true', style({ transform: 'translateY(0)', opacity: 1 })),
    state('false', style({ transform: translateYValue, opacity: 0 })),
    transition('* => false', [animate('0.5s ease-out')]),
    transition('* => true', [animate('0.5s 0.2s ease-out')]),
  ]);
}
