# Bienvenidos!


*A continuacion queda adjuntado un proyecto laboral el cual fua desarrollado para la empresa Yuju con las siguientes tecnologias .*

 1. Html
 2. Css
 3. Js
 4. yarn
 5. React
 6. Vite
 7. React Router Dom
  
## Dependencias:
npm install -g yarn

*yarn add @fortawesome/fontawesome-free*

*Importación en el Navbar para el funcionamiento de los iconos desplegables y el menú hamburguesa import '@fortawesome/fontawesome-free/css/all.min.css';*

*yarn add prop-types*

 yarn add react-router-dom


## Instalación y configuracion de Jest + React Testing Library
## En proyectos de React + Vite

1. Instalaciones:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:
```
yarn add --dev whatwg-fetch
```

3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel __babel.config.js__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.js__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

6. Instalacion de modal: 

npm install react-modal



## Funcionalidad:
 
-   *Entrada de Datos del Usuario*:
    
    -   Información personal (nombre, edad, género, dirección).
    -   Información del objeto asegurado (vehículo, vivienda, salud, etc.).
    -   Detalles específicos del seguro (tipo de cobertura, monto asegurado, duración de la póliza).
-   *Validación de Datos*:
    
    -   Verificar que todos los campos requeridos estén completos.
    -   Validar formatos (por ejemplo, que la edad sea un número, que el correo electrónico tenga un formato válido, etc.).
-   *Cálculo de la Prima del Seguro*:
    
    -   Utilizar fórmulas específicas para calcular la prima del seguro basada en la entrada del usuario.
    -   Factores de riesgo: edad, historial de reclamos, tipo de cobertura, etc.
    -   Aplicar descuentos o recargos según las políticas de la aseguradora.
-   *Generación de la Cotización*:
    
    -   Presentar el costo total del seguro.
    -   Detallar los componentes de la prima (cobertura básica, adicionales, impuestos, etc.).
    -   Proveer opciones de pago (mensual, trimestral, anual).
-   *Guardar y Enviar Cotización*:
    
    -   Guardar la cotización en una base de datos para referencia futura.
    -   Enviar la cotización al correo electrónico del usuario.
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
