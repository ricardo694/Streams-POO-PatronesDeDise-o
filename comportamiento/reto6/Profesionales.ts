import { Profesional } from "./Profesional";

export class Enfermero extends Profesional {
    constructor() {
        super("Enfermero", "Leve", 1);
    }
}

export class MedicoGeneral extends Profesional {
    constructor() {
        super("Médico General", "Moderado", 2);
    }
}

export class Especialista extends Profesional {
    constructor() {
        super("Especialista", "Grave", 3);
    }
}
