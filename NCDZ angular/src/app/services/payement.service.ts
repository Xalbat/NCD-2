import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppConfigService } from './app-config.service';
import { Payement } from '../classes/payement';

@Injectable({
  providedIn: 'root'
})
export class PayementService {

  private apiUrl: string = "";
  public payements: Array<Payement> = null;

  constructor(
    private appConfigSrv: AppConfigService, 
    private http: HttpClient, 
    rooter: Router) { 
      this.apiUrl=`${this.appConfigSrv.url}/payement`;
    }




    public reload() {
      this.http.get<Array<Payement>>(this.apiUrl)
          .subscribe(t => this.payements = t);
    }
  
  
    public add(payement) {
      this.http.post<Payement>(this.apiUrl, payement, this.appConfigSrv.httpOptions)
          .subscribe(resp => this.payements.push(resp));
    }
  
    public update(payement) {
      this.http.put<Payement>(`${ this.apiUrl }/${ payement.id }`, payement)
          .subscribe(resp => {
            let index = this.payements.indexOf(this.payements.find(p => p.id == payement.id));
            this.payements.splice(index, 1, resp);
          });
    }
  
    public delete(payement) {
      this.http.delete<Payement>(`${ this.apiUrl }/${ payement.id }`)
          .subscribe(resp => {
            if (resp) {
              let index = this.payements.indexOf(payement);
              this.payements.splice(index, 1);
            }
          });
    }




}
