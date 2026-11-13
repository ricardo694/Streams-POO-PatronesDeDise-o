import { Pesaje } from "./Pesaje";
import { Arroba, Gramo, Kilogramo, Libra } from "./Unidades";

export class Reto4BalanzaTrucada {
    public static ejecutar(): void {
        console.log("Balanza Honesta del Mercado");

        const gramo = new Gramo();
        const libra = new Libra();
        const arroba = new Arroba();
        const kilogramo = new Kilogramo();

        const pesajes: Pesaje[] = [
            new Pesaje(2500, gramo, kilogramo),
            new Pesaje(40, libra, kilogramo),
            new Pesaje(3, arroba, libra),
        ];

        const anchoOriginal = Math.max(
            ...pesajes.map((pesaje) => this.formatearOriginal(pesaje).length)
        );

        pesajes.forEach((pesaje, indice) => {
            const original = this.formatearOriginal(pesaje).padEnd(anchoOriginal);
            const convertido = this.formatearCantidad(pesaje.convertido(), pesaje.destino.codigo);
            console.log(`P ${indice + 1}: ${original} = ${convertido}`);
        });

        const total = pesajes
            .map((pesaje) => pesaje.enKg())
            .reduce((acumulado, kilos) => acumulado + kilos, 0);

        console.log("\n--- Resumen ---");
        console.log(`Total kg equivalente: ${this.formatearCantidad(total, "kg")}`);
        console.log("¡Gracias por comprar en la plaza!");
    }

    private static formatearOriginal(pesaje: Pesaje): string {
        return `${pesaje.cantidad.toLocaleString("es-CO")} ${pesaje.origen.codigo}`;
    }

    private static formatearCantidad(cantidad: number, codigo: string): string {
        return `${cantidad.toLocaleString("es-CO", { maximumFractionDigits: 3 })} ${codigo}`;
    }
}
