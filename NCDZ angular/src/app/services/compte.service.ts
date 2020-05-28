import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { Compte } from '../classes/compte';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class CompteService implements CanActivate {
  private apiUrl: string = "";
  public compte: Compte = new Compte();
  
  constructor(
    private appConfig: AppConfigService, 
    private http: HttpClient, 
    private router: Router) {
      this.apiUrl = `${ this.appConfig.url }/compte`;
    }
    

    
    public seConnecter(compte: Compte) {
    
      this.http.post( this.apiUrl + "/login", compte)
      .subscribe(resp => {
        this.compte = resp;
        this.compte.login = compte.login;
        this.compte.password = compte.password;
        this.appConfig.setCredentials(this.compte);
        this.router.navigate([ '/composer-avion' ]);
      });
    }


    
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.compte && this.compte.idCompte) {
        return true;
      }
      this.router.navigate([ '/avionnage' ]);
    }
    
  }
