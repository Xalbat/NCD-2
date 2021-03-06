import { Component, OnInit } from '@angular/core';

import { CompteService } from '../services/compte.service';
import { Compte } from '../classes/compte';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  
  public compte: Compte = new Compte("", 0, "", "");

  constructor(public cpmtSrv: CompteService) { }


  ngOnInit(): void {
  }

  public seConnecter() {
      this.cpmtSrv.seConnecter(this.compte); 
  }

  public seDeconnecter() {
    this.cpmtSrv.appConfig.compte = new Compte; 
}



}
