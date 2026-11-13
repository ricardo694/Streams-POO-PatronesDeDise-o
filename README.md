# Reto 1: Boletería del Cine Astor

Este reto soluciona el problema de Doña Marta automatizando la taquilla. Para evitar que el código se vuelva un espagueti lleno de `if` y `else`, usamos programación orientada a objetos.

### ¿Cómo aplicamos el Polimorfismo?
En lugar de que la caja registradora pregunte "si el cliente es estudiante reste 15%, si es abuelo reste 25%", creamos una interfaz `Espectador`. La caja (`Orden`) simplemente le dice al cliente: *"dame tu porcentaje de descuento"*. Cada tipo de espectador (General, Estudiante, Tercera Edad) sabe responder con su propio número sin que la caja tenga que hacer cálculos extra.

### Principios SOLID aplicados:
* **(S):** Separamos todo por tareas. La clase `Orden` solo suma dinero; la clase `ImpresoraFactura` solo dibuja el recibo en consola.

* **(O):** Si el cine quiere añadir una nueva funcionalidad, solo creamos un archivo nuevo. No tenemos que modificar el código que ya funciona.

* **(L):** El carrito de compras (`ItemOrden`) acepta cualquier cosa que sea un `Producto`. Le da igual si le metes una Boleta o unas Crispetas, funciona idéntico con ambos.

* **(I):** Nuestra interfaz `Espectador` va al grano: solo obliga a tener un nombre de categoría y un método para el descuento. No se incluye métodos basura que las clases hijas no usarían.

## Reto 2: El Sastre a la Medida

* **Categoría:** Patrón Creacional.
* **Patrón utilizado:** Builder.
* **¿Por qué elegimos este patrón?** Un traje tiene piezas que siempre deben ir (tela, saco y pantalón), pero otras que dependen totalmente del gusto del cliente (chaleco, forro o bordado). Si usáramos un constructor tradicional, terminaríamos pasando muchos valores vacíos (`undefined`) cuando el cliente no pide extras. El patrón Builder nos deja exigir lo obligatorio desde el arranque e ir sumando los opcionales paso a paso de forma limpia.
* **¿Cómo lo aplicamos?**
    * `Pieza`: Representa cada parte del traje con su tipo, opción elegida y precio.
    * `TrajeBuilder`: Es el sastre. Recibe las 3 piezas obligatorias en su constructor, ofrece métodos encadenables (`agregarChaleco`, `agregarForro`, `agregarBordado`) para los extras y entrega el resultado con `construir()`.
    * `Traje`: Es el producto final ya armado que usa `.map()` y `.reduce()` para calcular el costo total.

## Reto 4: La Balanza Trucada del Mercado

* **Categoría:** Patrón de Comportamiento.
* **Patrón utilizado:** Strategy.
* **¿Por qué elegimos este patrón?** Cada unidad (gramo, libra, arroba, kilogramo) tiene su propia forma de convertirse a kilos y de salir de kilos. Si escribiéramos un `if` por cada par de unidades, el código crecería muy rápido y cada cambio de factor obligaría a tocar la misma función. Con Strategy, cada unidad sabe hacer su propia conversión y el pesaje solo la usa, así que cualquier par de unidades funciona sin cambiar el código de conversión.
* **¿Cómo lo aplicamos?**
    * `UnidadPeso`: Es la interfaz común. Obliga a cada unidad a tener un código y los métodos `aKg()` y `desdeKg()`.
    * `Gramo`, `Libra`, `Arroba` y `Kilogramo`: Son las estrategias concretas. Cada una aplica su factor real.
    * `Pesaje`: Es el contexto. Guarda la cantidad, la unidad de origen y la de destino, y usa la estrategia de origen para pasar a kilos y la de destino para convertir.
    * `Reto4BalanzaTrucada`: Crea los pesajes, muestra cada conversión y usa `.map()` y `.reduce()` para sumar el total en kilos.

## Reto 5: La Moto Personalizada

* **Categoría:** Patrón Estructural.
* **Patrón utilizado:** Decorator.
* **¿Por qué elegimos este patrón?** El taller quiere poder agregar accesorios nuevos sin tocar la moto base. Con Decorator, cada mejora envuelve a la moto y le suma su nombre y su precio. Así la moto base no cambia nunca, y si aparece un accesorio nuevo solo se crea una clase nueva que extiende `MejoraMoto`.
* **¿Cómo lo aplicamos?**
    * `Moto`: Es la interfaz común. Obliga a tener nombre, precio base, lista de mejoras, precio de las mejoras y precio total.
    * `MotoNaked250`: Es la moto base, sin mejoras.
    * `MejoraMoto`: Es el decorador base. Guarda la moto que envuelve y le suma el nombre y precio de su mejora.
    * `Mejoras`: Son los decoradores concretos (`EscapeDeportivo`, `PinturaMateNegro`, `BaulTrasero`, entre otros). Cada uno solo define su nombre y precio.
    * `Reto5MotoPersonalizada`: Arma la moto envolviéndola con las mejoras elegidas, muestra la descripción y usa `.map()` y `.reduce()` para el total.

