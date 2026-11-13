import { Moto } from "./Moto";

export abstract class MejoraMoto implements Moto {
    private readonly _moto: Moto;
    private readonly _nombreMejora: string;
    private readonly _precio: number;

    constructor(moto: Moto, nombreMejora: string, precio: number) {
        this._moto = moto;
        this._nombreMejora = nombreMejora;
        this._precio = precio;
    }

    public nombre(): string {
        return this._moto.nombre();
    }

    public precioBase(): number {
        return this._moto.precioBase();
    }

    public mejoras(): string[] {
        return [...this._moto.mejoras(), this._nombreMejora];
    }

    public precioMejoras(): number {
        return this._moto.precioMejoras() + this._precio;
    }

    public precioTotal(): number {
        return this.precioBase() + this.precioMejoras();
    }
}
