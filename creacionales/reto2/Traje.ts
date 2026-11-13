import { Pieza } from "./Pieza";

export class Traje {
    private readonly _piezas: Pieza[];

    constructor(piezas: Pieza[]) {
        this._piezas = piezas;
    }

    public get piezas(): Pieza[] {
        return this._piezas;
    }

    public calcularTotal(): number {
        return this._piezas
            .map((pieza) => pieza.precio) // 1. Saca solo el precio de cada pieza
            .reduce((acumulado, precio) => acumulado + precio, 0); // 2. Suma todo
    }

    public mostrarDetalle(): void {
        console.log("\n--------- Tu Traje ---------");

        this._piezas.forEach((pieza) => {
            const tipo = `${pieza.tipo}:`.padEnd(10, " ");
            const opcion = pieza.opcion.padEnd(12, " ");
            const precio = `$${pieza.precio.toLocaleString("es-CO")}`;
            console.log(`${tipo}${opcion}${precio}`);
        });

        const totalFormateado = `$${this.calcularTotal().toLocaleString("es-CO")}`;
        console.log(`\nTotal:    ${totalFormateado}`);
        console.log("¡Lo esperamos en la prueba!");
    }
}
