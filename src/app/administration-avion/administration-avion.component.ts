import { Component, OnInit } from '@angular/core';
import { AvionService } from '../services/avion.service';
import { Avion } from '../classes/avion';

@Component({
  selector: 'administration-avion',
  templateUrl: './administration-avion.component.html',
  styleUrls: ['./administration-avion.component.css']
})
export class AdministrationAvionComponent implements OnInit {

  avions : Array<Avion>;

  constructor(private avionSvc : AvionService) { }

  ngOnInit(): void {
    this.avionSvc.getAvions()
    setTimeout(()=> this.avions = this.avionSvc.avions,150)
  }

  public reload(){
    this.avionSvc.getAvions()
    setTimeout(()=> this.avions = this.avionSvc.avions,250)
  }

}
