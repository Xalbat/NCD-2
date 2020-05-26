import { Pilote } from './pilote';
import { Avion } from './avion';
import { Parachutiste } from './parachutiste';
import { Saut } from './saut';

export class Vol {
    public pilote: Pilote;
    public avion: Avion;
    public parachutiste : Parachutiste; 
    public sauts : Array<Saut> = []
    constructor(public id?: number,public situationVol?: string, public respoVol?:Parachutiste, public respoSol?:Parachutiste, public dateVisite?: Date){}

    getNbParachutistes(){
        let nbPara = 0;
        this.sauts.forEach(s =>{
            nbPara += s.parachutiste.length
        })
        return nbPara
    }

}
