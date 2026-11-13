import { Persona } from "./Persona";
import { Entrenador } from "./Entrenador";

export abstract class Jugador extends Persona {
    private _dorsal: number;
    private readonly _pieHabil: string;
    private readonly _peso: number;
    private readonly _altura: number;
    private _estadoFisico: number;
    private _categoria: string;
    private _entrenador: Entrenador | null = null;

    constructor(
        nombre: string,
        edad: number,
        dorsal: number,
        pieHabil: string,
        peso: number,
        altura: number,
        estadoFisico: number,
        categoria: string
    ) {
        super(nombre, edad);
        this._dorsal = dorsal;
        this._pieHabil = pieHabil;
        this._peso = peso;
        this._altura = altura;
        this._estadoFisico = estadoFisico;
        this._categoria = categoria;
    }

    public get dorsal(): number { return this._dorsal; }
    public set dorsal(valor: number) { this._dorsal = valor; }

    public get pieHabil(): string { return this._pieHabil; }
    public get peso(): number { return this._peso; }
    public get altura(): number { return this._altura; }

    public get estadoFisico(): number { return this._estadoFisico; }
    public set estadoFisico(valor: number) {
        if (valor < 0 || valor > 100) {
            throw new Error("El estado físico debe estar entre 0 y 100");
        }
        this._estadoFisico = valor;
    }

    public get categoria(): string { return this._categoria; }
    public set categoria(valor: string) { this._categoria = valor; }

    public get entrenador(): Entrenador | null { return this._entrenador; }

    public asignarEntrenador(entrenador: Entrenador): void {
        this._entrenador = entrenador;
    }

    public entrenar(): void {
        this._estadoFisico = Math.min(100, this._estadoFisico + 5);
    }

    public abstract posicion(): string;

    public abstract patear(): string;
}
