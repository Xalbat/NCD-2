import { Saut } from './saut';
import { Parachutiste } from './parachutiste';

export class BeerLine {
    
    constructor(
        public idBeerLine?: number,
        public saut?: Saut,
        public parachutiste?: Parachutiste){}
}
