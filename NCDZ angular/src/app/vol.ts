import { Pilote } from './pilote';
import { Avion } from './avion';
import { Parachutiste } from './parachutiste';

export class Vol {
    public pilote: Pilote;
    public avion: Avion;
    public parachutiste : Parachutiste; 
    
    constructor(public id?: number,public situationVol?: string, public respoVol?:Parachutiste, public respoSol?:Parachutiste, public dateVisite?: Date){}
}
