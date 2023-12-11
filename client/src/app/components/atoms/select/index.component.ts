import { Component, Input } from '@angular/core';

type SelectOption = {
  id: string;
  name: string;
};

@Component({
  selector: 'app-select',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class SelectComponent {
  @Input()
  id!: string;
  @Input()
  label!: string;
  @Input()
  options: SelectOption[] = [];
}
