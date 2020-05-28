import { Parachutiste } from './parachutiste';
import { MoyenPayement } from '../enums/moyenPayement.enum';

export class Payement {
    constructor(
        public id?: number,
        public valeur?: number,
        public date?: Date,
        public moyenPayement?: MoyenPayement,
        public parachutiste?: Parachutiste){}
}
