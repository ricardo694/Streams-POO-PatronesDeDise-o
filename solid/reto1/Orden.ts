import { Espectador } from "./Espectador";
import { ItemOrden } from "./ItemOrden";
import { Producto } from "./Producto";

export class Orden {
    private readonly _espectador: Espectador;
    private _items: ItemOrden[] = [];

    constructor(espectador: Espectador) {
        this._espectador = espectador;
    }

    public get espectador(): Espectador {
        return this._espectador;
    }

    public get items(): ItemOrden[] {
        return this._items;
    }

    public agregarItem(producto: Producto, cantidad: number): void {
        this._items.push(new ItemOrden(producto, cantidad));
        const textoUnidad = cantidad === 1 ? "unidad agregada" : "unidades agregadas";
        console.log(`${producto.nombre}: ${cantidad} ${textoUnidad} a la orden.`);
    }

    public calcularSubtotal(): number {
        return this._items
            .filter((item) => item.cantidad > 0)
            .map((item) => item.calcularSubtotal())
            .reduce((acumulado, subtotal) => acumulado + subtotal, 0);
    }

    public calcularDescuento(): number {
        const porcentaje = this._espectador.obtenerDescuento();
        return this.calcularSubtotal() * (porcentaje / 100);
    }

    public calcularTotal(): number {
        return this.calcularSubtotal() - this.calcularDescuento();
    }
}
