import { Parachutiste } from './parachutiste';
import { Vol } from './vol';

export class Saut {
    constructor(
        public idSaut?: number,
        public altitude?: number,
        public tandem?: boolean,
        public isVideo?: boolean,
        public vol?: Vol,
        public listParachutiste?: Array<Parachutiste> ){}
}