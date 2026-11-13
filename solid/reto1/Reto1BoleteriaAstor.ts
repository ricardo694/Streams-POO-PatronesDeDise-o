import { Boleta, Confiteria } from "./Producto";
import { EspectadorEstudiante } from "./Espectador";
import { Orden } from "./Orden";
import { ImpresoraFactura } from "./Factura";

export class Reto1BoleteriaAstor {
    public static ejecutar(): void {
        // 1. Creamos los productos (precios inmutables)
        const boleta3D = new Boleta("Boleta 3D", 22000);
        const crispetas = new Confiteria("Crispetas", 9000);
        const gaseosa = new Confiteria("Gaseosa", 4500);

        // 2. Llega un estudiante y arma su orden
        const espectador = new EspectadorEstudiante();
        const orden = new Orden(espectador);

        orden.agregarItem(boleta3D, 2);
        orden.agregarItem(crispetas, 1);
        orden.agregarItem(gaseosa, 2);

        // 3. Imprimimos la factura
        ImpresoraFactura.imprimir(orden);
    }
}
