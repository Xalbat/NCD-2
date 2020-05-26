import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Parachutiste } from './parachutiste';

@Injectable({
  providedIn: 'root'
})
export class ParachutisteService {

  private apiUrl: string = "";
  public parachutistes: Array<Parachutiste> = null;

  constructor(private appConfig: AppConfigService, private http: HttpClient, rooter: Router) { }


  public reload() {
    this.http.get<Array<Parachutiste>>(this.apiUrl, this.appConfig.httpOptions)
        .subscribe(parachutistes => this.parachutistes = this.parachutistes);
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
    this.http.delete<Boolean>(`${ this.apiUrl }/${ Parachutiste.numeroLicence }`, this.appConfig.httpOptions)
        .subscribe(resp => {
          if (resp) {
            let index = this.parachutistes.indexOf(Parachutiste);
            this.parachutistes.splice(index, 1);
          }
        });
  }


}
