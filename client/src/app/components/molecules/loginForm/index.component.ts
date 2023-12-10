import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class LoginFormComponent {
  email!: string;
  password!: string;
  isSubmiting = false;

  async handleSubmit() {
    this.isSubmiting = true;
    console.log('formulario de login submetido', this.email, this.password);
    setTimeout(() => {
      this.isSubmiting = false;
    }, 3000);
  }

  setEmail(value: string) {
    this.email = value;
  }

  setPassword(value: string) {
    this.password = value;
  }
}
