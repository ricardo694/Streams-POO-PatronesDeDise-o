import { Moto } from "./Moto";

export class MotoNaked250 implements Moto {
    public nombre(): string {
        return "Naked 250";
    }

    public precioBase(): number {
        return 9800000;
    }

    public mejoras(): string[] {
        return [];
    }

    public precioMejoras(): number {
        return 0;
    }

    public precioTotal(): number {
        return this.precioBase() + this.precioMejoras();
    }
}
