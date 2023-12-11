import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { TemplateComponent } from './app/index.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AtomsModule, MoleculesModule],
  declarations: [TemplateComponent],
  exports: [TemplateComponent],
})
export class TemplatesModule {}
