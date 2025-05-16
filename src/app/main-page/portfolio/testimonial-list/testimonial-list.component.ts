import { Component } from '@angular/core';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { NgClass, NgFor } from '@angular/common';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-testimonial-list',
  imports: [TestimonialCardComponent, NgFor, NgClass],
  templateUrl: './testimonial-list.component.html',
  styleUrls: ['./testimonial-list.component.scss'],
})
export class TestimonialListComponent {
  constructor(public sharedService: SharedService) {}

  public currentTestimonial: number = 0;

  public allTestimonials: Array<{
    name: string;
    position: {
      de: string;
      en: string;
    };
    text: {
      de: string;
      en: string;
    };
    image: string;
  }> = [
    {
      name: 'Simon Kiesner',
      position: {
        de: 'Team Partner',
        en: 'Team Partner',
      },
      text: {
        de: 'Ich hatte die Freude, mit Ayyub bei der Erstellung unseres Join-Projekts zusammenzuarbeiten. Seine Genauigkeit bei der Bearbeitung seiner Aufgaben sowie seine Geduld und Hilfsbereitschaft bei sämtlichen Coding-Herausforderungen trugen zu einer sehr angenehmen Atmosphäre innerhalb unserer Gruppe bei. Besonders beeindruckend war seine Fähigkeit, sich schnell auch in fremdem Code zurechtzufinden, was maßgeblich zum Erfolg unseres Projekts beitrug',
        en: 'I had the pleasure of working with Ayyub on the creation of our Join project. His precision in completing his tasks and his patience and willingness to help with all coding challenges contributed to a very pleasant atmosphere within our group. Particularly impressive was his ability to quickly find his way in foreign code, which significantly contributed to the success of our project',
      },
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
