import { Moto } from "./Moto";
import { MejoraMoto } from "./MejoraMoto";

export class EscapeDeportivo extends MejoraMoto {
    constructor(moto: Moto) {
        super(moto, "Escape deportivo", 1400000);
    }
}

export class ManillarDeportivo extends MejoraMoto {
    constructor(moto: Moto) {
        super(moto, "Manillar deportivo", 480000);
    }
}

export class LucesLED extends MejoraMoto {
    constructor(moto: Moto) {
        super(moto, "Luces LED", 350000);
    }
}

export class AlforjasLaterales extends MejoraMoto {
    constructor(moto: Moto) {
        super(moto, "Alforjas laterales", 600000);
    }
}

export class PinturaMateNegro extends MejoraMoto {
    constructor(moto: Moto) {
        super(moto, "Pintura mate negro", 900000);
    }
}

export class PinturaMetalizada extends MejoraMoto {
    constructor(moto: Moto) {
        super(moto, "Pintura metalizada tricapa", 1600000);
    }
}

export class Vinilo extends MejoraMoto {
    constructor(moto: Moto) {
        super(moto, "Vinilo personalizado", 700000);
    }
}

export class GPSIntegrado extends MejoraMoto {
    constructor(moto: Moto) {
        super(moto, "GPS integrado", 1100000);
    }
}

export class BaulTrasero extends MejoraMoto {
    constructor(moto: Moto) {
        super(moto, "Baúl trasero", 550000);
    }
}

export class SistemaSonido extends MejoraMoto {
    constructor(moto: Moto) {
        super(moto, "Sistema de sonido", 820000);
    }
}
