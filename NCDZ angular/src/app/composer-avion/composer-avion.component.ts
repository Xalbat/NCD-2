import { Component, OnInit } from '@angular/core';
import { Avion } from '../avion';
import { Parachutiste } from '../parachutiste';
import { Saut } from '../saut';
import { Vol } from '../vol';

@Component({
  selector: 'composer-avion',
  templateUrl: './composer-avion.component.html',
  styleUrls: ['./composer-avion.component.css']
})
export class ComposerAvionComponent implements OnInit {


  avion : Avion = new Avion();
  avionsDisponibles : Array<Avion> = [];
  volsDisponibles : Array<Vol> = [];
  indexAvion=0;
  choixAvion = false;
  indexVol=0;
  choixVol = false;
  listeAttente: Array<Parachutiste> = [];
  listeSautDemandés: Array<Parachutiste> = [];
  indexRepoSol=0;
  indexRepoVol=0;

  constructor() { }

  ngOnInit(): void {
    console.log("init")
    this.loadListeAvionsDispo()
    this.loadListesVols()
    this.loadListesPara()
  }

  test(){
    console.log(this.avion)
  }

  loadListeAvionsDispo(){
    this.avionsDisponibles.push(new Avion(15,2500,4,3,0,60))
    this.avionsDisponibles.push(new Avion(19,4000,3,3,0,60))
  }

  loadListesVols(){
    this.volsDisponibles.push(new Vol(1, "En cours"))
    this.volsDisponibles.push(new Vol(2, "En attente"))
    this.volsDisponibles[0].respoVol = new Parachutiste(1,"Robert","Dupont");
  }

  affichageAvion(id) {
    this.choixAvion=(!this.choixAvion);
    this.choixAvion ? this.indexAvion=id : this.indexAvion=0;
  }

  affichageVol(id) {
    this.choixVol=(!this.choixVol);
    this.choixVol ? this.indexVol=id : this.indexVol=0;
  }

  loadListesPara(){
    this.listeAttente.push(new Parachutiste(1,"Instructeur 1","Jean","Instructeur", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(2,"Dupont","Jean","Débutant", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(2,"Dupont","Jean","Débutant", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(2,"Dupont","Jean","Débutant", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(1,"Instructeur 2","Jean","Instructeur", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(1,"Instructeur 3","Jean","Instructeur", new Date('2020-10-05')))
  }

  attributionRespoSol() {
    if (this.choixVol)
    {
      if (this.indexRepoSol<0)  
      {
        alert(JSON.stringify(this.volsDisponibles[this.indexRepoSol].respoSol))
        this.volsDisponibles[this.indexRepoSol].respoSol=this.listeAttente[this.indexRepoSol];
        alert(JSON.stringify(this.volsDisponibles[this.indexRepoSol].respoSol))
      }
      else {alert('Choissisez un responsable sol')}
    }
    else {alert('Choissisez un vol')}
  }

  attributionRespoVol() {
    if (this.choixVol)
    {
      if (this.indexRepoVol<0)  
      {
        alert(JSON.stringify(this.volsDisponibles[this.indexRepoVol].respoSol))
        this.volsDisponibles[this.indexRepoVol].respoSol=this.listeAttente[this.indexRepoVol];
        alert(JSON.stringify(this.volsDisponibles[this.indexRepoVol].respoSol))
      }
      else {alert('Choissisez un responsable vol')}
    }
    else {alert('Choissisez un vol')}
  }

  instructeur() {
    return this.listeAttente.filter(p => p.niveau == 'Instructeur')
    }
  
}
