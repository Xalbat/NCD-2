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
  public vols: Array<Vol>;

  constructor(private appConfig: AppConfigService, 
              private http: HttpClient, 
              private router: Router) { 
    this.apiUrl = `${ this.appConfig.url}/vol`
  }

  public getVol() {
    this.http.get<Array<Vol>>(this.apiUrl)
    .subscribe(Vol => this.vols =Vol);
  }

  public addVol(vol: Vol) {
    this.http.post<Vol>(this.apiUrl, vol)
    .subscribe();
  }

  public updateVol(vol: Vol) {
    this.http.put<Vol>(this.apiUrl + "/" + vol.idVol, Vol)
    .subscribe();
  }
}
