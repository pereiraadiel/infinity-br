import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class ShippingFormComponent {
  distance!: number;
  isSubmiting = false;

  async handleSubmit() {
    this.isSubmiting = true;
    console.log('formulario de shipping submetido', this.distance);
    setTimeout(() => {
      this.isSubmiting = false;
    }, 3000);
  }

  setDistance(value: string) {
    this.distance = Number(value);
  }
}
