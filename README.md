<img width="1466" alt="Screenshot 2024-12-24 at 10 28 25 AM" src="https://github.com/user-attachments/assets/98a5175e-7345-42fe-aa6e-dc8be2cc5a4a" />

# Steps to Generate API key

- Neo stands for Near-Earth Objects. Nasa provides an open API and in this problem, we will be using the Asteroid NeoWs API.
- Data Source
  NASA's Open API -> https://api.nasa.gov (Go to Browse APIs -> Asteroids - NeoWs -> Neo -
  Feed)
  Neo Feed
- Sign up for the API services to get the API key mailed to your inbox.

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

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

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Asteroid Stats

A real-time asteroid tracking application that displays near-Earth objects using NASA's NEO API.

## Features

- Real-time asteroid data from NASA
- Interactive asteroid simulation
- Beautiful space-themed UI
- Responsive design
- Dynamic loading animations

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- NASA API Key

## Environment Variables

Create a `.env` file in the root directory with:

```env
NUXT_PUBLIC_NASA_API_KEY=your_nasa_api_key
NUXT_PUBLIC_NASA_BASE_URL=https://api.nasa.gov/neo/rest/v1
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd asteroid-stats
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file with your NASA API key

## Development

Run the development server:

```bash
npm run dev
```

## Production Deployment

1. Build the application:

```bash
npm run build
```

2. Start the production server:

```bash
node .output/server/index.mjs
```

Or use the deployment script:

```bash
./deploy.sh
```

## Docker Deployment

1. Build the Docker image:

```bash
docker build -t asteroid-stats .
```

2. Run the container:

```bash
docker run -p 3000:3000 -e NUXT_PUBLIC_NASA_API_KEY=your_api_key asteroid-stats
```

## Environment Variables

- `NUXT_PUBLIC_NASA_API_KEY`: Your NASA API key
- `NUXT_PUBLIC_NASA_BASE_URL`: NASA NEO API base URL

## License

MIT
