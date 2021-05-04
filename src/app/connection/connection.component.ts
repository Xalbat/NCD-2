import { Component, OnInit } from '@angular/core';

import { CompteService } from '../services/compte.service';
import { Compte } from '../classes/compte';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  
  public compte: Compte = new Compte("admin", 0, "admin", "");
  constructor(public srvCompte: CompteService) { }

  ngOnInit(): void {
  }

  public seConnecter() {
      this.srvCompte.seConnecter(this.compte); 
  }
  
}