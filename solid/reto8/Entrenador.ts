import { Persona } from "./Persona";
import { Jugador } from "./Jugador";

export class Entrenador extends Persona {
    private _especialidad: string;
    private readonly _jugadoresAsignados: Jugador[] = [];

    constructor(nombre: string, edad: number, especialidad: string) {
        super(nombre, edad);
        this._especialidad = especialidad;
    }

    public get especialidad(): string { return this._especialidad; }
    public set especialidad(valor: string) { this._especialidad = valor; }

    public get jugadoresAsignados(): Jugador[] {
        return [...this._jugadoresAsignados];
    }

    public dirigir(jugador: Jugador): void {
        this._jugadoresAsignados.push(jugador);
        jugador.asignarEntrenador(this);
    }

    public evaluar(jugador: Jugador): string {
        return `${jugador.nombre} tiene estado físico ${jugador.estadoFisico}/100.`;
    }

    public planearSesion(jugador: Jugador): string {
        return `Sesión para ${jugador.nombre} (${jugador.posicion()}): trabajo de ${jugador.posicion().toLowerCase()}.`;
    }
}
