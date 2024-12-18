import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public language: string = 'en';
  localStorage = window.localStorage;

  constructor() {
    this.getDataFromLocalStorage();
  }

  getDataFromLocalStorage() {
    const language = localStorage.getItem('language');
    if (language !== null) {
      this.language = language;
    }
  }

  stopEvent(event: any) {
    event.stopPropagation();
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
