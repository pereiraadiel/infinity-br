import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class ListComponent {
  @Input()
  title!: string;

  @Input()
  items!: { id: string; content: string }[];

  @Input() variant!: 'available' | 'my-shippings' | 'waiting' | 'default';
}
