import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/index.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/index.component';
import { TextComponent } from './text/index.component';
import { CardComponent } from './card/index.component';
import { SelectComponent } from './select/index.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    ButtonComponent,
    InputComponent,
    TextComponent,
    CardComponent,
    SelectComponent,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    TextComponent,
    CardComponent,
    SelectComponent,
  ],
})
export class AtomsModule {}
