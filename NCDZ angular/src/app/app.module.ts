import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ComposerVolComponent } from './composer-vol/composer-vol.component';
import { ComposerAvionComponent } from './composer-avion/composer-avion.component';



@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ComposerVolComponent,
    ComposerAvionComponent
  ],
  imports: [
    FormsModule,BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
