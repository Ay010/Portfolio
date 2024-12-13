import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-skill-icon',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './skill-icon.component.html',
  styleUrls: ['./skill-icon.component.scss'],
})
export class SkillIconComponent {
  @Input() public lastIcon: boolean = false;
  @Input() public iconName: string = '';

  private _icon: string = '';
  public sanitizedIcon: SafeHtml = '';

  constructor(
    private readonly sanitizer: DomSanitizer,
    public readonly sharedService: SharedService
  ) {}

  @Input()
  set icon(value: string) {
    this._icon = value;
    this.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(value);
  }

  get icon(): string {
    return this._icon;
  }
}
