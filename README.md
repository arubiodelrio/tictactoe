# Tictactoe

Fase 1:

    Paso 2:
        Creación del Header y Board Component en el módulo game. Incluir una instancia de cada uno de ellos en el Game Component.

        Inicialmente el Board Component estará vacío, y el Header Component renderizará un mensaje fijo con el turno del jugador.

        Creación del Square Component que renderizará un botón que detectará cuando el usuario hace clic en él.

        Añadiremos 9 componentes Square al Board Component.

Fase 2:
    Creación e implementación del Servicio StateService que contiene una interfaz con dos propiedades (turno y matriz de valores). Se implementan los métodos getter y setter correspodientes, un ḿetodo que actualiza la posición cliqueada y se crea un BehaviorState.

    Se provider el servicio en el módulo Game.

    Se inyecta el servicio en los componentes del juego: Header, Square y Board.

    Se modifica la class del componente Square para que las celdas no sean clicables cuando ya lo han sido previamente.


# Tictactoe con routes

Se hará uso de routes con Angular para añadir tres rutas:
1.- Página index con un mensaje de bienvenida.
2.- Página de nueva partida.
3.- Página de continuar partida.

Pasos:
1.- Crear indexComponent.
2.- Configurar routes en AppModule.
3.- Añadir barra de navegación al AppComponent
4.- Modificar GameComponent para saber si tiene que empezar una nueva partida o continuar una ya iniciada antes. Para ello
se usará el parámetro data.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
