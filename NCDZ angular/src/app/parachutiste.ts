import { Parachute } from './parachute';

export class Parachutiste {
    public parachute: Parachute;
    constructor(public numeroLicence?: number, public nom?: string, public prenom?: string, public date_visite?: Date){}
}
