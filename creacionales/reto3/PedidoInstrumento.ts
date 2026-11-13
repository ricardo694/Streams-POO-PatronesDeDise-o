import { Instrumento } from "./Instrumento";

export class PedidoInstrumentos {
    private _instrumentos: Instrumento[] = [];

    public agregarInstrumento(instrumento: Instrumento): void {
        this._instrumentos.push(instrumento);
    }

    public calcularTotal(): number {
        return this._instrumentos
            .map((inst) => inst.calcularPrecioFinal())
            .reduce((acumulado, precio) => acumulado + precio, 0);
    }

    public mostrarResumen(): void {
        this._instrumentos.forEach((inst, indice) => {
            const precioFormateado = `$${inst.calcularPrecioFinal().toLocaleString("es-CO")}`;
            console.log(`Instrumento ${indice + 1}: ${inst.modelo} ${inst.gama}`);
            console.log(`  Afinación: ${inst.afinacion}`);
            console.log(`  Precio: ${precioFormateado}\n`);
        });

        const totalFormateado = `$${this.calcularTotal().toLocaleString("es-CO")}`;
        console.log(`Total a pagar: ${totalFormateado}`);
        console.log("¡Gracias por su pedido!");
    }
}
