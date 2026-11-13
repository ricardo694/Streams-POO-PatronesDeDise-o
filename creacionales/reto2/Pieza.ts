export class Pieza {
    private readonly _tipo: string;
    private readonly _opcion: string;
    private readonly _precio: number;

    constructor(tipo: string, opcion: string, precio: number) {
        this._tipo = tipo;
        this._opcion = opcion;
        this._precio = precio;
    }

    public get tipo(): string {
        return this._tipo;
    }

    public get opcion(): string {
        return this._opcion;
    }

    public get precio(): number {
        return this._precio;
    }
}
