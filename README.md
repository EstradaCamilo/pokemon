# Pokédex

Este proyecto es una aplicación que permite consultar pokémones y agregarlos a una lista de favoritos.
Se ha utilizado Vite, Vue, TypeScript, Pinia y Tailwind CSS. Se eligió Vite por la simplicidad de la aplicación; en caso de ser más robusta, la opción a utilizar sería Nuxt. Sin embargo, considero que Vite y Vue Router fueron suficientes para manejar las dos vistas y sus funcionalidades.

## Variables de entorno

Para configurar correctamente el entorno de desarrollo, debes definir las siguientes variables de entorno:

- **VITE_API_BASE_URL**: URL base de la API de Pokémon.

Crea un archivo `.env` en la raíz del proyecto con el siguiente formato:

```bash
# Pokémon API
VITE_API_BASE_URL=https://pokeapi.co/api/v2
```

## Referencias

- API de Pokémon: [Documentación oficial](https://pokeapi.co/)

## Configuración

Asegúrese de instalar las dependencias:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Servidor de desarrollo

Inicie el servidor de desarrollo en `http://localhost:3001`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```
