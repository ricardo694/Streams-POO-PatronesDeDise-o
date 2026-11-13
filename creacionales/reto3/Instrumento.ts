export abstract class Instrumento {
    private readonly _modelo: string;
    private readonly _familia: string;
    private readonly _gama: string;
    private readonly _materiales: string;
    private readonly _afinacion: string;
    private readonly _precioBase: number;
    private readonly _factorPrecio: number;

    constructor(
        modelo: string,
        familia: string,
        gama: string,
        materiales: string,
        afinacion: string,
        precioBase: number,
        factorPrecio: number
    ) {
        this._modelo = modelo;
        this._familia = familia;
        this._gama = gama;
        this._materiales = materiales;
        this._afinacion = afinacion;
        this._precioBase = precioBase;
        this._factorPrecio = factorPrecio;
    }

    public get modelo(): string { return this._modelo; }
    public get familia(): string { return this._familia; }
    public get gama(): string { return this._gama; }
    public get materiales(): string { return this._materiales; }
    public get afinacion(): string { return this._afinacion; }

    public calcularPrecioFinal(): number {
        return this._precioBase * this._factorPrecio;
    }
}

export class InstrumentoCuerda extends Instrumento {
    constructor(modelo: string, gama: string, materiales: string, afinacion: string, precioBase: number, factorPrecio: number) {
        super(modelo, "Cuerda", gama, materiales, afinacion, precioBase, factorPrecio);
    }
}

export class InstrumentoViento extends Instrumento {
    constructor(modelo: string, gama: string, materiales: string, afinacion: string, precioBase: number, factorPrecio: number) {
        super(modelo, "Viento", gama, materiales, afinacion, precioBase, factorPrecio);
    }
}

export class InstrumentoPercusion extends Instrumento {
    constructor(modelo: string, gama: string, materiales: string, afinacion: string, precioBase: number, factorPrecio: number) {
        super(modelo, "Percusión", gama, materiales, afinacion, precioBase, factorPrecio);
    }
}
