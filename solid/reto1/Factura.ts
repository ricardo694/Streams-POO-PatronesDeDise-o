import { Orden } from "./Orden";

export class ImpresoraFactura {
    private static formatearPesos(valor: number): string {
        return `$${valor.toLocaleString("es-CO")}`;
    }

    public static imprimir(orden: Orden): void {
        const porcentaje = orden.espectador.obtenerDescuento();

        console.log("\n------ FACTURA DE TAQUILLA ------");
        console.log(`Espectador: ${orden.espectador.tipo}`);
        console.log("Ítems:");

        orden.items
            .filter((item) => item.cantidad > 0)
            .forEach((item) => {
                const nombre = item.producto.nombre.padEnd(11, " ");
                const subtotal = this.formatearPesos(item.calcularSubtotal());
                console.log(`  ${nombre} - ${subtotal}`);
            });

        console.log(`Subtotal:       ${this.formatearPesos(orden.calcularSubtotal())}`);
        console.log(`Descuento (${porcentaje}%): ${this.formatearPesos(orden.calcularDescuento())}`);
        console.log(`Total a pagar:  ${this.formatearPesos(orden.calcularTotal())}`);
        console.log("---------------------------------");
        console.log("¡Disfrute la función!");
    }
}
