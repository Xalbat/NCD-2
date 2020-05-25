import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AvionnageComponent } from './avionnage/avionnage.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    AvionnageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
