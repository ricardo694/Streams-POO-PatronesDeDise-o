export interface UnidadPeso {
    readonly codigo: string;

    aKg(cantidad: number): number;

    desdeKg(kilos: number): number;
}
