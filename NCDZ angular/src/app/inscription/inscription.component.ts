import { Component, OnInit } from '@angular/core';
import { Parachutiste } from '../parachutiste';
import { ParachutisteService } from '../parachutiste.service';
import { faParachuteBox } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  public formParachutiste: Parachutiste = new Parachutiste();
  private isEditing = false;
  faParachuteBox = faParachuteBox

  constructor(private srvParachutiste: ParachutisteService) { }

  ngOnInit(){
    this.srvParachutiste.reload();
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

  /*public annulerModification() {
    this.isEditing = false;
    this.formParachutiste = new Parachutiste();
  }

  public editerParachutiste(parachutiste) {
    this.formParachutiste = JSON.parse(JSON.stringify(parachutiste));
    this.isEditing = true;
  }
*/
  public supprimerParachutiste(Parachutiste) {
    this.srvParachutiste.delete(Parachutiste);
  }
}
