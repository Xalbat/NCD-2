import { Component, OnInit } from '@angular/core';
import { SautService } from '../saut.service';
import { Saut } from '../saut';
import { ParachutisteService } from '../parachutiste.service';
import { Parachutiste } from '../parachutiste';

@Component({
  selector: 'app-avionnage',
  templateUrl: './avionnage.component.html',
  styleUrls: ['./avionnage.component.css']
})
export class AvionnageComponent implements OnInit {
  public saut: Saut = new Saut();
  public parachutiste: Parachutiste = new Parachutiste();

  constructor( public srvSaut: SautService, public srvParachutiste: ParachutisteService) { }

  ngOnInit(): void 
  {
    this.srvSaut.loadCurrentSauts(); 
    this.srvParachutiste.reload();
  }

  public ajouterSaut() 
  {
    this.saut.parachutiste = this.parachutiste;
    this.srvSaut.createSaut(this.saut);
    this.saut = new Saut();
  }
}
