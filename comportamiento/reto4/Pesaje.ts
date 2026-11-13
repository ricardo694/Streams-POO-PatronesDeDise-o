import { UnidadPeso } from "./UnidadPeso";

export class Pesaje {
    private readonly _cantidad: number;
    private readonly _origen: UnidadPeso;
    private readonly _destino: UnidadPeso;

    constructor(cantidad: number, origen: UnidadPeso, destino: UnidadPeso) {
        this._cantidad = cantidad;
        this._origen = origen;
        this._destino = destino;
    }

    public get cantidad(): number { return this._cantidad; }
    public get origen(): UnidadPeso { return this._origen; }
    public get destino(): UnidadPeso { return this._destino; }

    public enKg(): number {
        return this._origen.aKg(this._cantidad);
    }

    public convertido(): number {
        return this._destino.desdeKg(this.enKg());
    }
}
