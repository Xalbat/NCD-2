import { Parachute } from './parachute';
import { Saut } from './saut';
import { Niveau } from '../enums/niveau.enum';

export class Parachutiste {

    constructor(public numeroLicence?: number,
                public nom?: string, 
                public prenom?: string,  
                public dateLicence?: Date,
                public parachute?: Parachute,
                public niveau?: Niveau,
                public listSaut?: Array<Saut>) {
    }
}
