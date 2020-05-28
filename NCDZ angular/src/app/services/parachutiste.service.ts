import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppConfigService } from './app-config.service';
import { Parachutiste } from '../classes/parachutiste';

@Injectable({
  providedIn: 'root'
})
export class ParachutisteService {

  private apiUrl: string = "";
  public parachutistes: Array<Parachutiste> = null;

  constructor(private appConfig: AppConfigService, private http: HttpClient, rooter: Router) { 
    this.apiUrl=`${this.appConfig.url}/parachutiste`;
  }


  public reload() {
    this.http.get<Array<Parachutiste>>(this.apiUrl)
        .subscribe(parachutistes => this.parachutistes = parachutistes);
  }


  public add(parachutiste) {
    this.http.post<Parachutiste>(this.apiUrl, parachutiste, this.appConfig.httpOptions)
        .subscribe(respParachutiste => this.parachutistes.push(respParachutiste));
  }

  public update(parachutiste) {
    this.http.put<Parachutiste>(`${ this.apiUrl }/${ parachutiste.numeroLicence }`, parachutiste, this.appConfig.httpOptions)
        .subscribe(respParachutiste => {
          let index = this.parachutistes.indexOf(this.parachutistes.find(p => p.numeroLicence == parachutiste.numeroLicence));
          this.parachutistes.splice(index, 1, respParachutiste);
        });
  }

  public delete(parachutiste) {
    this.http.delete<Parachutiste>(`${ this.apiUrl }/${ parachutiste.numeroLicence }`, this.appConfig.httpOptions)
        .subscribe(resp => {
          if (resp) {
            let index = this.parachutistes.indexOf(parachutiste);
            this.parachutistes.splice(index, 1);
          }
        });
  }


}
