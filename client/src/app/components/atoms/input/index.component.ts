import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class InputComponent {
  @Input() active: 'false' | 'true' = 'false';
  @Input() id!: string;
  @Input() placeholder!: string;
  @Input() label!: string;
  @Input() value?: string;

  @Output() onChange = new EventEmitter();

  handleChange() {
    this.onChange.emit();
  }

  isActive() {
    return this.active === 'true';
  }
}
