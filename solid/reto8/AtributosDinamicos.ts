import { DecoradorFicha, FichaJugador } from "./FichaJugador";

export class PosicionSecundaria extends DecoradorFicha {
    private readonly _posicion: string;

    constructor(ficha: FichaJugador, posicion: string) {
        super(ficha);
        this._posicion = posicion;
    }

    public lineas(): string[] {
        return [...super.lineas(), `Posición secundaria: ${this._posicion}`];
    }
}

export class PaisOrigen extends DecoradorFicha {
    private readonly _pais: string;

    constructor(ficha: FichaJugador, pais: string) {
        super(ficha);
        this._pais = pais;
    }

    public lineas(): string[] {
        return [...super.lineas(), `País de origen: ${this._pais}`];
    }
}

export class HistorialLesiones extends DecoradorFicha {
    private readonly _lesiones: string[];

    constructor(ficha: FichaJugador, lesiones: string[]) {
        super(ficha);
        this._lesiones = lesiones;
    }

    public lineas(): string[] {
        const detalle = this._lesiones.length > 0 ? this._lesiones.join(", ") : "ninguna";
        return [...super.lineas(), `Historial de lesiones: ${detalle}`];
    }
}

export class ValorMercado extends DecoradorFicha {
    private readonly _valor: number;

    constructor(ficha: FichaJugador, valor: number) {
        super(ficha);
        this._valor = valor;
    }

    public lineas(): string[] {
        return [...super.lineas(), `Valor de mercado: $${this._valor.toLocaleString("es-CO")}`];
    }
}
