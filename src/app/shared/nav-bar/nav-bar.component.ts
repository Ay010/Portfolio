import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  isMenuOpen = false;

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

  navigateToSection(sectionId: string) {
    this.sharedService.scrollToSection(sectionId);
  }
}
