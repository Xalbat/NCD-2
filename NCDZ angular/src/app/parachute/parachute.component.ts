import { Component, OnInit } from '@angular/core';
import { Parachute } from '../classes/parachute';
import { ParachuteService } from '../services/parachute.service';
import { RevisionParachute } from '../classes/revision-parachute';
import { RevisionService } from '../services/revision.service';

@Component({
  selector: 'app-parachute',
  templateUrl: './parachute.component.html',
  styleUrls: ['./parachute.component.css']
})
export class ParachuteComponent implements OnInit {
  public formParachute: Parachute = new Parachute();
  isEditing = false;
  public formRevision : RevisionService = new RevisionService();

  constructor(public srvParachute:ParachuteService, public srvRevision:RevisionService) { }

  ngOnInit(){
    this.srvParachute.reload();
    this.formParachute.revision = new RevisionParachute();
  }

  public ajouterParachute() {
    console.log(this.formParachute)
    this.srvRevision.add(this.formRevision);

        setTimeout(() => { this.srvParachute.add(this.formParachute);
      
    }, 200);
    this.formParachute = new Parachute();
    this.formParachute.revision = new RevisionParachute();
  
  }

  public modifierParachute() {
    this.isEditing = false;
    this.srvParachute.update(this.formParachute);
    this.formParachute = new Parachute();
  }

  public annulerModification() {
    this.modifierParachute();
   }
 
   public editerParachute(parachute) {
     this.formParachute = JSON.parse(JSON.stringify(parachute));
     this.isEditing = true;
   }
 
   public supprimerParachute(parachute) {
     this.srvParachute.delete(parachute);
   }
}
