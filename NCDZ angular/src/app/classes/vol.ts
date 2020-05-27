import { Pilote } from './pilote';
import { Avion } from './avion';
import { Parachutiste } from './parachutiste';
import { Saut } from './saut';
import { SituationVol } from '../enums/situation-vol.enum';

export class Vol {
    ;
    public parachutiste : Parachutiste;

    constructor(
        public idVol?: number,
        public pilote?: Pilote,
        public avion?: Avion,
        public situationVol?: SituationVol, 
        public respoVol?:Parachutiste, 
        public respoSol?:Parachutiste, 
        public dateVisite?: Date,
        public sauts : Array<Saut> = [])
        {}

   /* getNbParachutistes(){
        let nbPara = 0;
        this.sauts.forEach(s =>{
            nbPara += s.parachutiste.length
        })
        return nbPara
    }*/

}
