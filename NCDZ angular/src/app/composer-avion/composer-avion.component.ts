import { Component, OnInit } from '@angular/core';

import { Avion } from '../classes/avion';
import { Parachutiste } from '../classes/parachutiste';
import { Vol } from '../classes/vol';
import { AvionService } from '../services/avion.service';
import { VolService } from '../services/vol.service';
import { ParachutisteService } from '../services/parachutiste.service';
import { SautService } from '../services/saut.service';
import { Saut } from '../classes/saut';

@Component({
  selector: 'composer-avion',
  templateUrl: './composer-avion.component.html',
  styleUrls: ['./composer-avion.component.css']
})
export class ComposerAvionComponent implements OnInit {

  public avion : Avion = null;
  public vol: Vol=null;

  public sauts: Array<Saut> = []
  public avions : Array<Avion> = [];
  public vols : Array<Vol> = [];
  
  choixAvion = false;
  choixVol = false;
  indexAvion=0;
  indexVol=0;
  listeAttente: Array<Parachutiste> = [];
  listeSautDemandés: Array<Parachutiste> = [];
  respoSol: Parachutiste=null;
  respoVol: Parachutiste=null;
  capacite=0;

  constructor(public srvAvion:AvionService, 
              public srvVol: VolService, 
              public srvParachutiste: ParachutisteService,
              public srvSaut: SautService) { }

  ngOnInit(): void {
    this.listeAvions();
    this.listesVols();
    this.listesPara();
    this.listeSauts();
  }

  listeAvions() {this.srvAvion.getAvions() ; setTimeout(() => this.avions=this.srvAvion.avions,200)}

  listesVols() {this.srvVol.getVol() ; setTimeout(() => this.vols=this.srvVol.vols,200)}

  listesPara() {this.srvParachutiste.reload()}

  listeSauts() {this.srvSaut.loadCurrentSauts() ; setTimeout(() => this.sauts=this.srvSaut.sauts,200)}

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
  
  ajouterSaut(saut) {
    saut.vol=this.vol;
    this.srvSaut.updateSaut(saut);
  }

  supprimerSaut(saut) {
    
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
    return this.srvParachutiste.parachutistes.filter(p => p.niveau != "ELEVE")
  }

  
}
