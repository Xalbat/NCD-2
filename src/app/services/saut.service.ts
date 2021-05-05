import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppConfigService } from './app-config.service';
import { Saut } from '../classes/saut';

@Injectable({
  providedIn: 'root'
})
export class SautService {
  private apiUrl: string="";
  public sauts: Array<Saut>=[];

  constructor(
    private appConfig: AppConfigService,
    private http: HttpClient,
    private router: Router) { 
    this.apiUrl = `${ this.appConfig.url}/saut`
  }

  public getSauts() {
    return this.http.get<Array<Saut>>(this.apiUrl, this.appConfig.httpOptions)
  }

  public createSaut(saut) {
    return this.http.post<Saut>(this.apiUrl, saut, this.appConfig.httpOptions);
  }

  public updateSaut(saut) {
    this.http.put<Saut>(this.apiUrl + "/" + saut.idSaut, saut, this.appConfig.httpOptions)
    .subscribe();
  }
}