# Código Normativo — Animals City

Sitio Astro que reorganiza la normativa de [Animals City RP](https://sites.google.com/view/normativaanimalscity/inicio/) en ocho expedientes navegables, con una guía rápida por rol (civil, banda, policía, EMS) y buscador dentro de cada página.

## Estructura

```
src/
  data/factions.ts     # metadata de los 8 expedientes (nav + portada)
  layouts/Layout.astro # rail de navegación, buscador, tokens de diseño
  styles/global.css    # sistema de diseño (tipografía, color, componentes)
  pages/
    index.astro        # portada + guía rápida por rol
    general.astro
    ems.astro
    policia.astro
    ilegales.astro
    locales.astro
    talleres.astro
    crews.astro
    abogados.astro
```

## Comandos

| Comando           | Acción                                      |
| :----------------- | :------------------------------------------ |
| `npm install`       | Instala dependencias                        |
| `npm run dev`       | Servidor local en `localhost:4321`          |
| `npm run build`     | Build de producción en `./dist/`            |
| `npm run preview`   | Previsualiza el build antes de desplegar    |

## Contenido

El contenido resume y reorganiza el material publicado por Animals City RP para facilitar su consulta — no reemplaza la fuente oficial ante dudas de interpretación.
