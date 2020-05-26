import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 
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
    BrowserModule, FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
