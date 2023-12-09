import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/index.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/index.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ButtonComponent, InputComponent],
  exports: [ButtonComponent, InputComponent],
})
export class AtomsModule {}
