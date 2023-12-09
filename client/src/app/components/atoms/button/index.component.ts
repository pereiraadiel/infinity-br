import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class ButtonComponent {
  @Input() active: 'false' | 'true' = 'false';

  @Output() onClick = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }

  isActive() {
    return this.active === 'true';
  }
}
