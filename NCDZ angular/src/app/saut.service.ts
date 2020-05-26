import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Saut } from './saut';

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

}
