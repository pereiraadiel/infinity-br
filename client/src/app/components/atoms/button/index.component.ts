import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class ButtonComponent {
  @Input() active: 'false' | 'true' = 'false';
  @Input() type: 'submit' | 'button' = 'submit';
  @Input() disabled!: boolean;
  @Output() onClick = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }

  isActive() {
    return this.active === 'true';
  }
}
