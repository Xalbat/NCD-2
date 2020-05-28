import { Parachutiste } from './parachutiste';
import { Vol } from './vol';

export class Saut {
    constructor(
        public idSaut?: number,
        public vol?: Vol,
        public altitude?: number,
        public tandem?: boolean,
        public listParachutiste?: Array<Parachutiste> ){}
}