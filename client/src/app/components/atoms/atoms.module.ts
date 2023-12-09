import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/index.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/index.component';
import { TextComponent } from './text/index.component';
import { CardComponent } from './card/index.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ButtonComponent, InputComponent, TextComponent, CardComponent],
  exports: [ButtonComponent, InputComponent, TextComponent, CardComponent],
})
export class AtomsModule {}
