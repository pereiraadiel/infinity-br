import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class CardComponent {
  @Input() contentText!: string;
}
