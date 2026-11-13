import { FabricaInstrumentos, FabricaProfesional, FabricaVintage } from "./FabricaInstrumentos";
import { PedidoInstrumentos } from "./PedidoInstrumento";

export class Reto3FabricaInstrumentos {
    public static ejecutar(): void {
        console.log("Bienvenido a Armonía Andina");

        const pedido = new PedidoInstrumentos();

        const fabricaProfesional: FabricaInstrumentos = new FabricaProfesional();
        const violin = fabricaProfesional.crearCuerda("Violín");
        pedido.agregarInstrumento(violin);

        const fabricaVintage: FabricaInstrumentos = new FabricaVintage();
        const saxofon = fabricaVintage.crearViento("Saxofón");
        pedido.agregarInstrumento(saxofon);

        pedido.mostrarResumen();
    }
}
