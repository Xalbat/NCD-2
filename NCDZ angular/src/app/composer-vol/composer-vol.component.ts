import { Component, OnInit, SimpleChange } from '@angular/core';
import { Avion } from '../avion';
import { Parachutiste } from '../parachutiste';
import { Saut } from '../saut';
import { Vol } from '../vol';
import { SituationVol } from '../situation-vol.enum';

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
  listeParaConfirmes : Array<Parachutiste> = [];
  listeSautDemandes : Array<Saut> = [];
  ligne=0;
  choix = false;

  constructor(
    //private sautSvc : SautService
    //private avionSVC : AvionService
    ) { }

  ngOnInit(): void {

    //ici load des liste via les futurs services
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
    let saut = new Saut(0,2500,true)
    saut.parachutiste.push(new Parachutiste(2000,"Dupont","Jean",new Date('2020-10-05')))
    saut.parachutiste.push(new Parachutiste(3000,"Dupont","aignan",new Date('2020-10-05')))
    saut.vol = new Vol(1,SituationVol.EN_ATTENTE.toString())
    let saut2 = new Saut(1,4000,false)
    saut2.parachutiste.push(new Parachutiste(4000,"Capone","al",new Date('2020-10-05')))
    saut2.parachutiste.push(new Parachutiste(5000,"D'arc","jeanne",new Date('2020-10-05')))
    saut2.parachutiste.push(new Parachutiste(6000,"Au","Secour",new Date('2020-10-05')))
    saut2.parachutiste.push(new Parachutiste(7000,"Matue","Omar",new Date('2020-10-05')))
    saut2.vol = new Vol(2,SituationVol.EN_ATTENTE.toString())
    this.listeSautDemandes.push(saut)
    this.listeSautDemandes.push(saut2)

  }

  affichageAvion(id) {
    this.choix=(!this.choix);
    this.choix ? this.ligne=id : this.ligne=0;
  }

}
