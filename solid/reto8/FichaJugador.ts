import { Jugador } from "./Jugador";

export interface FichaJugador {
    lineas(): string[];
}

export class FichaBasica implements FichaJugador {
    private readonly _jugador: Jugador;

    constructor(jugador: Jugador) {
        this._jugador = jugador;
    }

    public lineas(): string[] {
        return [`${this._jugador.nombre} - ${this._jugador.posicion()} #${this._jugador.dorsal}`];
    }
}

export abstract class DecoradorFicha implements FichaJugador {
    protected readonly _ficha: FichaJugador;

    constructor(ficha: FichaJugador) {
        this._ficha = ficha;
    }

    public lineas(): string[] {
        return this._ficha.lineas();
    }
}
