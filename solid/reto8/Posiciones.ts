import { Jugador } from "./Jugador";

export class Arquero extends Jugador {
    public posicion(): string {
        return "Arquero";
    }

    public patear(): string {
        return "despeja el balón con el pie";
    }
}

export class Defensa extends Jugador {
    public posicion(): string {
        return "Defensa";
    }

    public patear(): string {
        return "despeja el balón lejos del área";
    }
}

export class Delantero extends Jugador {
    public posicion(): string {
        return "Delantero";
    }

    public patear(): string {
        return "dispara a portería";
    }
}
