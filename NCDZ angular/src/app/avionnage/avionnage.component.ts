import { Component, OnInit } from '@angular/core';

import { SautService } from '../services/saut.service';
import { ParachutisteService } from '../services/parachutiste.service';
import { Saut } from '../classes/saut';
import { Parachutiste } from '../classes/parachutiste';

@Component({
  selector: 'app-avionnage',
  templateUrl: './avionnage.component.html',
  styleUrls: ['./avionnage.component.css']
})
export class AvionnageComponent implements OnInit {
  public saut: Saut = new Saut();
  public parachutiste: Parachutiste = new Parachutiste();
  public parachutistes: Array<Parachutiste> = null;
  public isGroup: Boolean = false;
  public isTandem: Boolean = false;
  public sauts: Array<Saut>;

  constructor( public srvSaut: SautService, public srvParachutiste: ParachutisteService) { }

  ngOnInit(): void 
  {
    this.saut.altitude = 1200;
    this.saut.tandem = false;
    this.srvSaut.loadCurrentSauts(); 
    this.srvParachutiste.reload();
  }

  public ajouterSaut() 
  {
    this.saut.parachutiste = this.parachutistes;
    this.srvSaut.createSaut(this.saut);
    this.saut = new Saut();
  }

  public ajouterParachutiste() 
  {
    this.saut.parachutiste.push(this.parachutiste)
    this.parachutiste = new Parachutiste();
  }

  public supprimerParachutiste() 
  { }

  public changeIsGroup(boolean) 
  {
    this.isGroup = boolean;
  }

  public changeIsTandem(boolean) 
  {
    this.isTandem = boolean;
  }
}
