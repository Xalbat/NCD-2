import { Component, OnInit, SimpleChange } from '@angular/core';
import { Avion } from '../avion';
import { Parachutiste } from '../parachutiste';
import { Saut } from '../saut';

@Component({
  selector: 'composer-vol,[composer-vol]',
  templateUrl: './composer-vol.component.html',
  styleUrls: ['./composer-vol.component.css']
})
export class ComposerVolComponent implements OnInit {

  avion : Avion = new Avion();
  avionsDisponibles : Array<Avion> = [];
  listeAttente : Array<Parachutiste> = [];
  listeAttenteGroupe : Array<Array<Parachutiste>> = [];
  listeParaConfirmés : Array<Parachutiste> = [];
  listeSautDemandés : Array<Saut> = [];
  ligne=0;
  choix = false;

  constructor() { }

  ngOnInit(): void {
    console.log("init")
    this.loadListeAvionsDispo()
    this.loadListesPara()
  }

  test(){
    console.log(this.avion)
  }

  loadListeAvionsDispo(){
    this.avionsDisponibles.push(new Avion(15,2500,4,3,0,60))
    this.avionsDisponibles.push(new Avion(19,4000,3,3,0,60))
  }

  loadListesPara(){
    this.listeAttente.push(new Parachutiste(2000,"Dupont","Jean",new Date('2020-10-05')))
    this.listeSautDemandés.push(new Saut(0,2500,true))
  }

  affichageAvion(id) {
    this.choix=(!this.choix);
    this.choix ? this.ligne=id : this.ligne=0;
  }

}
