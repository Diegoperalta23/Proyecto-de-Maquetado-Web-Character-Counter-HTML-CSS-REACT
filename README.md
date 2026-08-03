# Character Counter

El objetivo del proyecto dado por el profesor es maquetar y estilizar un ejemplo de frontendmentor en el cual se hizo una pagina de conteo de palabras. 
Em esta segunda entrega utilizamos React y javaScript para darle funcionalidades a la pagina.

---------------------------------------------

##  Tecnologías utilizadas

- React
- JavaScript 
- CSS3
- GitHub

------------------------------------------
## Funcionalidades

# Análisis de texto en tiempo real

La aplicación analiza el contenido ingresado en el textarea y actualiza automáticamente:

- Cantidad total de caracteres.
- Cantidad de palabras.
- Cantidad de oraciones.
- Tiempo aproximado de lectura.

------------------------------------------

# Controles del texto

Incluye diferentes opciones para personalizar el análisis:

- Excluir espacios del conteo de caracteres.
- Activar un límite máximo de caracteres el cual el usuario puede modificar.
- Mostrar el tiempo estimado de lectura.

------------------------------------------

#Estadísticas

La información del texto se presenta mediante tarjetas visuales:

- Total Characters
- Word Count
- Sentence Count

------------------------------------------

# Densidad de letras

El proyecto también analiza la frecuencia de aparición de cada letra:

- Ordena las letras según cantidad de apariciones.
- Muestra el porcentaje de uso de cada letra.
------------------------------------------

# Modo oscuro /  modo claro

Incluye un cambio de tema para alternar entre:

- Dark Mode
- Light Mode

------------------------------------------

# Estructura del proyecto


src
│
├── components
│   ├── Header.jsx
│   ├── WriteArea.jsx
│   ├── Controlls.jsx
│   ├── Stats.jsx
│   └── LetterDensity.jsx
│
├── assets
│   ├── bg-violeta.png
│   ├── bg-naranja.png
│   └── bg-salmon.png
│
├── App.jsx
├── App.css
└── main.jsx


------------------------------------------

# Conceptos de React aplicados

Durante el desarrollo se utilizaron:

- Componentes funcionales.
- Props para comunicación entre componentes.
- Hooks (`useState`).
- Renderizado condicional.
- Manejo de eventos.
- Estados derivados.
- Importación de estilos y assets.

------------------------------------------

# Aprendizajes

Este proyecto permitió reforzar conceptos fundamentales de React:

- Un uso de JavaScript y React mas intenso.
- Aplicacion de funcionalidades a un html.
- Separación de responsabilidades mediante componentes.
- Manejo de formularios controlados.
- Actualización dinámica de la interfaz.
- Organización de estilos CSS.
- Uso de Git para control de versiones.

---

# Autor

Diego Peralta

# Pagina

![Pagina en modo oscuro](.\assets\character-counter-page.png)