## Reto 6: La Sala de Urgencias

* **Categoría:** Patrón de Comportamiento.
* **Patrón utilizado:** Chain of Responsibility (Cadena de Responsabilidad).
* **¿Por qué elegimos este patrón?** Cada profesional atiende solo ciertos niveles de gravedad y, si no puede, debe pasar el paciente al siguiente. Con una cadena, quien recibe al paciente no necesita saber quién lo atenderá: solo llama al primero de la fila y cada eslabón decide si lo atiende o lo pasa. Si nadie puede atenderlo, el paciente queda como remitido.
* **¿Cómo lo aplicamos?**
    * `Paciente`: Guarda el síntoma, el nivel de gravedad y la prioridad numérica.
    * `Profesional`: Clase base de la cadena. Cada eslabón tiene un siguiente (`setSiguiente`) y, en `atender()`, decide si puede atender al paciente o lo pasa al siguiente. Si no hay más eslabones, devuelve `null`.
    * `Enfermero`, `MedicoGeneral` y `Especialista`: Son los eslabones concretos. Cada uno define el nivel que atiende y su prioridad máxima.
    * `Reto6SalaUrgencias`: Arma la cadena (enfermero → médico general → especialista), procesa cada paciente, imprime quién lo atendió y usa `.filter()`, `.map()` y `.reduce()` para las estadísticas.

## Reto 8: La Academia de Fútbol de los UML

Este reto no incluye el diagrama UML, que se entrega por separado. Aquí se documenta el diseño en código, los principios SOLID aplicados y el patrón de diseño usado.

* **Categoría:** Patrón Estructural.
* **Patrón utilizado:** Decorator, para los atributos dinámicos.
* **¿Por qué elegimos este patrón?** Posición secundaria, país de origen, historial de lesiones y valor de mercado no aplican a todos los jugadores ni cambian igual con el tiempo. Si los metiéramos como atributos fijos en `Jugador`, la clase se llenaría de campos vacíos y cada cambio tocaría la clase base. Con Decorator, la ficha básica se envuelve con solo los datos que cada jugador tenga.
* **¿Cómo lo aplicamos?**
    * `FichaJugador`: interfaz con un único método `lineas()`. `FichaBasica` muestra nombre, posición y dorsal.
    * `DecoradorFicha`: decorador base que envuelve otra ficha.
    * `PosicionSecundaria`, `PaisOrigen`, `HistorialLesiones` y `ValorMercado`: decoradores concretos que agregan una línea a la ficha.
    * `Reto8AcademiaFutbol`: crea la ficha del delantero y la envuelve con los cuatro decoradores.

### Estructura de clases

* `Persona` (abstracta): nombre y edad, compartidos por jugadores, entrenadores e hinchas.
* `Jugador` (abstracta, hereda de `Persona`): atributos privados con getters y setters donde aplica, y los métodos `entrenar()`, `posicion()` y `patear()`. `posicion()` y `patear()` son abstractos.
* `Arquero`, `Defensa` y `Delantero`: herencia de `Jugador`. Cada uno implementa `posicion()` y `patear()` a su manera.
* `Entrenador`: tiene una lista de jugadores asignados (asociación 1 entrenador a N jugadores). Métodos `dirigir()`, `evaluar()` y `planearSesion()`.
* `Hincha`: tiene jugadores favoritos y camisetas. Métodos `animar()`, `pedirAutografo()` y `publicarFoto()`. Se asocia con jugadores y entrenadores por parámetro.

### Principios SOLID aplicados

* **S (Responsabilidad única):** `Entrenador` solo gestiona jugadores asignados y su evaluación. `FichaBasica` solo muestra datos básicos; los datos extra van en decoradores separados.
* **O (Abierto/Cerrado):** para agregar un atributo dinámico nuevo basta con crear otro decorador. `FichaBasica` y los demás decoradores no cambian. Para una posición nueva, basta con otra clase que extienda `Jugador`.
* **L (Sustitución de Liskov):** `Arquero`, `Defensa` y `Delantero` pueden usarse donde se espera un `Jugador`. `Entrenador.planearSesion()` funciona igual con cualquiera de ellos.
* **I (Segregación de interfaces):** `FichaJugador` tiene un solo método, así que ninguna ficha queda obligada a implementar métodos que no usa.
* **D (Inversión de dependencias):** `Entrenador`, `Hincha` y los decoradores dependen de `Jugador` y `FichaJugador` (abstracciones), no de cada posición concreta.
