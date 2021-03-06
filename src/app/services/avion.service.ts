import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppConfigService } from './app-config.service';
import { Avion } from '../classes/avion';

@Injectable({
  providedIn: 'root'
})
export class AvionService {
  private apiUrl: string="";
  public avions: Array<Avion>;

  constructor(private appConfig: AppConfigService, 
              private http: HttpClient, 
              private router: Router) { 
    this.apiUrl = `${ this.appConfig.url}/avion`
  }

  public getAvions() {
    this.http.get<Array<Avion>>(this.apiUrl, this.appConfig.httpOptions)
    .subscribe(avions => this.avions = avions);
  }

  public addAvion(avion: Avion) {
    this.http.post<Avion>(this.apiUrl, avion,this.appConfig.httpOptions)
    .subscribe();
  }

  public updateAvion(avion: Avion) {
    this.http.put<Avion>(this.apiUrl + "/" + avion.idAvion, avion,this.appConfig.httpOptions)
    .subscribe();
  }

  public deleteAvion(avion : Avion){
    this.http.delete(this.apiUrl+'/'+avion.idAvion+'/supp',this.appConfig.httpOptions).subscribe()
  }

}
