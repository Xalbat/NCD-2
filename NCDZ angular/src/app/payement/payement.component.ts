import { Component, OnInit } from '@angular/core';
import { Payement } from '../classes/payement';
import { PayementService } from '../services/payement.service';
import { MoyenPayement } from '../enums/moyenPayement.enum';
import { ParachutisteService } from '../services/parachutiste.service';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {

  payement: Payement = new Payement;
  disable: boolean = true;

  constructor(public payementSrv: PayementService,
    public parachutisteSrv: ParachutisteService) {
   }

  ngOnInit() {
    this.payementSrv.reload();
    this.parachutisteSrv.reload();
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
