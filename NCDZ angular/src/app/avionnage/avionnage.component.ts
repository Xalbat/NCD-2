import { Component, OnInit } from '@angular/core';

import { SautService } from '../services/saut.service';
import { ParachutisteService } from '../services/parachutiste.service';
import { Saut } from '../classes/saut';
import { Parachutiste } from '../classes/parachutiste';
import { Avion } from '../classes/avion';
import { Vol } from '../classes/vol';
import { AvionService } from '../services/avion.service';
import { VolService } from '../services/vol.service';
import { Niveau } from '../enums/niveau.enum';


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
  public videaste: Parachutiste = new Parachutiste();
  public listeParachutistes: Array<Parachutiste> = new Array<Parachutiste>();

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
    this.listeParachutistes = this.srvParachutiste.parachutistes;
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
    this.listeParachutistes = new Array<Parachutiste>();
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

  public ajouterSautTandem() 
  {
    this.saut.tandem = true;
    this.parachutistes.push(this.parachutiste);
    this.parachutistes.push(this.instructeur);
    if (this.videaste.numeroLicence >= 0) {this.parachutistes.push(this.videaste);}
    this.saut.listParachutiste = this.parachutistes;
    console.log(this.saut)
    this.srvSaut.createSaut(this.saut);
    this.saut = new Saut();
    this.parachutiste = new Parachutiste();
    this.instructeur = new Parachutiste();
    this.videaste = new Parachutiste();
    this.parachutistes = new Array<Parachutiste>();
  }

  public ajouterParachutiste() 
  {
    if (this.parachutiste.numeroLicence>=0)
    {
      const index = this.listeParachutistes.indexOf(this.parachutiste);
      this.listeParachutistes.splice(index, 1);

      this.parachutistes.push(this.parachutiste)
      this.parachutiste = new Parachutiste();
    } 
  }

  public supprimerParachutiste(parachutiste) 
  {
    this.listeParachutistes.push(parachutiste);
    const index = this.parachutistes.indexOf(parachutiste);
    this.parachutistes.splice(index, 1);
  }

  public changeIsGroup(boolean) 
  {
    this.isGroup = boolean;
    this.isTandem = false;
    this.saut.tandem = false;
    this.parachutiste = new Parachutiste();
    this.instructeur = new Parachutiste();
    this.parachutistes = new Array<Parachutiste>();
    this.listeParachutistes = this.srvParachutiste.parachutistes;
  }

  public changeIsTandem(boolean) 
  {
    this.isGroup = false;
    this.isTandem = boolean;
    this.parachutiste = new Parachutiste();
    this.instructeur = new Parachutiste();
    this.parachutistes = new Array<Parachutiste>();
    this.listeParachutistes = this.srvParachutiste.parachutistes;
  }

  public instructeurs()
  {
    //console.log(this.listeParachutistes);
    //return this.srvParachutiste.parachutistes.filter(p => p.niveau.toString() == 'INSTRUCTEUR')
    return this.listeParachutistes.filter(p => p.niveau.toString() == 'INSTRUCTEUR')
  }

  public videastes()
  {
    return this.listeParachutistes.filter(p => p.niveau.toString() == 'VIDEASTE' || p.niveau.toString() == 'INSTRUCTEUR')
  }

  public confirmes()
  {
    console.log(this.listeParachutistes);
    //console.log(this.listeParachutistes.filter(p => p.niveau.toString() != 'ELEVE'));
    return this.srvParachutiste.parachutistes.filter(p => p.niveau.toString() != 'ELEVE')
  }

  public parachutistesAttente(saut)
  {
    if (saut.vol == null)
    {
      return saut.listParachutiste;
    }
  }

}


