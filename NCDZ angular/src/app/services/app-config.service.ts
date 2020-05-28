import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { Compte } from '../classes/compte'

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  public url: string = "http://localhost:8181/api";
  public httpOptions: Object = null;
  public compte: Compte = new Compte;


  constructor() {
  }

  public setCredentials(compte: Compte) {
    
    let headers: HttpHeaders = new HttpHeaders();
    let basicAuth = 'Basic ' + btoa(compte.login +":"+ compte.password);

    headers = headers.append('Authorization', basicAuth);

    this.httpOptions = { headers: headers };

  }
}
