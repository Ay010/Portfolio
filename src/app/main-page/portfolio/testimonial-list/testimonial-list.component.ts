import { Component } from '@angular/core';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-testimonial-list',
    imports: [TestimonialCardComponent, NgFor, NgClass],
    templateUrl: './testimonial-list.component.html',
    styleUrls: ['./testimonial-list.component.scss']
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
      name: 'V. Schuster',
      position: 'Team Partner',
      text: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      image: 'person2.png',
    },
    {
      name: 'John Doe',
      position: 'Project Manager',
      text: 'Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.',
      image: 'person3.png',
    },
    {
      name: 'Jane Smith',
      position: 'Software Engineer',
      text: 'It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.',
      image: 'person4.png',
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
