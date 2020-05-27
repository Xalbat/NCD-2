import { Component, OnInit } from '@angular/core';

import { Avion } from '../classes/avion';
import { Parachutiste } from '../classes/parachutiste';
import { Vol } from '../classes/vol';
import { AvionService } from '../services/avion.service';
import { VolService } from '../services/vol.service';
import { ParachutisteService } from '../services/parachutiste.service';

@Component({
  selector: 'composer-avion',
  templateUrl: './composer-avion.component.html',
  styleUrls: ['./composer-avion.component.css']
})
export class ComposerAvionComponent implements OnInit {


  public avion : Avion = null;
  public vol: Vol=null;
  avionsDisponibles : Array<Avion> = [];
  volsDisponibles : Array<Vol> = [];
  choixAvion = false;
  choixVol = false;
  indexAvion=0;
  indexVol=0;
  listeAttente: Array<Parachutiste> = [];
  listeSautDemandés: Array<Parachutiste> = [];
  respoSol: Parachutiste=null;
  respoVol: Parachutiste=null;

  constructor(public srvAvion:AvionService, public srvVol: VolService, public srvParachutiste: ParachutisteService) { }

  ngOnInit(): void {
    this.ListeAvions()
    this.ListesVols()
    this.ListesPara()
  }

  ListeAvions() {this.srvAvion.getAvions()}

  ListesVols() {this.srvVol.getVol()}

  ListesPara() {this.srvParachutiste.reload()}

  affichageAvion(id) {
    this.choixAvion=(!this.choixAvion);
    this.choixAvion 
        ? this.avion = this.srvAvion.avions.find(a => a.idAvion == id)
        : this.avion = null;

  }

  affichageVol(id) {
    this.choixVol=(!this.choixVol);
    this.choixVol 
        ? this.vol = this.srvVol.vols.find(v => v.idVol == id) 
        : this.vol = null;
  }

    
  attributionVolAvion() {
    if (this.avion==null) {alert('Choissiez un avion !')}
    else if (this.vol==null) {alert('Choissiez un vol !')}
    else 
    {
      this.avion.vol=this.vol;
      this.srvAvion.updateAvion(this.avion);
      this.ListeAvions();
    }
  }

  attributionRespoSol() {
    if (this.vol==null || this.respoSol==null) {alert('Choisissez un vol et un respo Sol')} 
    else {
      this.vol.respoSol=this.respoSol;
      this.srvVol.updateVol(this.vol);
      this.ListesVols();
    }
  }

  attributionRespoVol() {
    if (this.vol==null || this.respoVol==null) {alert('Choisissez un vol et un respo Vol')} 
    else {
      this.vol.respoVol=this.respoVol;
      this.srvVol.updateVol(this.vol);
      this.ListesVols();
    }
  }

  instructeur() {
    return this.srvParachutiste.parachutistes.filter(p => p.niveau == 'INSTRUCTEUR')
  }

  
}
