import { Component, OnInit } from '@angular/core';

import { Avion } from '../classes/avion';
import { Parachutiste } from '../classes/parachutiste';
import { Vol } from '../classes/vol';
import { EtatAvion } from '../enums/etat-avion.enum';
import { SituationAvion } from '../enums/situation-avion.enum';

@Component({
  selector: 'composer-avion',
  templateUrl: './composer-avion.component.html',
  styleUrls: ['./composer-avion.component.css']
})
export class ComposerAvionComponent implements OnInit {


  public avion : Avion = null;
  avionsDisponibles : Array<Avion> = [];
  volsDisponibles : Array<Vol> = [];
  indexAvion=0;
  choixAvion = false;
  indexVol=0;
  choixVol = false;
  listeAttente: Array<Parachutiste> = [];
  listeSautDemandés: Array<Parachutiste> = [];
  numeroRepoSol=0;
  numeroRepoVol=0;

  constructor() { }

  ngOnInit(): void {
    this.ListeAvionsDispo()
    this.ListesVols()
    this.ListesPara()
  }

  ListeAvionsDispo(){
    this.avionsDisponibles.push(new Avion(15,2400,16,EtatAvion.DISPONIBLE,"G-Force-1",0,3,60,SituationAvion.PROPRIETAIRE,null));
    this.avionsDisponibles.push(new Avion(15,2400,16,EtatAvion.DISPONIBLE,"G-Force-1",0,3,60,SituationAvion.PROPRIETAIRE,null));
  }

  ListesVols(){
    this.volsDisponibles.push(new Vol(1, "En cours"))
    this.volsDisponibles.push(new Vol(2, "En attente"))
    this.volsDisponibles[0].respoVol = new Parachutiste(1,"Robert","Dupont");
  }

  ListesPara(){
    this.listeAttente.push(new Parachutiste(1,"Instructeur 1","Jean","Instructeur", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(2,"Dupont","Jean","Débutant", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(3,"Dupont","Jean","Débutant", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(4,"Dupont","Jean","Débutant", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(5,"Instructeur 2","Jean","Instructeur", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(6,"Instructeur 3","Jean","Instructeur", new Date('2020-10-05')))
  }

  affichageAvion(id) {
    

    this.choixAvion=(!this.choixAvion);
    this.choixAvion ? this.indexAvion=id : this.indexAvion=0;
    if(this.choixAvion){
      this.avion = this.avionsDisponibles.find(a => a.id == id)
    }else{
      this.avion = null
    }
  }

  affichageVol(id) {
    this.choixVol=(!this.choixVol);
    this.choixVol ? this.indexVol=id : this.indexVol=0;
  }



  attributionRespoSol() {
    if (this.choixVol)
    {
      if (this.numeroRepoSol>0)  
      {
        for (let p of this.listeAttente) 
        {
          if (p.numeroLicence==this.numeroRepoSol)  
          {
            //Update
          }
        }
      }
      else {alert('Choissisez un responsable sol')}
    }
    else {alert('Choissisez un vol')}
  }

  attributionRespoVol() {
    if (this.choixVol)
    {
      if (this.numeroRepoVol>0)  
      {
        for (let p of this.listeAttente) 
        {
          if (p.numeroLicence==this.numeroRepoVol)  
          {
            //Update
          }
        }
      }
      else {alert('Choissisez un responsable vol')}
    }
    else {alert('Choissisez un vol')}
  }

  instructeur() {
    return this.listeAttente.filter(p => p.niveau == 'Instructeur')
    }
  
}
