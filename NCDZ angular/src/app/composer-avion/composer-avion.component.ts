import { Component, OnInit } from '@angular/core';

import { Avion } from '../classes/avion';
import { Parachutiste } from '../classes/parachutiste';
import { Vol } from '../classes/vol';
import { AvionService } from '../services/avion.service';
import { VolService } from '../services/vol.service';
import { ParachutisteService } from '../services/parachutiste.service';
import { SautService } from '../services/saut.service';
import { Saut } from '../classes/saut';
import { Pilote } from '../classes/pilote';
import { PiloteService } from '../services/pilote.service';
import { EtatAvion } from '../enums/etat-avion.enum';
import { SituationVol } from '../enums/situation-vol.enum';
import { DatePipe } from '@angular/common';

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
  public pilotes: Array<Pilote> = [];

  passagerVol: number;
  
  vueVol=false;
  choixAvion = false;
  choixVol = false;
  choixSaut = true;
  okSaut = false;

  respoSol: Parachutiste=null;
  respoVol: Parachutiste=null;
  pilote: Pilote=null;

  constructor(public srvAvion:AvionService, 
              public srvVol: VolService, 
              public srvParachutiste: ParachutisteService,
              public srvSaut: SautService,
              public srvPilote: PiloteService,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.listeAvions();
    this.listesVols();
    this.listesPara();
    this.listeSauts();
    this.listPilote();
  }

  listeAvions() {this.srvAvion.getAvions() ; setTimeout(() => this.avions=this.srvAvion.avions.filter(a => a.etat.toString==EtatAvion.DISPONIBLE.toString),100)}

  listesVols() {this.srvVol.getVol() ; setTimeout(() => this.vols=this.srvVol.vols,100)}

  listesPara() {this.srvParachutiste.reload()}

  listeSauts() {this.srvSaut.loadCurrentSauts() ; setTimeout(() => this.sauts=this.srvSaut.sauts,100)}

  listPilote() {this.srvPilote.getPilote() ; setTimeout(() => this.pilotes=this.srvPilote.pilotes,100)}


  affichageAvion(id) {
    this.choixAvion=(!this.choixAvion);
    
    this.choixAvion 
      ? this.avion = this.srvAvion.avions.find(a => a.idAvion == id)
      : this.avion = null;

    if (this.vueVol) {this.vueVol=false;}

    if (this.avion.vol!=null)
    {
      this.vueVol=true;
      this.vol=this.vols.find(v => v.idVol == this.avion.vol.idVol);
    }
  }

  affichageVol(id) {
    this.choixVol=(!this.choixVol);
    this.choixSaut=true;
    this.choixVol
        ? this.vol = this.srvVol.vols.find(v => v.idVol == id)
        : this.vol = null;
    this.nombrePassager();
  }

  creationVol() {
    this.vol= new Vol();
    this.vol.date=new Date(this.datePipe.transform(Date.now(),'yyyy-MM-dd'));
    this.vol.avion=new Avion();
    this.srvVol.addVol(this.vol);
    this.vol=null;
    this.listesVols();
  }

  ajouterSaut(saut) {
    this.vol.situationVol=SituationVol.EN_PREPARATION;
    saut.vol=this.vol;
    this.srvSaut.updateSaut(saut);
    this.nombrePassager();
  }

  supprimerSaut(saut) {
    saut.vol=null;
    this.srvSaut.updateSaut(saut);
    this.nombrePassager();
  }

  retirerSaut(s){
    this.vol.listSaut.splice(s,1)
  }

  nombrePassager() {
    this.passagerVol=0;
    for (let s of this.sauts)
    {
      if (s.vol?.idVol==this.vol?.idVol)
      {
        this.passagerVol=this.passagerVol+s.listParachutiste.length;
      }
    }
  }

  validerSaut() {
    if (this.passagerVol>this.avion.capacite)
    {
      alert("Le vol a trop de passger pour l'avion")
    }
    else 
    {
      this.choixSaut=false;
      this.respoSol=null;
      this.respoVol=null;
    }
  }

  ListeInstructeurLibre() {
    return this.srvParachutiste.parachutistes.filter(p => p.niveau.toString() != "ELEVE" && p.listSaut.length==0)
  }

  ListeParachutiste() {
    let list: Array<Parachutiste>=[];
    for (let s of this.vol.listSaut)
    {
      for (let p of s.listParachutiste)
      {
        if (p.niveau!="ELEVE") {list.push(p);}
      }
    }
    return list;
  }

  listePiloteLibre() {
    let list: Array<Pilote>=[];
    let test: boolean;
    for (let p of this.pilotes)
    {
      test=true;
      for (let v of this.vols)
      {
        if (v.pilote?.licence==p.licence) {test=false};
      }
      if (test) {list.push(p);}
    }
    return list
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

  attributionPilote() {
    this.vol.pilote=this.pilote;
    this.srvVol.updateVol(this.vol);
  }

  validationRespo() {
    this.okSaut=true;
  }

  attributionVolAvion() {
    if (this.avion==null) {alert('Choissiez un avion !')}
    else if (this.vol==null) {alert('Choissiez un vol !')}
    else 
    {
      this.vol.situationVol=SituationVol.EMBARQUEMENT
      this.srvVol.updateVol(this.vol);
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

  retirerVol() {
    this.vols.find(v => v.idVol==this.avion.vol.idVol).situationVol=SituationVol.EN_PREPARATION
    this.srvVol.updateVol(this.vols.find(v => v.idVol==this.avion.vol.idVol));

    this.avion.vol=null;
    this.srvAvion.updateAvion(this.avion);

    this.vueVol=false;
  }
}
