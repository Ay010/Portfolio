import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-skill-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './skill-icon.component.html',
  styleUrls: ['./skill-icon.component.scss'],
})
export class SkillIconComponent {
  @Input() lastIcon: boolean = false;

  @Input() iconName: string = '';

  private _icon: string = '';
  sanitizedIcon: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  @Input()
  set icon(value: string) {
    this._icon = value;
    this.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(this._icon);
  }

  get icon(): string {
    return this._icon;
  }
}
