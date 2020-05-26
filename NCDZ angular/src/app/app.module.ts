import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AvionnageComponent } from './avionnage/avionnage.component';
import { ComposerVolComponent } from './composer-vol/composer-vol.component';

const routes: Routes = [
  { path: 'avionnage', component: AvionnageComponent },
  { path: '', redirectTo: 'avionnage', pathMatch: 'full' },
  { path: '**', component: AvionnageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    AvionnageComponent
    ComposerVolComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
