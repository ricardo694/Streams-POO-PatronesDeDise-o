import { Pieza } from "./Pieza";
import { Traje } from "./Traje";

export class TrajeBuilder {
    private _piezas: Pieza[] = [];

    // 1. Las 3 piezas obligatorias se piden desde el inicio
    constructor(tela: Pieza, saco: Pieza, pantalon: Pieza) {
        this._piezas.push(tela, saco, pantalon);
    }

    // 2. Piezas opcionales (cada una devuelve "this" para encadenar)
    public agregarChaleco(opcion: string, precio: number = 90000): this {
        this._piezas.push(new Pieza("Chaleco", opcion, precio));
        return this;
    }

    public agregarForro(opcion: string, precio: number = 70000): this {
        this._piezas.push(new Pieza("Forro", opcion, precio));
        return this;
    }

    public agregarBordado(opcion: string, precio: number = 35000): this {
        this._piezas.push(new Pieza("Bordado", opcion, precio));
        return this;
    }

    // 3. Entrega el traje terminado
    public construir(): Traje {
        return new Traje(this._piezas);
    }
}
