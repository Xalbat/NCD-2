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
        public date?: Date,
        public listSaut?: Array<Saut>)
        {}

    getNbParachutistes(){
        let nbPara = 0;
        this.listSaut.forEach(s =>{
            nbPara += s.listParachutiste.length
        })
        return nbPara
    }

}
