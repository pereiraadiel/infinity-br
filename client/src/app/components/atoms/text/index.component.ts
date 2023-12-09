import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-text',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class TextComponent {
  constructor(private readonly sanitizer: DomSanitizer) {}

  @Input() variant!: 'heading' | 'subheading' | 'paragraph';
  @Input() link?: string;
  @Input() content!: string;

  isLink() {
    return this.link !== undefined;
  }

  href() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.link || '');
  }
}
