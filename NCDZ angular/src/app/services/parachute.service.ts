import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from './app-config.service';
import { Router } from '@angular/router';
import { Parachute } from '../classes/parachute';

@Injectable({
  providedIn: 'root'
})
export class ParachuteService {
  private apiUrl: string = "";
  public parachutes: Array<Parachute> = null;

  constructor(private appConfig: AppConfigService, private http: HttpClient, rooter: Router) {
    this.apiUrl=`${this.appConfig.url}/parachute`;
   }


  public reload() {
    this.http.get<Array<Parachute>>(this.apiUrl)
        .subscribe(parachutes => this.parachutes = parachutes);
  }

  public add(parachute) {
    this.http.post<Parachute>(this.apiUrl, parachute)
        .subscribe(respParachute => this.parachutes.push(respParachute));
  }

  public update(parachute) {
    this.http.put<Parachute>(`${ this.apiUrl }/${ parachute.id }`, parachute)
        .subscribe(respParachute => {
          let index = this.parachutes.indexOf(this.parachutes.find(p => p.idParachute == parachute.id));
          this.parachutes.splice(index, 1, respParachute);
        });
  }

  public delete(parachute) {
    this.http.delete<Parachute>(`${ this.apiUrl }/${ parachute.id }`)
        .subscribe(resp => {
          if (resp) {
            let index = this.parachutes.indexOf(parachute);
            this.parachutes.splice(index, 1);
          }
        });
  }

}


