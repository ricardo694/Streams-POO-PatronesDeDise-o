import { Instrumento, InstrumentoCuerda, InstrumentoViento, InstrumentoPercusion } from "./Instrumento";

export interface FabricaInstrumentos {
    crearCuerda(modelo: string): Instrumento;
    crearViento(modelo: string): Instrumento;
    crearPercusion(modelo: string): Instrumento;
}

export class FabricaProfesional implements FabricaInstrumentos {
    public crearCuerda(modelo: string): Instrumento {
        return new InstrumentoCuerda(modelo, "Profesional", "Madera de arce", "440 Hz", 4000000, 1.2);
    }

    public crearViento(modelo: string): Instrumento {
        return new InstrumentoViento(modelo, "Profesional", "Latón", "440 Hz", 3000000, 1.2);
    }

    public crearPercusion(modelo: string): Instrumento {
        return new InstrumentoPercusion(modelo, "Profesional", "Acero", "440 Hz", 2000000, 1.2);
    }
}

export class FabricaVintage implements FabricaInstrumentos {
    public crearCuerda(modelo: string): Instrumento {
        return new InstrumentoCuerda(modelo, "Vintage", "Madera de palisandro", "442 Hz", 8000000, 1.25);
    }

    public crearViento(modelo: string): Instrumento {
        return new InstrumentoViento(modelo, "Vintage", "Latón dorado", "442 Hz", 10000000, 1.25);
    }

    public crearPercusion(modelo: string): Instrumento {
        return new InstrumentoPercusion(modelo, "Vintage", "Bronce", "442 Hz", 6000000, 1.25);
    }
}
