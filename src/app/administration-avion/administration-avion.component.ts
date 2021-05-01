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

  constructor(private srvAvion:AvionService) { }

  ngOnInit(): void {
    this.reload();
  }

  public reload(){
    this.srvAvion.getAvions()
    .toPromise()
    .then(avions => this.avions = avions)
  }

}
