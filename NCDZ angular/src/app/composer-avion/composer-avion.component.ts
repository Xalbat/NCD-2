import { Component, OnInit } from '@angular/core';

import { Avion } from '../classes/avion';
import { Parachutiste } from '../classes/parachutiste';
import { Vol } from '../classes/vol';
import { AvionService } from '../services/avion.service';
import { VolService } from '../services/vol.service';
import { ParachutisteService } from '../services/parachutiste.service';
import { Niveau } from '../enums/niveau.enum';

@Component({
  selector: 'composer-avion',
  templateUrl: './composer-avion.component.html',
  styleUrls: ['./composer-avion.component.css']
})
export class ComposerAvionComponent implements OnInit {


  public avion : Avion = null;
  public vol: Vol=null;
  avions : Array<Avion> = [];
  vols : Array<Vol> = [];
  choixAvion = false;
  choixVol = false;
  indexAvion=0;
  indexVol=0;
  listeAttente: Array<Parachutiste> = [];
  listeSautDemandés: Array<Parachutiste> = [];
  respoSol: Parachutiste=null;
  respoVol: Parachutiste=null;

  constructor(
    public srvAvion:AvionService, 
    public srvVol: VolService, 
    public srvParachutiste: ParachutisteService) { }

  ngOnInit(): void {
    this.listeAvions();
    this.listesVols();
    this.listesPara();
  }

  listeAvions() {this.srvAvion.getAvions();setTimeout(() => this.avions=this.srvAvion.avions,500)}

  listesVols() {this.srvVol.getVol();setTimeout(() => this.vols=this.srvVol.vols,500)}

  listesPara() {this.srvParachutiste.reload()}

  affichageAvion(id) {
    this.choixAvion=(!this.choixAvion);
    this.choixAvion 
        ? this.avion = this.srvAvion.avions.find(a => a.idAvion == id)
        : this.avion = null;

  }

  affichageVol(id) {
    if (this.choixVol && this.vols.find(v => v.idVol == id).idVol==this.vol?.idVol) {
      this.choixVol=false;
      this.vol=null;
    }
    else {
      this.choixVol=true;
      this.vol = this.srvVol.vols.find(v => v.idVol == id);
    }
  }

  retirerSaut(s){
    this.vol.listSaut.splice(s,1)
  }
    
  attributionVolAvion() {
    if (this.avion==null) {alert('Choissiez un avion !')}
    else if (this.vol==null) {alert('Choissiez un vol !')}
    else 
    {
      this.avion.vol=this.vol;
      for (let i=0; i<this.avions.length; i++)
      {
        if (this.avions[i].idAvion==this.avion.idAvion) {this.avions[i]=this.avion;break}
      }
      
      this.srvAvion.updateAvion(this.avion);
      this.choixAvion=false;
      this.avion=null;
      this.choixVol=false;
      this.vol=null;
    }
  }

  attributionRespoSol() {
    if (this.vol==null || this.respoSol==null) {alert('Choisissez un vol et un respo Sol')}
    else {
      let test= false;
      for (let v of this.vols)
      {
        if (this.respoSol.numeroLicence==v.respoVol?.numeroLicence) {test=true}
      }
      if (test) {alert('Ce respo Sol est déjà respoVol')}
      else
      {
        this.vol.respoSol=this.respoSol;
        for (let i=0; i<this.vols.length; i++)
        {
          if (this.vols[i].idVol==this.vol.idVol) {this.vols[i]=this.vol;break}
        }
        this.srvVol.updateVol(this.vol);
      }
    }
  }

  attributionRespoVol() {
    if (this.vol==null || this.respoVol==null) {alert('Choisissez un vol et un respo Vol')} 
    else {
      let test=false;
      for (let v of this.vols)
      {
        if (this.respoVol.numeroLicence==v.respoVol?.numeroLicence || this.respoVol.numeroLicence==v.respoSol?.numeroLicence) {test=true}
      }
      if (test) {alert('Ce respo Vol est déjà respo')}
      else {
        this.vol.respoVol=this.respoVol;
        for (let i=0; i<this.vols.length; i++)
        {
          if (this.vols[i].idVol==this.vol.idVol) {this.vols[i]=this.vol;break}
        }
        this.srvVol.updateVol(this.vol);
      }
    }
  }

  instructeur() {
    return this.srvParachutiste.parachutistes.filter(p => p.niveau == Niveau.INSTRUCTEUR)
  }

  
}
