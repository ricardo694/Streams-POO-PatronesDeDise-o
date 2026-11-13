import { Persona } from "./Persona";
import { Jugador } from "./Jugador";
import { Entrenador } from "./Entrenador";

export class Hincha extends Persona {
    private readonly _jugadoresFavoritos: Jugador[] = [];
    private readonly _camisetas: string[] = [];

    constructor(nombre: string, edad: number) {
        super(nombre, edad);
    }

    public get jugadoresFavoritos(): Jugador[] {
        return [...this._jugadoresFavoritos];
    }

    public get camisetas(): string[] {
        return [...this._camisetas];
    }

    public agregarFavorito(jugador: Jugador): void {
        this._jugadoresFavoritos.push(jugador);
    }

    public agregarCamiseta(camiseta: string): void {
        this._camisetas.push(camiseta);
    }

    public animar(jugador: Jugador): string {
        return `¡Vamos ${jugador.nombre}!`;
    }

    public pedirAutografo(entrenador: Entrenador): string {
        return `${this.nombre} le pide un autógrafo a ${entrenador.nombre}.`;
    }

    public publicarFoto(jugador: Jugador): string {
        return `${this.nombre} publicó una foto con ${jugador.nombre}.`;
    }
}
