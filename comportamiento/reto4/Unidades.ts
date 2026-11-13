import { UnidadPeso } from "./UnidadPeso";

export class Gramo implements UnidadPeso {
    public readonly codigo: string = "g";

    public aKg(cantidad: number): number {
        return cantidad / 1000;
    }

    public desdeKg(kilos: number): number {
        return kilos * 1000;
    }
}

export class Libra implements UnidadPeso {
    public readonly codigo: string = "lb";

    public aKg(cantidad: number): number {
        return cantidad / 2.2046;
    }

    public desdeKg(kilos: number): number {
        return kilos * 2.2046;
    }
}

export class Arroba implements UnidadPeso {
    public readonly codigo: string = "@";

    public aKg(cantidad: number): number {
        return cantidad / 0.08;
    }

    public desdeKg(kilos: number): number {
        return kilos * 0.08;
    }
}

export class Kilogramo implements UnidadPeso {
    public readonly codigo: string = "kg";

    public aKg(cantidad: number): number {
        return cantidad;
    }

    public desdeKg(kilos: number): number {
        return kilos;
    }
}
