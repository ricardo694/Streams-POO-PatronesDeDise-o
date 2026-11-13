import { Jugador } from "./Jugador";
import { Arquero, Defensa, Delantero } from "./Posiciones";
import { Entrenador } from "./Entrenador";
import { Hincha } from "./Hincha";
import { FichaBasica, FichaJugador } from "./FichaJugador";
import { HistorialLesiones, PaisOrigen, PosicionSecundaria, ValorMercado } from "./AtributosDinamicos";

export class Reto8AcademiaFutbol {
    public static ejecutar(): void {
        console.log("ECI FC - Academia de Fútbol");

        const arquero = new Arquero("Camilo Torres", 24, 1, "Derecho", 82, 1.88, 90, "Sub-20");
        const defensa = new Defensa("Luis Mora", 27, 4, "Izquierdo", 78, 1.82, 85, "Primera");
        const delantero = new Delantero("Andrés Pardo", 22, 9, "Derecho", 74, 1.79, 88, "Primera");

        const entrenador = new Entrenador("Carlos Ruiz", 45, "Táctica ofensiva");
        const jugadores: Jugador[] = [arquero, defensa, delantero];
        jugadores.forEach((jugador) => entrenador.dirigir(jugador));

        console.log("\n--- Jugadores ---");
        jugadores.forEach((jugador) => {
            console.log(`${jugador.nombre} (${jugador.posicion()}) ${jugador.patear()}`);
        });

        console.log("\n--- Entrenador ---");
        delantero.entrenar();
        console.log(entrenador.evaluar(delantero));
        console.log(entrenador.planearSesion(delantero));
        console.log(`Jugadores asignados: ${entrenador.jugadoresAsignados.length}`);

        const hincha = new Hincha("Sofía Gómez", 30);
        hincha.agregarFavorito(delantero);
        hincha.agregarCamiseta("9 - Pardo");
        console.log("\n--- Hincha ---");
        console.log(hincha.animar(delantero));
        console.log(hincha.pedirAutografo(entrenador));
        console.log(hincha.publicarFoto(delantero));

        let ficha: FichaJugador = new FichaBasica(delantero);
        ficha = new PosicionSecundaria(ficha, "Extremo derecho");
        ficha = new PaisOrigen(ficha, "Colombia");
        ficha = new HistorialLesiones(ficha, ["Esguince de tobillo (2025)"]);
        ficha = new ValorMercado(ficha, 1500000000);

        console.log("\n--- Ficha ---");
        ficha.lineas().forEach((linea) => console.log(linea));
    }
}
