import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-testimonial-card',
    imports: [],
    templateUrl: './testimonial-card.component.html',
    styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent {
  @Input() name: string = '';
  @Input() position: string = '';
  @Input() text: string = '';
  @Input() image: string = '';
}
