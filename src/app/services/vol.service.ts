import { Injectable } from '@angular/core';
import { Vol } from '../classes/vol';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VolService {
  private apiUrl: string="";


  constructor(private appConfig: AppConfigService, 
              private http: HttpClient, 
              private router: Router) { 
    this.apiUrl = `${ this.appConfig.url}/vol`
  }

  public getVol() {
    return this.http.get<Array<Vol>>(this.apiUrl,this.appConfig.httpOptions)
  }

  public addVol(vol: Vol) {
    this.http.post<Vol>(this.apiUrl, vol,this.appConfig.httpOptions)
    .subscribe();
  }

  public updateVol(vol: Vol) {
    this.http.put<Vol>(this.apiUrl + "/" + vol.idVol, vol,this.appConfig.httpOptions)
    .subscribe();
  }
}
