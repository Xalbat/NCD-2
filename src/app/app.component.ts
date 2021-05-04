import { Component } from '@angular/core';
import { Compte } from './classes/compte';
import { ConnectionComponent } from './connection/connection.component';
import { AppConfigService } from './services/app-config.service';
import { CompteService } from './services/compte.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NCDZ';

  constructor(public srvAppConfig: AppConfigService) {}

  public seDeconnecter() {
    this.srvAppConfig.compte = new Compte; 
  }
}