import { Paciente } from "./Paciente";
import { Especialista, Enfermero, MedicoGeneral } from "./Profesionales";

export class Reto6SalaUrgencias {
    public static ejecutar(): void {
        console.log("Sala de Urgencias - Hospital San Rafael");

        const enfermero = new Enfermero();
        const medicoGeneral = new MedicoGeneral();
        const especialista = new Especialista();

        enfermero.setSiguiente(medicoGeneral);
        medicoGeneral.setSiguiente(especialista);

        const pacientes: Paciente[] = [
            new Paciente("Dolor de garganta", "Leve", 1),
            new Paciente("Fractura de muñeca", "Moderado", 2),
            new Paciente("Dolor en el pecho", "Grave", 3),
            new Paciente("Paro cardiaco", "Crítico", 3),
        ];

        const resultados = pacientes.map((paciente) => ({
            paciente,
            profesional: enfermero.atender(paciente),
        }));

        resultados.forEach((resultado, indice) => {
            if (resultado.profesional !== null) {
                console.log(`P${indice + 1}: ${resultado.profesional.nombre} atendió.`);
            } else {
                console.log(`P${indice + 1}: Sin profesional disponible.`);
                console.log("    Paciente remitido a otra institución.");
            }
        });

        const atendidos = resultados.filter((resultado) => resultado.profesional !== null);
        const niveles = ["Leve", "Moderado", "Grave"];
        const conteos = niveles
            .map((nivel) => `${nivel}: ${atendidos.filter((r) => r.paciente.nivel === nivel).length}`)
            .join("  ");
        const remitidos = resultados.filter((resultado) => resultado.profesional === null).length;
        const sumaPrioridades = atendidos
            .map((resultado) => resultado.paciente.prioridad)
            .reduce((acumulado, prioridad) => acumulado + prioridad, 0);
        const promedio = atendidos.length > 0 ? sumaPrioridades / atendidos.length : 0;

        console.log("\n--- Estadísticas ---");
        console.log(`Atendidos - ${conteos}`);
        console.log(`Remitidos a otra institución: ${remitidos}`);
        console.log(`Promedio prioridad atendidos: ${promedio.toFixed(1)}`);
    }
}
