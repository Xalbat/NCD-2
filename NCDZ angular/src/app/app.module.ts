import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ComposerVolComponent } from './composer-vol/composer-vol.component';


@NgModule({
  declarations: [
    AppComponent,
    NgModule,
    InscriptionComponent,
    ComposerVolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
