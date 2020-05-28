import { RevisionParachute } from './revision-parachute';
import { Proprietaire } from '../enums/proprietaire.enum';
import { EtatParachute } from '../enums/etat-parachute.enum';
import { TypeSecurite } from '../enums/type-securite.enum';

export class Parachute {

  

    constructor(public idParachute? : number, 
                public nomHarnais? : String, 
                public nomVoilePricipale? : String,
                public tailleVoilePricipale? : number,
                public nomVoileSecours? : String,
                public tailleVoileSecours? : number,
                public etatParachute?: EtatParachute,
                public proprietaire?: Proprietaire,
                public revision?: RevisionParachute,
                public typeSecurite?: TypeSecurite,
                public secoursAuto? : number,
                public secoursManuel? : number) {
                    this.revision=revision;
        
    }

}
