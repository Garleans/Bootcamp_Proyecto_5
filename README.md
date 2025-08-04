# Rick and Morty Character Browser

Aplicación web para buscar y explorar personajes de la serie **Rick and Morty** utilizando la [API oficial Rick and Morty](https://rickandmortyapi.com/).

---

## 🛠️ Tecnologías y extensiones utilizadas

- **React**: Librería para construir interfaces de usuario.
- **Material-UI (MUI)**: Componentes UI con diseño moderno y personalizable.
- **React Router**: Manejo de rutas y navegación SPA.
- **Axios**: Para hacer llamadas HTTP a la API.
- **i18next**: Internacionalización y traducción dinámica.
- **React-i18next**: Integración de i18next con React.
- **Vite** (o Create React App): Entorno de desarrollo rápido (dependiendo de configuración).

---

## 🚀 Instalación y puesta en marcha

1. Clona el repositorio:

```bash
git clone https://github.com/Garleans/Bootcamp_Proyecto_5.git
```
Instala las dependencias:

```bash
npm install
```
Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre tu navegador y visita:
```bash
http://localhost:5173/
```
## 📖 Cómo funciona la aplicación
## Página principal (Home)

- Muestra un buscador con filtros para nombre, estado, especie y género de personajes.  
- Los resultados se muestran en tarjetas con imagen, nombre y detalles básicos.  
- Paginación incluida para navegar entre los personajes.  

## Detalle de personaje

- Al hacer clic en una tarjeta, se abre la página de detalle del personaje.  
- Muestra una imagen grande, información detallada (estado, especie, género, origen y ubicación).  
- Lista los episodios en los que aparece el personaje (con botón para ver todos en un modal).  
- Incluye botón para volver a la página principal.  

## Filtros y UI

- Los filtros están accesibles desde un menú lateral desplegable.  
- La interfaz usa un tema oscuro personalizado con colores verdes y celestes.  
- Traducción al español e inglés mediante i18next.  

---

## 📁 Estructura principal

- `/src/components` - Componentes reutilizables (filtros, modal, etc).  
- `/src/pages` - Páginas principales (Home.jsx, CharacterDetail.jsx).  
- `/src/routes` - Configuración de rutas con React Router.  
- `/src/theme.js` - Tema personalizado de Material UI.  
- `/src/i18n.js` - Configuración de traducción.  
- `/src/index.css` - Estilos globales y fondo animado.  

---

## 🔧 Personalización

- Puedes cambiar los textos traducidos editando los archivos JSON dentro de `/public/locales/` (o donde estén tus recursos i18n).  
- Modifica el tema en `/src/theme.js` para adaptar colores, tipografías y estilos globales.  
- Agrega más filtros o funcionalidades consumiendo la API de Rick and Morty.

