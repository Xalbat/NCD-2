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

  payement: Payement = new Payement;
  disable: boolean = true;
  parachutistes: Array<Parachutiste> = []

  constructor(public payementSrv: PayementService,
    public parachutisteSrv: ParachutisteService) {
   }

  ngOnInit() {
    this.payementSrv.reload();
    this.listeParachutiste();
  }

  listeParachutiste() {
    this.parachutisteSrv.getParachutistes()
    .subscribe(parachutistes => this.parachutistes=parachutistes)
  }

  etatsPossibles() {
    return Object.keys(MoyenPayement);
  }

  ajouterPayement() {
    if (this.payement.moyenPayement == MoyenPayement.REMBOURSEMENT) {
      this.payement.valeur = -this.payement.valeur;
    }
    this.payementSrv.add(this.payement);
    this.payement = new Payement;
  }
}
