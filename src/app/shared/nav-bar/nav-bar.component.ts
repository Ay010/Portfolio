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
  isMenuOpen = false;
  activeSection: string | null = null; // to track the active section

  constructor(public sharedService: SharedService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.getElementById('body')?.classList.toggle('overflow-hidden');
    document.body.classList.toggle('overflow-hidden');
  }

  closeMobileNav() {
    this.isMenuOpen = false;
    document.getElementById('body')?.classList.remove('overflow-hidden');
    document.body.classList.remove('overflow-hidden');
  }

  changeLanguage(language: string) {
    this.sharedService.language = language;
  }

  navigateToSection(sectionId: string) {
    this.sharedService.scrollToSection(sectionId);
  }

  // Listen to scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['about-me', 'skills', 'portfolio'];
    let foundSection = false;

    for (const sectionId of sections) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();

        // Check if section is currently in the viewport vertically
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          this.activeSection = sectionId;
          foundSection = true;
          break;
        }
      }
    }

    // Clear activeSection if no sections are visible
    if (!foundSection) {
      this.activeSection = null;
    }
  }

  // Check if a section is active
  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }
}
