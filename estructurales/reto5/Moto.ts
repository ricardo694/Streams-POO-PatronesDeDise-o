export interface Moto {
    nombre(): string;

    precioBase(): number;

    mejoras(): string[];

    precioMejoras(): number;

    precioTotal(): number;
}
