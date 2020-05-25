import { Parachutiste } from './parachutiste';

export class RevisionParachute {
    public parachutiste: Parachutiste;
    constructor(public id?: number, public date_dernier_pliage_primaire?: Date, public date_dernier_pliage_secours?: Date){}
}
