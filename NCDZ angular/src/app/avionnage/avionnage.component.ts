import { Component, OnInit } from '@angular/core';

import { SautService } from '../services/saut.service';
import { ParachutisteService } from '../services/parachutiste.service';
import { Saut } from '../classes/saut';
import { Parachutiste } from '../classes/parachutiste';
import { Avion } from '../classes/avion';
import { Vol } from '../classes/vol';
import { AvionService } from '../services/avion.service';
import { VolService } from '../services/vol.service';


@Component({
  selector: 'app-avionnage',
  templateUrl: './avionnage.component.html',
  styleUrls: ['./avionnage.component.css']
})
export class AvionnageComponent implements OnInit {
  public saut: Saut = new Saut();
  public parachutiste: Parachutiste = new Parachutiste();
  public parachutistes: Array<Parachutiste> = new Array<Parachutiste>();
  public isGroup: Boolean = false;
  public isTandem: Boolean = false;
  public sauts: Array<Saut>;
  public instructeur: Parachutiste = new Parachutiste();

  public avion : Avion = null;
  public vol: Vol=null;
  avions : Array<Avion> = [];
  volsDisponibles : Array<Vol> = [];
  choixVol = false;
  indexVol=0;


  constructor( public srvSaut: SautService, public srvParachutiste: ParachutisteService,
              public srvAvion:AvionService, public srvVol: VolService) { }

  ngOnInit(): void 
  {
    this.saut.altitude = 1200;
    this.saut.tandem = false;
    this.srvSaut.loadCurrentSauts(); 
    this.srvParachutiste.reload();
    this.srvVol.getVol();
    console.log(this.srvSaut.sauts)
  }


listesVols() {this.srvVol.getVol()}

affichageVol(id) {
  this.choixVol=(!this.choixVol);
  this.choixVol 
      ? this.vol = this.srvVol.vols.find(v => v.idVol == id) 
      : this.vol = null;
  console.log(this.srvAvion.avions)
}

  public ajouterSautGroup() 
  {
    this.saut.listParachutiste = this.parachutistes;
    this.srvSaut.createSaut(this.saut);
    this.saut = new Saut();
    this.parachutiste = new Parachutiste();
    this.parachutistes = new Array<Parachutiste>();
  }

  public ajouterSautSolo() 
  {
    this.parachutistes.push(this.parachutiste)
    this.saut.listParachutiste = this.parachutistes;
    console.log(this.saut)
    this.srvSaut.createSaut(this.saut);
    this.saut = new Saut();
    this.parachutiste = new Parachutiste();
    this.parachutistes = new Array<Parachutiste>();
  }

  public ajouterParachutiste() 
  {
    if (this.parachutiste.numeroLicence>=0)
    {
      this.parachutistes.push(this.parachutiste)
      this.parachutiste = new Parachutiste();
    } 
  }

  public supprimerParachutiste(parachutiste) 
  {
    const index = this.parachutistes.indexOf(parachutiste);
    this.parachutistes.splice(index, 1);
  }

  public changeIsGroup(boolean) 
  {
    this.isGroup = boolean;
    this.isTandem = false;
    this.saut.tandem = false;
  }

  public changeIsTandem(boolean) 
  {
    this.isGroup = false;
    this.isTandem = boolean;
    this.saut.tandem = boolean;
  }
}

