import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { LoginPageComponent } from './login/index.component';
import { HomePageComponent } from './home/index.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AtomsModule, MoleculesModule],
  declarations: [LoginPageComponent, HomePageComponent],
  exports: [LoginPageComponent, HomePageComponent],
})
export class PagesModule {}
