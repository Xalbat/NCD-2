import { RevisionParachute } from './revision-parachute';
import { Proprietaire } from './proprietaire.enum';
import { EtatParachute } from './etat-parachute.enum';

export class Parachute {
    public typeSecurite: String;
    public revision: RevisionParachute;
    public proprietaire: Proprietaire;
    public etatParachute: EtatParachute;

    constructor(public nomHarnais? : String, public nomVoilePrincipale? : String, public tailleVoilePrincipale? : String, public nomVoileSecours? : String, public tailleVoileSecours? : String ){}

}
