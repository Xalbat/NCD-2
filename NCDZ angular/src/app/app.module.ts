import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AvionnageComponent } from './avionnage/avionnage.component';
import { ComposerVolComponent } from './composer-vol/composer-vol.component';
import { ComposerAvionComponent } from './composer-avion/composer-avion.component';
import { ParachuteComponent } from './parachute/parachute.component';
import { DatePipe } from '@angular/common';

const routes: Routes = [
  { path: 'avionnage', component: AvionnageComponent },
  { path: 'parachute', component: ParachuteComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'composer-vol', component: ComposerVolComponent },
  { path: 'composer-avion', component: ComposerAvionComponent },
  { path: '', redirectTo: 'avionnage', pathMatch: 'full' },
  { path: '**', component: AvionnageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ComposerAvionComponent,
    AvionnageComponent,
    ComposerVolComponent,
    ParachuteComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
