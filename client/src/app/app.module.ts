import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtomsModule } from './components/atoms/atoms.module';
import { MoleculesModule } from './components/molecules/molecules.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AtomsModule, MoleculesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
