import { Pieza } from "./Pieza";
import { TrajeBuilder } from "./TrajeBuilder";

export class Reto2SastreMedida {
    public static ejecutar(): void {
        console.log("Bienvenido al Taller del Sastre");
        console.log("Arma tu traje:");

        // 1. Definimos las 3 piezas obligatorias
        const tela = new Pieza("Tela", "Lana ital.", 320000);
        const saco = new Pieza("Saco", "Cruzado", 250000);
        const pantalon = new Pieza("Pantalón", "Slim", 180000);

        // 2. Usamos el Builder para armarlo paso a paso con los opcionales elegidos
        const miTraje = new TrajeBuilder(tela, saco, pantalon)
            .agregarChaleco("Clásico")
            .agregarBordado("Iniciales")
            .construir();

        // 3. Mostramos el resumen y el total calculado con Streams
        miTraje.mostrarDetalle();
    }
}
