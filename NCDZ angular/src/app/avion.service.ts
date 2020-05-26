import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Avion } from './avion';

@Injectable({
  providedIn: 'root'
})
export class AvionService {
  private apiUrl: string="";
  public avions: Array<Avion>=[];

  constructor(private appConfig: AppConfigService, private http: HttpClient, private router: Router) { 
    this.apiUrl = `${ this.appConfig.url}/avion`
  }

  public loadCurrentAvions() {
    this.http.get<Array<Avion>>(this.apiUrl)
    .subscribe(avions => this.avions = avions);
  }

  public createMatch(saut) {
    this.http.post<Saut>(this.apiUrl, saut)
    .subscribe();
  }
}
