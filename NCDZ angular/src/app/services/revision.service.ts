import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RevisionParachute } from '../classes/revision-parachute';

@Injectable({
  providedIn: 'root'
})
export class RevisionService {
  private apiUrl: string = "";
  public revisions: Array<RevisionParachute> = null;

  constructor(private appConfig: AppConfigService, private http: HttpClient, rooter: Router) {
    this.apiUrl=`${this.appConfig.url}/revision`;
   }

   public reload() {
    this.http.get<Array<RevisionParachute>>(this.apiUrl)
        .subscribe(revisions => this.revisions = revisions);
  }

  public add(revision) {
    this.http.post<RevisionParachute>(this.apiUrl, revision)
        .subscribe(respRevisionParachute => this.revisions.push(respRevisionParachute));
  }


}
