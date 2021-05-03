import { Component, OnInit } from '@angular/core';
import { faParachuteBox } from '@fortawesome/free-solid-svg-icons';

import { ParachutisteService } from '../services/parachutiste.service';
import { Parachutiste } from '../classes/parachutiste';
import { Parachute } from '../classes/parachute';
import { ParachuteService } from '../services/parachute.service';
import { Saut } from '../classes/saut';
import { SautService } from '../services/saut.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  public formParachutiste: Parachutiste = new Parachutiste();

  //Listes
  public parachutes: Array<Parachute> = new Array<Parachute>();
  public sauts: Array<Saut> = new Array<Saut>();
  public parachutistes: Array<Parachutiste> = new Array<Parachutiste>();

  isEditing = false;
  faParachuteBox = faParachuteBox;

  //Ajout saut
  public saut: Saut = new Saut();
  public parachutiste: Parachutiste = new Parachutiste();
  public isGroup: Boolean = false;
  public isTandem: Boolean = false;
  public instructeur: Parachutiste = new Parachutiste();
  public videaste: Parachutiste = new Parachutiste();
  //-----

  constructor(public srvParachutiste: ParachutisteService, public srvParachute: ParachuteService, public srvSaut: SautService) {}

  ngOnInit(){
    // Reload listes de parachutes, de parachutistes et de sauts
    this.listeParachutes();
    this.listeSauts(); 
    this.listeParachutistes();

    //Ajout saut
    this.saut.altitude = 1200;
    this.saut.tandem = false;
    this.saut.isVideo = false;
  }

  listeParachutes() {
    this.srvParachute.getParachutes()
    .subscribe(parachutes => this.parachutes = parachutes)
  }

  listeSauts() {
    this.srvSaut.getSauts()
    .subscribe(sauts => this.sauts = sauts)
  }

  listeParachutistes() {
    this.srvParachutiste.getParachutistes()
    .subscribe(parachutistes => this.parachutistes = parachutistes)
  }

  public ajouterParachutiste() {
    this.srvParachutiste.add(this.formParachutiste);
    this.formParachutiste = new Parachutiste();
  }

  public modifierParachutiste() {
    this.isEditing = false;
    this.srvParachutiste.update(this.formParachutiste);
    this.formParachutiste = new Parachutiste();
  }

  public annulerModification() {
   this.modifierParachutiste();
  }

  public editerParachutiste(parachutiste) {
    this.formParachutiste = JSON.parse(JSON.stringify(parachutiste));
    this.isEditing = true;
  }

  public supprimerParachutiste(Parachutiste) {
    this.srvParachutiste.delete(Parachutiste);
  }

  //Ajout saut
  public ajouterSautGroup() 
  {
    if (this.videaste.numeroLicence >= 0) {this.parachutistes.push(this.videaste);}
    this.saut.listParachutiste = this.parachutistes;
    this.srvSaut.createSaut(this.saut);
    this.saut = new Saut();
    this.saut.altitude = 1200;
    this.saut.tandem = false;
    this.saut.isVideo = false;
    this.parachutiste = new Parachutiste();
    this.parachutistes = new Array<Parachutiste>();
    this.listeParachutistes();
  }

  public ajouterSautSolo() 
  {
    this.parachutistes.push(this.parachutiste)
    if (this.videaste.numeroLicence >= 0) {this.parachutistes.push(this.videaste);}
    if (this.instructeur.numeroLicence >= 0) {this.parachutistes.push(this.instructeur);}
    this.saut.listParachutiste = this.parachutistes;
    this.srvSaut.createSaut(this.saut);
    this.saut = new Saut();
    this.saut.altitude = 1200;
    this.saut.tandem = false;
    this.saut.isVideo = false;
    this.parachutiste = new Parachutiste();
    this.videaste = new Parachutiste();
    this.parachutistes = new Array<Parachutiste>();
    this.listeParachutistes();
  }

  public ajouterParachutisteInList() 
  {
    if (this.parachutiste.numeroLicence>=0)
    {
      const index = this.parachutistes.indexOf(this.parachutiste);
      this.parachutistes.splice(index, 1);

      this.parachutistes.push(this.parachutiste)
      this.parachutiste = new Parachutiste();
    } 
  }

  public supprimerParachutisteInList(parachutiste) 
  {
    this.parachutistes.push(parachutiste);
    const index = this.parachutistes.indexOf(parachutiste);
    this.parachutistes.splice(index, 1);
  }

  public changeIsGroup(boolean) 
  {
    this.isGroup = boolean;
    this.saut.tandem = false;
    this.isTandem = false;
    this.parachutiste = new Parachutiste();
    this.instructeur = new Parachutiste();
    this.parachutistes = new Array<Parachutiste>();
    this.listeParachutistes();
  }

  public changeIsTandem(boolean) 
  {
    this.isTandem = boolean;
    this.saut.tandem = true;
  }

  public changeIsVideo(boolean) 
  {
    this.saut.isVideo = boolean;
  }

  public instructeurs()
  {
    return this.parachutistes.filter(p => p.niveau.toString() == 'INSTRUCTEUR')
  }

  public videastes()
  {
    return this.parachutistes.filter(p => p.niveau.toString() == 'VIDEASTE' || p.niveau.toString() == 'INSTRUCTEUR')
  }

  public confirmes()
  {
    return this.parachutistes.filter(p => p.niveau.toString() != 'ELEVE')
  }

  public parachutistesAttente(saut)
  {
    if (saut.vol == null)
    {
      return saut.listParachutiste;
    }
  }
}
