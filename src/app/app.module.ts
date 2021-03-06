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
import { AdministrationAvionComponent } from './administration-avion/administration-avion.component';
import { AdministrationAvionRowComponent } from './administration-avion-row/administration-avion-row.component';
import { AdministrationAvionFormulaireComponent } from './administration-avion-formulaire/administration-avion-formulaire.component';
import { ConnectionComponent } from './connection/connection.component';
import { PayementComponent } from './payement/payement.component';

const routes: Routes = [
  { path: 'avionnage', component: AvionnageComponent },
  { path: 'connect', component: ConnectionComponent },
  { path: 'parachute', component: ParachuteComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'payement', component: PayementComponent },
  { path: 'administration-avion', component: AdministrationAvionComponent },
  { path: 'composer-avion', component: ComposerAvionComponent },
  { path: 'composer-vol', component: ComposerVolComponent },
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
    ParachuteComponent,
    AdministrationAvionComponent,
    AdministrationAvionRowComponent,
    ConnectionComponent,
    PayementComponent,
    AdministrationAvionFormulaireComponent,
    ConnectionComponent
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
