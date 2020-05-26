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
  ligneAvion=0;
  choixAvion = false;
  ligneVol=0;
  choixVol = false;
  listeAttente: Array<Parachutiste> = [];
  listeSautDemandés: Array<Parachutiste> = [];

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
    this.volsDisponibles[0].respoSol = new Parachutiste(1,"Robert","Dupont");
  }

  affichageAvion(id) {
    this.choixAvion=(!this.choixAvion);
    this.choixAvion ? this.ligneAvion=id : this.ligneAvion=0;
  }

  affichageVol(id) {
    this.choixVol=(!this.choixVol);
    this.choixVol ? this.ligneVol=id : this.ligneVol=0;
  }

  loadListesPara(){
    this.listeAttente.push(new Parachutiste(1,"Dupont","Jean","Instructeur", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(2,"Dupont","Jean","Débutant", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(2,"Dupont","Jean","Débutant", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(2,"Dupont","Jean","Débutant", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(1,"Dupont","Jean","Instructeur", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(1,"Dupont","Jean","Instructeur", new Date('2020-10-05')))
  }
}
