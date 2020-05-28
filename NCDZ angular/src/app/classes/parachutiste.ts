import { Parachute } from './parachute';
import { Niveau } from '../enums/niveau.enum';
import { Saut } from './saut';

export class Parachutiste {
    public parachute: Parachute;

    constructor(public numeroLicence?: number,
                public nom?: string, 
                public prenom?: string,  
                public dateVisite?: Date,
                public id_parachute?: number,
                public niveau?: Niveau,
                public listSaut?: Array<Saut>) {
    }
}
