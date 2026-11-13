export interface Espectador {
     readonly tipo: string;

     obtenerDescuento(): number;
}


export class EspectadorEstudiante implements Espectador {
    public readonly tipo: string = "Estudiante";

    public obtenerDescuento(): number {
        return 15;
    }
}

export class EspectadorGeneral implements Espectador {
    public readonly tipo: string = "General";

    public obtenerDescuento(): number {
        return 0;
    }
}

export class EspectadorTerceraEdad implements Espectador {
    public readonly tipo: string = "Tercera edad";

    public obtenerDescuento(): number {
        return 25;
    }
}
