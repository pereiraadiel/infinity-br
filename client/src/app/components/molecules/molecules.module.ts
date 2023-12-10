import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AtomsModule } from '../atoms/atoms.module';
import { LoginFormComponent } from './loginForm/index.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AtomsModule],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
})
export class MoleculesModule {}
