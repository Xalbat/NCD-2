import { Component, OnInit, SimpleChange } from '@angular/core';

import { ComposerAvionComponent } from '../composer-avion/composer-avion.component';
import { Avion } from '../classes/avion';
import { Parachutiste } from '../classes/parachutiste';
import { Saut } from '../classes/saut';
import { Vol } from '../classes/vol';
import { SituationVol } from '../enums/situation-vol.enum';
import { SituationAvion } from '../enums/situation-avion.enum';
import { EtatAvion } from '../enums/etat-avion.enum';

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
    //private sautSvc : SautService
    //private avionSVC : AvionService
    private compoAvion : ComposerAvionComponent
    ) { }

  ngOnInit(): void {

    //ici load des liste via les futurs services
    //this.loadListeAvionsDispo()
    this.loadListesPara()
  }

  sautsBonneAlitutde(){
    let idsSelectionnes = this.vol.sauts.map(s => s.idSaut)
    return this.listeSautDemandes.filter(s => s.altitude <= this.compoAvion.avion.altitudeMax).filter(s=> !idsSelectionnes.includes(s.idSaut))
  }

  retirerSaut(s){
    this.vol.sauts.splice(this.vol.sauts.indexOf(s),1)
    console.log(this.vol.sauts)
  }

  /*loadListeAvionsDispo(){
    this.avionsDisponibles.push(new Avion(15,2400,16,EtatAvion.DISPONIBLE,"G-Force-1","Plus Ultra",0,3,60,SituationAvion.PROPRIETAIRE,null));
    this.avionsDisponibles.push(new Avion(15,2400,16,EtatAvion.DISPONIBLE,"G-Force-1","Plus Ultra",0,3,60,SituationAvion.PROPRIETAIRE,null));

    let vol1 = new Vol(1,SituationVol.EN_ATTENTE.toString())
    let vol2 = new Vol(2,SituationVol.EN_ATTENTE.toString())

    this.listeDesVolsEnAttente.push(vol1)
    this.listeDesVolsEnAttente.push(vol2)

    console.log(this.listeDesVolsEnAttente)
  }*/

  listeResponsablesVol(){
    return this.listeAttente.filter(para => para.numeroLicence != this.responsableSol.numeroLicence && para.niveau != "ELEVE")
  }

  listeResponsablesSol(){
    return this.listeAttente.filter(para => para.numeroLicence != this.responsableVol.numeroLicence && para.niveau != "ELEVE")
  }

  loadListesPara(){
    this.listeAttente.push(new Parachutiste(1,"Instructeur 1","Jean","Instructeur", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(2,"Dupont","Jean","Débutant", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(3,"Dupont","Jean","Débutant", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(4,"Dupont","Jean","Débutant", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(5,"Instructeur 2","Jean","Instructeur", new Date('2020-10-05')))
    this.listeAttente.push(new Parachutiste(6,"Instructeur 3","Jean","Instructeur", new Date('2020-10-05')))
    let saut = new Saut(0,2500,true)
    //saut.parachutiste.push(new Parachutiste(2000,"Dupont","Jean","Debutant",new Date('2020-10-05')))
    //saut.parachutiste.push(new Parachutiste(3000,"Dupont","aignan","Instructeur",new Date('2020-10-05')))
    let saut2 = new Saut(1,4000,false)
    //saut2.parachutiste.push(new Parachutiste(4000,"Capone","al","Confirme",new Date('2020-10-05')))
   // saut2.parachutiste.push(new Parachutiste(5000,"D'arc","jeanne","Confirme",new Date('2020-10-05')))
    //saut2.parachutiste.push(new Parachutiste(6000,"Au","Secour","Cameraman",new Date('2020-10-05')))
    //saut2.parachutiste.push(new Parachutiste(7000,"Matue","Omar","Confirme",new Date('2020-10-05')))

    this.listeSautDemandes.push(saut)
    this.listeSautDemandes.push(saut2)

  }

  affichageAvion(id) {
    this.choix=(!this.choix);
    this.choix ? this.ligne=id : this.ligne=0;
  }

}
