import { Component, OnInit } from '@angular/core';
import { Parachutiste } from '../parachutiste';
import { CompteService } from '../compte.service';
import { Compte } from '../compte';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  public formInscription: Compte = new Compte();
  constructor(private srvCompte: CompteService) { }

  ngOnInit(){
    this.srvCompte.reload();
  }
  public inscription() {
    this.srvCompte.ajouterParachutiste(this.formInscription);
    this.formInscription = new Compte();
  }
}
