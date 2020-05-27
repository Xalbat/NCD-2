import { Component, OnInit } from '@angular/core';
import { faParachuteBox } from '@fortawesome/free-solid-svg-icons';

import { ParachutisteService } from '../services/parachutiste.service';
import { Parachutiste } from '../classes/parachutiste';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  public formParachutiste: Parachutiste = new Parachutiste();
  isEditing = false;
  faParachuteBox = faParachuteBox

  constructor(private srvParachutiste: ParachutisteService) { }

  ngOnInit(){
    //this.srvParachutiste.reload();
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
    this.isEditing = false;
    this.formParachutiste = new Parachutiste();
  }

  public editerParachutiste(parachutiste) {
    this.formParachutiste = JSON.parse(JSON.stringify(parachutiste));
    this.isEditing = true;
  }

  public supprimerParachutiste(Parachutiste) {
    this.srvParachutiste.delete(Parachutiste);
  }
}
