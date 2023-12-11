import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AtomsModule } from '../atoms/atoms.module';
import { LoginFormComponent } from './loginForm/index.component';
import { ShippingFormComponent } from './shippingForm/index.component';
import { ListComponent } from './list/index.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AtomsModule],
  declarations: [LoginFormComponent, ShippingFormComponent, ListComponent],
  exports: [LoginFormComponent, ShippingFormComponent, ListComponent],
})
export class MoleculesModule {}
