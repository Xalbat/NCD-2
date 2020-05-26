import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Avion } from './avion';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  apiUrl="http://localhost:8181/api/avion"
  avions: Array<Avion>;

  constructor(private http: HttpClient, private router: Router) { 
  }

  public getAvions() {
    this.http.get<Array<Avion>>(this.apiUrl)
    .subscribe(avions => this.avions = avions);
  }

  public addAvion(avion: Avion) {
    this.http.post<Avion>(this.apiUrl, avion)
    .subscribe();
  }

  public updateAvion(avion: Avion) {
    this.http.put<Avion>(this.apiUrl + "/" + avion.id, avion)
    .subscribe();
  }

}