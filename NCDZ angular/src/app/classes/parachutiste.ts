import { Parachute } from './parachute';
import { Saut } from './saut';
import { Niveau } from '../enums/niveau.enum';
import { Saut } from './saut';

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
