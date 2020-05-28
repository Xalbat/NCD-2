import { Injectable } from '@angular/core';
import { Pilote } from '../classes/pilote';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PiloteService {
  private apiUrl: string="";
  public pilotes: Array<Pilote>;

  constructor(private appConfig: AppConfigService, 
              private http: HttpClient, 
              private router: Router) { 
    this.apiUrl = `${ this.appConfig.url}/pilote`
  }

  public getPilote() {
    this.http.get<Array<Pilote>>(this.apiUrl)
    .subscribe(pilotes => this.pilotes =pilotes);
  }

  public addPilote(pilote: Pilote) {
    this.http.post<Pilote>(this.apiUrl, Pilote)
    .subscribe();
  }

  public updatePilote(pilote: Pilote) {
    this.http.put<Pilote>(this.apiUrl + "/" + pilote.licence, pilote)
    .subscribe();
  }

}