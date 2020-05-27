import { Component, OnInit } from '@angular/core';

import { CompteService } from '../services/compte.service';
import { Compte } from '../classes/compte';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  
  public compte: Compte;

  constructor(public CpmtSrv: CompteService) { }


  ngOnInit(): void {
  }

  public seConnecter(compte: Compte) {
    this.compte = compte;
    let b: boolean = this.CpmtSrv.getCompteByUsername(compte);
    if (b == false) {
      this.compte = null;
    }
  }





}
