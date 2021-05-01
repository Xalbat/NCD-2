import { Component, OnInit, Input } from '@angular/core';
import { Avion } from '../classes/avion';
import { EtatAvion } from '../enums/etat-avion.enum';
import { AvionService } from '../services/avion.service';
import { SituationAvion } from '../enums/situation-avion.enum';
import { AdministrationAvionComponent } from '../administration-avion/administration-avion.component';

@Component({
  selector: 'administration-avion-row,[administration-avion-row]',
  templateUrl: './administration-avion-row.component.html',
  styleUrls: ['./administration-avion-row.component.css']
})
export class AdministrationAvionRowComponent implements OnInit {

  @Input() avion : Avion

  previousState : Avion

  modificationBool : boolean = false;


  constructor(private avionCompo : AdministrationAvionComponent,private avionSvc : AvionService) { }

  ngOnInit(): void {
    console.log(this.avion)
  }
  
  setPreviousState(){
    this.previousState = JSON.parse(JSON.stringify(this.avion))
  }

  returnFromPreviousState(){
    this.avion = JSON.parse(JSON.stringify(this.previousState))
  }

  etatsPossibles(){
    return Object.keys(EtatAvion)
  }

  situationsPossibles(){
    return Object.keys(SituationAvion)
  }

  updateAvion(){
    this.avionSvc.updateAvion(this.avion)
  }

  supprimerAvion(){
    this.avionSvc.deleteAvion(this.avion)
    setTimeout(() => this.avionCompo.reload(),150)
  }

}
