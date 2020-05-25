import { SituationAvion } from './situation-avion.enum';
import { EtatAvion } from './etat-avion.enum';

export class Avion {
    public situationAvion: SituationAvion; 
    public etat: EtatAvion;

    constructor(public id?: number, public altitude?: number, public capacite?: number, public rotationMax?: number, public rotation?: number, public tempsMontee?: number){}
}
