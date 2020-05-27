import { RevisionParachute } from './revision-parachute';
import { Proprietaire } from '../enums/proprietaire.enum';
import { EtatParachute } from '../enums/etat-parachute.enum';
import { TypeSecurite } from '../enums/type-securite.enum';

export class Parachute {


    constructor(public id? : number, 
                public nomHarnais? : String, 
                public nomVoilePrincipale? : String,
                public tailleVoilePrincipale? : number,
                public nomVoileSecours? : String,
                public tailleVoileSecours? : number,
                public etatParachute?: EtatParachute,
                public proprietaire?: Proprietaire,
                public revision?: RevisionParachute,
                public typeSecurite?: TypeSecurite) {
        
    }

}
