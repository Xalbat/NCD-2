import { Component, OnInit } from '@angular/core';

import { SautService } from '../services/saut.service';
import { ParachutisteService } from '../services/parachutiste.service';
import { Saut } from '../classes/saut';
import { Parachutiste } from '../classes/parachutiste';
import { Avion } from '../classes/avion';
import { Vol } from '../classes/vol';
import { VolService } from '../services/vol.service';


@Component({
  selector: 'app-avionnage',
  templateUrl: './avionnage.component.html',
  styleUrls: ['./avionnage.component.css']
})
export class AvionnageComponent implements OnInit {
  public saut: Saut = new Saut();
  public parachutiste: Parachutiste = new Parachutiste();
  public parachutistes: Array<Parachutiste> = [];
  public isGroup: Boolean = false;
  public instructeur: Parachutiste = new Parachutiste();
  public videaste: Parachutiste = new Parachutiste();
  public listeParachutistes: Array<Parachutiste> = [];

  public sauts: Array<Saut>;
  
  public avion : Avion = null;
  public vol: Vol=null;
  public vols : Array<Vol> = []
  public avions : Array<Avion> = [];
  public volsDisponibles : Array<Vol> = [];
  public choixVol = false;
  public indexVol=0;

  constructor(
    public srvParachutiste: ParachutisteService,
    public srvSaut: SautService,
    public srvVol: VolService) { }

  ngOnInit(): void 
  {
    this.saut.altitude = 1200;
    this.saut.tandem = false;
    this.saut.isVideo = false;

    this.listeSauts();
    this.listeDeParachutistes();
    this.listesVols();
  }

  private listesVols() {
    this.srvVol.getVols()
    .subscribe(vols => this.vols = vols)
  }

  private listeSauts() {
    this.srvSaut.getSauts()
    .subscribe(sauts => this.sauts=sauts)
  }

  private listeDeParachutistes() {
    this.srvParachutiste.getParachutistes()
    .subscribe(parachutistes => this.parachutistes=parachutistes)
  }

  public ajouterSautGroup() 
  {
    if (this.listeParachutistes.length==0) { alert('La liste de parachutiste est vide')}
    else {
      this.saut.listParachutiste = this.listeParachutistes;
      console.log(this.saut);
      this.srvSaut.createSaut(this.saut)
        .toPromise()
        .then(saut => this.sauts.push(saut))
        .then(() => this.listeDeParachutistes());
      this.saut = new Saut();
      this.saut.altitude = 1200;
      this.saut.tandem = false;
      this.parachutiste = new Parachutiste();
      this.listeParachutistes = new Array<Parachutiste>();
      this.listeDeParachutistes();
    }
  }

  public ajouterSautSolo() 
  {
    if (this.parachutiste.numeroLicence==undefined) {alert("Aucun parachutiste sélectionné");} 
    else {
      this.saut.listParachutiste =[this.parachutiste]

      // Ajoute le saut dans la BDD
      this.srvSaut.createSaut(this.saut)
        .toPromise()
        .then(saut => this.sauts.push(saut))
        .then(() => this.listeDeParachutistes());

      // Réinitialise les variables
      this.saut = new Saut();
      this.saut.altitude = 1200;
      this.saut.tandem = false;
      this.parachutiste = new Parachutiste();
      this.videaste = new Parachutiste();
      this.parachutistes = new Array<Parachutiste>();
    }
  }

  public ajouterParachutiste() 
  {
    if (!this.parachutiste)
    {
      const index = this.parachutistes.indexOf(this.parachutiste);
      this.parachutistes.splice(index, 1);

      this.listeParachutistes.push(this.parachutiste)
      this.parachutiste = new Parachutiste();
    } 
  }

  public supprimerParachutiste(parachutiste) 
  {
    this.parachutistes.push(parachutiste);
    const index = this.listeParachutistes.indexOf(parachutiste);
    this.listeParachutistes.splice(index, 1);
  }

  public changeIsGroup(boolean) 
  {
    this.isGroup = boolean;
    this.saut.tandem = false;
    this.parachutiste = new Parachutiste();
    this.instructeur = new Parachutiste();
    this.parachutistes = new Array<Parachutiste>();
    this.listeDeParachutistes();
  }

  public changeIsVideo(boolean) 
  {
    this.saut.isVideo = boolean;
  }

  public confirmes()
  {
    return this.parachutistes.filter(p => p.niveau.toString() != 'ELEVE')
  }

  public parachutistesAttente(saut)
  {
    if (saut.vol == null) {return saut.listParachutiste;}
  }
}
