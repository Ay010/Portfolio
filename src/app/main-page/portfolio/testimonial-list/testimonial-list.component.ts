import { Component } from '@angular/core';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-testimonial-list',
  imports: [TestimonialCardComponent, NgFor, NgClass],
  templateUrl: './testimonial-list.component.html',
  styleUrls: ['./testimonial-list.component.scss'],
})
export class TestimonialListComponent {
  public currentTestimonial: number = 0;

  public allTestimonials: Array<{
    name: string;
    position: string;
    text: string;
    image: string;
  }> = [
    {
      name: 'Simon Kiesner',
      position: 'Team Partner',
      text: 'Ich hatte die Freude, mit Ayyub bei der Erstellung unseres Join-Projekts zusammenzuarbeiten. Seine Genauigkeit bei der Bearbeitung seiner Aufgaben sowie seine Geduld und Hilfsbereitschaft bei sämtlichen Coding-Herausforderungen trugen zu einer sehr angenehmen Atmosphäre innerhalb unserer Gruppe bei. Besonders beeindruckend war seine Fähigkeit, sich schnell auch in fremdem Code zurechtzufinden, was maßgeblich zum Erfolg unseres Projekts beitrug',
      image: 'person2.png',
    },
  ];

  public previousTestimonial(): void {
    this.currentTestimonial =
      this.currentTestimonial > 0
        ? this.currentTestimonial - 1
        : this.allTestimonials.length - 1;
  }

  public nextTestimonial(): void {
    this.currentTestimonial =
      this.currentTestimonial < this.allTestimonials.length - 1
        ? this.currentTestimonial + 1
        : 0;
  }

  public setCurrentTestimonial(index: number): void {
    this.currentTestimonial = index;
  }
}
