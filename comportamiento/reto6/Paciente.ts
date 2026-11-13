export class Paciente {
    private readonly _sintoma: string;
    private readonly _nivel: string;
    private readonly _prioridad: number;

    constructor(sintoma: string, nivel: string, prioridad: number) {
        this._sintoma = sintoma;
        this._nivel = nivel;
        this._prioridad = prioridad;
    }

    public get sintoma(): string { return this._sintoma; }
    public get nivel(): string { return this._nivel; }
    public get prioridad(): number { return this._prioridad; }
}
