import { Paciente } from "./Paciente";

export abstract class Profesional {
    private readonly _nombre: string;
    private readonly _nivelQueAtiende: string;
    private readonly _prioridadMaxima: number;
    private _siguiente: Profesional | null = null;

    constructor(nombre: string, nivelQueAtiende: string, prioridadMaxima: number) {
        this._nombre = nombre;
        this._nivelQueAtiende = nivelQueAtiende;
        this._prioridadMaxima = prioridadMaxima;
    }

    public get nombre(): string { return this._nombre; }

    public setSiguiente(siguiente: Profesional): void {
        this._siguiente = siguiente;
    }

    public atender(paciente: Paciente): Profesional | null {
        if (this.puedeAtender(paciente)) {
            return this;
        }

        if (this._siguiente === null) {
            return null;
        }

        return this._siguiente.atender(paciente);
    }

    private puedeAtender(paciente: Paciente): boolean {
        return paciente.nivel === this._nivelQueAtiende && paciente.prioridad <= this._prioridadMaxima;
    }
}
