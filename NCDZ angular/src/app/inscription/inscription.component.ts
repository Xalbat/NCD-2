import { Component, OnInit } from '@angular/core';
import { faParachuteBox } from '@fortawesome/free-solid-svg-icons';

import { ParachutisteService } from '../services/parachutiste.service';
import { Parachutiste } from '../classes/parachutiste';
import { Parachute } from '../classes/parachute';
import { ParachuteService } from '../services/parachute.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  public formParachutiste: Parachutiste = new Parachutiste();
  public parachutes: Array<Parachute> = new Array<Parachute>();

  isEditing = false;
  faParachuteBox = faParachuteBox


  constructor(public srvParachutiste: ParachutisteService, public srvParachute: ParachuteService) { }

  ngOnInit(){
    this.srvParachutiste.reload();
    this.srvParachute.reload();
  }
  public ajouterParachutiste() {
    console.log(this.formParachutiste)
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
}
