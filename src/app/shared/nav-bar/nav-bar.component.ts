import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  public isMenuOpen: boolean = false;
  public activeSection: string | null = null;

  constructor(public sharedService: SharedService) {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.classList.toggle('overflow-hidden');
  }

  public closeMobileNav(): void {
    this.isMenuOpen = false;
    document.body.classList.remove('overflow-hidden');
  }

  public changeLanguage(language: string): void {
    this.sharedService.language = language;
  }

  @HostListener('window:scroll')
  public onWindowScroll(): void {
    const sections = ['about-me', 'skills', 'portfolio'];
    this.activeSection =
      sections.find((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const { top, bottom } = sectionElement.getBoundingClientRect();
          return (
            top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2
          );
        }
        return false;
      }) || null;
  }

  public isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }
}
