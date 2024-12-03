import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public language: string = 'en';

  constructor() {}

  stopEvent(event: any) {
    event.stopPropagation();
  }

  // Scroll zu einer bestimmten Sektion
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Höhe des Offsets (z.B. Höhe der Navigation)
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  // Prüft, ob ein Element sichtbar ist
  isElementVisible(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return rect.top + rect.height / 2 <= window.innerHeight;
  }

  // Diese Methode überprüft die Sichtbarkeit eines Elements und gibt den Wert zurück
  updateElementVisibility(
    selector: string,
    propertyName: keyof any,
    component: any
  ): void {
    const element = document.querySelector(selector);
    if (element && element instanceof HTMLElement) {
      component[propertyName] = this.isElementVisible(element);
    }
  }
}
