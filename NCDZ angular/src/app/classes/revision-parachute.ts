import { Parachutiste } from './parachutiste';

export class RevisionParachute {
    public parachutiste: Parachutiste;

    constructor(
        public idRevision?: number,
        public datePliagePrimaire?: Date,
        public plieurVoilePrimaire?: Parachutiste,
        public datePliageSecours?: Date,
        public plieurVoileSecours?: Parachutiste){}
}
