import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';




const routes: Routes = [

  { path: 'inscription', component: InscriptionComponent },
];





@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
