import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class InputComponent {
  @Input() active: 'false' | 'true' = 'false';
  @Input() type!: 'email' | 'password' | 'text';
  @Input() id!: string;
  @Input() placeholder!: string;
  @Input() label!: string;
  @Input() value!: string;

  @Output() onChange = new EventEmitter<string>();

  constructor() {
    if (!this.value) this.value = '';
  }

  handleChange(event: any) {
    this.value = event.target.value;
    this.onChange.emit(this.value);
  }

  isActive() {
    return this.active === 'true';
  }
}
