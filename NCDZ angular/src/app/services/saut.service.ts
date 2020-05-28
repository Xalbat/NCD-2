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

  constructor(private appConfig: AppConfigService, private http: HttpClient, private router: Router) { 
    this.apiUrl = `${ this.appConfig.url}/saut`
  }

  public loadCurrentSauts() {
    this.http.get<Array<Saut>>(this.apiUrl)
    .subscribe(sauts => this.sauts = sauts);
  }

  public createSaut(saut) {
    this.http.post<Saut>(this.apiUrl, saut)
    .subscribe(respSaut => this.sauts.push(respSaut));
  }

  public updateSaut(saut) {
    this.http.put<Saut>(this.apiUrl + "/" + saut.idSaut, saut)
    .subscribe();
  }

}
