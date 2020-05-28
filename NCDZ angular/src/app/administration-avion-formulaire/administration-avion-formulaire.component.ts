import { Component, OnInit } from '@angular/core';
import { Avion } from '../classes/avion';
import { AdministrationAvionComponent } from '../administration-avion/administration-avion.component';
import { AvionService } from '../services/avion.service';
import { EtatAvion } from '../enums/etat-avion.enum';
import { SituationAvion } from '../enums/situation-avion.enum';

@Component({
  selector: 'administration-avion-formulaire,[administration-avion-formulaire]',
  templateUrl: './administration-avion-formulaire.component.html',
  styleUrls: ['./administration-avion-formulaire.component.css']
})
export class AdministrationAvionFormulaireComponent implements OnInit {

  constructor(private avionCompoParent : AdministrationAvionComponent,private avionSvc : AvionService) { }

  avion : Avion = new Avion()

  ngOnInit(): void {
  }

  addAvion(){
    console.log(this.avion)
    this.avionSvc.addAvion(this.avion);
    
    setTimeout(() =>{
      this.avionCompoParent.reload();
      this.avion = new Avion()
    },150)
  }

  etatsPossibles(){
    return Object.keys(EtatAvion)
  }

  situationsPossibles(){
    return Object.keys(SituationAvion)
  }

}
