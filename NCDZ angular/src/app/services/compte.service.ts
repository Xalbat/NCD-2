import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Compte } from '../classes/compte';
import { AppConfigService } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private apiUrl: string ="";
  public comptes: Array<Compte> = null;
  constructor(private appConfig: AppConfigService, private http: HttpClient, private router: Router) {}


  public reload() {
    this.http.get<Array<Compte>>(this.apiUrl)
        .subscribe(comptes => this.comptes = this.comptes);
  }

  public ajouterParachutiste(p){
    this.http.post<Compte>(`${this.apiUrl}/inscription`, p)
    .subscribe(respParachutiste => {
      if (respParachutiste == null) {
        alert('Champs invalides')
      }
      else if(respParachutiste !== null){
        this.router.navigate([`/home`]);
      }
    })
  }
}
