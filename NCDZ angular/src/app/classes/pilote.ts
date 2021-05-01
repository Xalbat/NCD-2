import { Avion } from './avion';

export class Pilote {
    constructor(
        public licence?: number,
        public nom?: string,
        public prenom?: string,
        public listeAvion?: Array<Avion>){}
}
