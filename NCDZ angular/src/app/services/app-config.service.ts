import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  public url: string = "http://localhost:8181/api";
  public myOptions: Object = null;

  constructor() {
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Basic ' + btoa('admin:ad'));
    this.myOptions = { headers: myHeaders };
   }
}
