import { Component, OnInit } from '@angular/core';
import { SautService } from '../saut.service';
import { Saut } from '../saut';
import { ParachutisteService } from '../parachutiste.service';

@Component({
  selector: 'app-avionnage',
  templateUrl: './avionnage.component.html',
  styleUrls: ['./avionnage.component.css']
})
export class AvionnageComponent implements OnInit {
  public saut: Saut = new Saut();

  constructor( public srvSaut: SautService, public srvParachutiste: ParachutisteService) { }

  ngOnInit(): void 
  {
    this.srvSaut.loadCurrentSauts(); 
    this.srvParachutiste.reload();
  }

  public ajouterSaut() 
  {
    this.srvSaut.createMatch(this.saut);
    this.saut = new Saut();
  }
}
