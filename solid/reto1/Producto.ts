export abstract class Producto {
    private readonly _nombre: string;
    private readonly _precio: number;

    constructor(nombre: string, precio:number) {
        this._nombre = nombre;
        this._precio = precio;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public get precio(): number {
        return this._precio;

    }


}

export class Boleta extends Producto {}

export class Confiteria extends Producto {}
