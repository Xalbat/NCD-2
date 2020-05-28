import { Component, OnInit } from '@angular/core';
import { Payement } from '../classes/payement';
import { PayementService } from '../services/payement.service';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {

  payement: Payement;

  constructor(public payementSrv: PayementService) {

   }

  ngOnInit(): void {
    this.payementSrv.reload();
  }

}
