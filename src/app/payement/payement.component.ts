import { Component, OnInit } from '@angular/core';
import { Payement } from '../classes/payement';
import { PayementService } from '../services/payement.service';
import { MoyenPayement } from '../enums/moyenPayement.enum';
import { ParachutisteService } from '../services/parachutiste.service';
import { Parachutiste } from '../classes/parachutiste';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {

  public payement: Payement = new Payement();

  public payements: Array<Payement> = []
  public parachutistes: Array<Parachutiste> = []

  constructor(public srvPayement: PayementService,
    public srvParachutiste: ParachutisteService) {
   }

  ngOnInit() {
    this.listePayements();
    this.listeParachutiste();
  }

  private listePayements() {
    this.srvPayement.getPayement()
    .subscribe(payements => this.payements=payements);
  }

  private listeParachutiste() {
    this.srvParachutiste.getParachutistes()
    .subscribe(parachutistes => this.parachutistes=parachutistes)
  }

  etatsPossibles() {
    return Object.keys(MoyenPayement);
  }

  ajouterPayement() {
    if (this.payement.parachutiste==undefined) { alert("Veuillez sélectionner un parachutiste") }
    else if (this.payement.moyenPayement==null) { alert("Veuillez sélectionner un moyen de payement") }
    else if (this.payement.valeur==null) { alert("Veuillez sélectionner un montant") }
    else if (this.payement.date==null) { alert("Veuillez sélectionner une date") }
    else {
      if (this.payement.moyenPayement == MoyenPayement.REMBOURSEMENT) {this.payement.valeur = - this.payement.valeur;}
      this.srvPayement.add(this.payement)
      .toPromise()
      .then(() => this.listePayements() );
      this.payement = new Payement;
    }
  }
}
