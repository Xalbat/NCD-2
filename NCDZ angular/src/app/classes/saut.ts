import { Parachutiste } from './parachutiste';
import { VolService } from '../services/vol.service';
import { Vol } from './vol';

export class Saut {
    constructor(public idSaut?: number,
         public altitude?: number,
          public tandem?: boolean,
          public listParachutiste?: Array<Parachutiste> ){}
}