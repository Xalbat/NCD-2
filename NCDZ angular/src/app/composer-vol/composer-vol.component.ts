import { Component, OnInit, SimpleChange } from '@angular/core';

import { ComposerAvionComponent } from '../composer-avion/composer-avion.component';
import { Avion } from '../classes/avion';
import { Parachutiste } from '../classes/parachutiste';
import { Saut } from '../classes/saut';
import { Vol } from '../classes/vol';
import { SituationVol } from '../enums/situation-vol.enum';
import { SituationAvion } from '../enums/situation-avion.enum';
import { EtatAvion } from '../enums/etat-avion.enum';
import { SautService } from '../services/saut.service';

@Component({
  selector: 'composer-vol,[composer-vol]',
  templateUrl: './composer-vol.component.html',
  styleUrls: ['./composer-vol.component.css']
})
export class ComposerVolComponent implements OnInit {

  vol : Vol = new Vol();
  avionsDisponibles : Array<Avion> = [];
  listeAttente : Array<Parachutiste> = [];
  listeAttenteGroupe : Array<Array<Parachutiste>> = [];
  listeParaConfirmes : Array<Parachutiste> = [];
  listeSautDemandes : Array<Saut> = [];
  listeDesVolsEnAttente : Array<Vol>  =[]
  ligne=0;
  choix = false;

  responsableVol : Parachutiste = new Parachutiste()
  responsableSol : Parachutiste = new Parachutiste()

  constructor(
    public sautSvc : SautService,
    public compoAvion : ComposerAvionComponent
    ) { }

  ngOnInit(): void {
    console.log("init")

    this.loadListeSauts()
  }

  ajouterSaut(s){
    if(this.compoAvion.vol.listSaut){
      this.compoAvion.vol.listSaut.push(s)
    }else{
      this.compoAvion.vol.listSaut = []
      this.ajouterSaut(s)
    }
  }

  sautsBonneAltitude(){
    let idsSelectionnes = []
    this.compoAvion.vol.listSaut ?  idsSelectionnes = this.compoAvion.vol.listSaut.map(s => s.idSaut) : idsSelectionnes = []
    return this.listeSautDemandes.filter(s =>{return s.altitude <= this.compoAvion.avion.altitudeMax}).filter(s=> !idsSelectionnes.includes(s.idSaut))
  }

  retirerSaut(s){
    this.vol.listSaut.splice(this.vol.listSaut.indexOf(s),1)
  }

  loadListeSauts(){
    this.sautSvc.loadCurrentSauts()
    setTimeout(()=>this.listeSautDemandes = this.sautSvc.sauts,250)
  }

  listeResponsablesVol(){
    return this.listeAttente.filter(para => para.numeroLicence != this.responsableSol.numeroLicence && para.niveau != "Debutant")
  }

  listeResponsablesSol(){
    return this.listeAttente.filter(para => para.numeroLicence != this.responsableVol.numeroLicence && para.niveau != "Debutant")
  }

  affichageAvion(id) {
    this.choix=(!this.choix);
    this.choix ? this.ligne=id : this.ligne=0;
  }

}
