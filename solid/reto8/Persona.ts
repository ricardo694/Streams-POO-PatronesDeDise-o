export abstract class Persona {
    private readonly _nombre: string;
    private readonly _edad: number;

    constructor(nombre: string, edad: number) {
        this._nombre = nombre;
        this._edad = edad;
    }

    public get nombre(): string { return this._nombre; }
    public get edad(): number { return this._edad; }
}
