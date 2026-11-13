import { Moto } from "./Moto";
import { MotoNaked250 } from "./MotoNaked250";
import { BaulTrasero, EscapeDeportivo, GPSIntegrado, PinturaMateNegro } from "./Mejoras";

export class Reto5MotoPersonalizada {
    public static ejecutar(): void {
        console.log("Taller Turbo Andes");

        let moto: Moto = new MotoNaked250();
        moto = new EscapeDeportivo(moto);
        moto = new PinturaMateNegro(moto);
        moto = new BaulTrasero(moto);

        const motos: Moto[] = [moto];
        const totalGeneral = motos
            .map((m) => m.precioTotal())
            .reduce((acumulado, precio) => acumulado + precio, 0);

        console.log("\n--- Tu Moto ---");
        console.log(moto.nombre());
        moto.mejoras().forEach((mejora) => console.log(`  + ${mejora}`));

        console.log("\nDescripción:");
        console.log(this.describir(moto));

        console.log(`\n${"Precio base:".padEnd(14)}${this.formatearPesos(moto.precioBase())}`);
        console.log(`${"Mejoras:".padEnd(14)}${this.formatearPesos(moto.precioMejoras())}`);
        console.log(`${"Total:".padEnd(14)}${this.formatearPesos(totalGeneral)}`);
        console.log("¡Buen viaje!");
    }

    private static describir(moto: Moto): string {
        const mejoras = moto.mejoras().map((mejora) => mejora.toLowerCase());
        const ultima = mejoras.pop();
        const lista = mejoras.length > 0 ? `${mejoras.join(", ")} y ${ultima}` : ultima;
        return `${moto.nombre()} con ${lista}`;
    }

    private static formatearPesos(valor: number): string {
        return `$${valor.toLocaleString("es-CO")}`;
    }
}
