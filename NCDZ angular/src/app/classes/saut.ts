import { Parachutiste } from './parachutiste';

export class Saut {
    public parachutiste: Array<Parachutiste> = [];
    constructor(public idSaut?: number, public altitude?: number, public tandem?: boolean ){}
}
