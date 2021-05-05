import { Component, OnInit } from '@angular/core';

import { SautService } from '../services/saut.service';
import { ParachutisteService } from '../services/parachutiste.service';
import { Saut } from '../classes/saut';
import { Parachutiste } from '../classes/parachutiste';
import { Avion } from '../classes/avion';
import { Vol } from '../classes/vol';
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
  public instructeur: Parachutiste = new Parachutiste();
  public videaste: Parachutiste = new Parachutiste();
  public listeParachutistes: Array<Parachutiste> = new Array<Parachutiste>();


  public sauts: Array<Saut>;
  
  public avion : Avion = null;
  public vol: Vol=null;
  vols : Array<Vol> = []
  avions : Array<Avion> = [];
  volsDisponibles : Array<Vol> = [];
  choixVol = false;
  indexVol=0;


  constructor(
    public srvParachutiste: ParachutisteService,
    public srvSaut: SautService,
    public srvVol: VolService) { }

  ngOnInit(): void 
  {
    this.saut.altitude = 1200;
    this.saut.tandem = false;
    this.saut.isVideo = false;

    this.listeSauts();
    this.listeDeParachutistes();
    this.listesVols();
  }


listesVols() {
  this.srvVol.getVols()
  .subscribe(vols => this.vols = vols)
}

listeSauts() {
  this.srvSaut.getSauts()
  .subscribe(sauts => this.sauts=sauts)
}

listeDeParachutistes() {
  this.srvParachutiste.getParachutistes()
  .subscribe(parachutistes => this.parachutistes=parachutistes)
}

affichageVol(id) {
  this.choixVol=(!this.choixVol);
  this.choixVol 
      ? this.vol = this.vols.find(v => v.idVol == id) 
      : this.vol = null;
}

  public ajouterSautGroup() 
  {
    this.saut.listParachutiste = this.listeParachutistes;
    this.srvSaut.createSaut(this.saut)
      .toPromise()
      .then(respSaut => this.sauts.push(respSaut))
      .then(() => this.listeDeParachutistes());
    this.saut = new Saut();
    this.saut.altitude = 1200;
    this.saut.tandem = false;
    this.saut.isVideo = false;
    this.parachutiste = new Parachutiste();
    this.listeParachutistes = new Array<Parachutiste>();
    this.listeDeParachutistes();
  }

  public ajouterSautSolo() 
  {
    this.parachutistes.push(this.parachutiste)
    if (this.videaste.numeroLicence >= 0) {this.parachutistes.push(this.videaste);}
    this.saut.listParachutiste = this.parachutistes;
    console.log(this.saut)
    this.srvSaut.createSaut(this.saut);
    this.saut = new Saut();
    this.saut.altitude = 1200;
    this.saut.tandem = false;
    this.saut.isVideo = false;
    this.parachutiste = new Parachutiste();
    this.videaste = new Parachutiste();
    this.parachutistes = new Array<Parachutiste>();
    this.listeDeParachutistes();
  }

  public ajouterParachutiste() 
  {
    if (this.parachutiste.numeroLicence>=0)
    {
      const index = this.parachutistes.indexOf(this.parachutiste);
      this.parachutistes.splice(index, 1);

      this.listeParachutistes.push(this.parachutiste)
      this.parachutiste = new Parachutiste();
    } 
  }

  public supprimerParachutiste(parachutiste) 
  {
    this.parachutistes.push(parachutiste);
    const index = this.listeParachutistes.indexOf(parachutiste);
    this.listeParachutistes.splice(index, 1);
  }

  public changeIsGroup(boolean) 
  {
    this.isGroup = boolean;
    this.saut.tandem = false;
    this.parachutiste = new Parachutiste();
    this.instructeur = new Parachutiste();
    this.parachutistes = new Array<Parachutiste>();
    this.listeDeParachutistes();
  }

  public changeIsVideo(boolean) 
  {
    this.saut.isVideo = boolean;
  }

  public instructeurs()
  {
    return this.parachutistes.filter(p => p.niveau.toString() == 'INSTRUCTEUR')
  }

  public videastes()
  {
    return this.parachutistes.filter(p => p.niveau.toString() == 'VIDEASTE' || p.niveau.toString() == 'INSTRUCTEUR')
  }

  public confirmes()
  {
    return this.parachutistes.filter(p => p.niveau.toString() != 'ELEVE')
  }

  public parachutistesAttente(saut)
  {
    if (saut.vol == null)
    {
      return saut.listParachutiste;
    }
  }

}


