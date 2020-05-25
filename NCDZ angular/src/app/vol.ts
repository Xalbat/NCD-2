import { Pilote } from './pilote';
import { Avion } from './avion';

export class Vol {
    public pilote: Pilote;
    public avion: Avion;

    constructor(public id?: number,public situationVol?: string){}
}
