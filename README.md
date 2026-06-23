# Asteroid Stats 🌌

[![Netlify Status](https://api.netlify.com/api/v1/badges/152224d2-4e87-4575-aff1-101046b18ffd/deploy-status)](https://app.netlify.com/sites/tiny-biscuit-8f1acb/deploys)
[![Nuxt](https://img.shields.io/badge/Nuxt-3.14-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

A modern, production-ready web application for tracking and visualizing Near-Earth Objects (NEO) using NASA's Asteroid NeoWs API. Built with Nuxt 3, Vue 3 Composition API, and Tailwind CSS, featuring real-time data visualization, responsive design, and an immersive space-themed UI.

![Asteroid Stats Application](https://github.com/user-attachments/assets/ba85fe99-e8a2-4e03-a079-51ce5dd01e43)

## ✨ Features

### Core Functionality

- **Real-time Asteroid Data**: Fetch and display near-Earth asteroid data from NASA's NEO API
- **Date Range Search**: Query asteroids within custom date ranges with intelligent validation
- **Interactive Data Visualization**: Dynamic charts powered by Chart.js showing asteroid activity patterns
- **Statistical Analysis**: Calculate and display fastest asteroid, closest approach, and average size metrics

### User Experience

- **Space-themed UI**: Immersive dark theme with gradient overlays and glassmorphism effects
- **Loading Animations**: Custom solar system animation during data fetching
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Educational Content**: Built-in asteroid facts and historical information
- **Optimized Performance**: Lazy loading, code splitting, and SSR support

### Technical Highlights

- **Server-Side Rendering**: Full SSR support with Nuxt 3
- **TypeScript Ready**: Type-safe development environment
- **Composition API**: Modern Vue 3 patterns and best practices
- **Component Architecture**: Modular, reusable components
- **Environment Configuration**: Secure API key management with runtime config

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm, pnpm, yarn, or bun
- NASA API key ([Get yours here](#api-key-setup))

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/asteroid-stats.git
cd asteroid-stats

# Install dependencies
npm install
# or
pnpm install
# or
yarn install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
NASA_API_KEY=your_api_key_here
NASA_BASE_URL=https://api.nasa.gov/neo/rest/v1
```

### Development

Start the development server at `http://localhost:3000`:

```bash
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔑 API Key Setup

1. Visit [NASA's Open API Portal](https://api.nasa.gov)
2. Navigate to **Browse APIs → Asteroids - NeoWs**
3. Sign up to receive your API key via email
4. Add the API key to your `.env` file

**Note**: The Asteroid NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. All data is from the [NASA JPL Asteroid team](https://cneos.jpl.nasa.gov/).

## 📁 Project Structure

```
asteroid-stats/
├── assets/
│   └── css/
│       └── main.css           # Global styles and Tailwind directives
├── components/
│   ├── AsteroidStats.vue      # Reusable stat card component
│   ├── DateInput.vue          # Custom date input with validation
│   └── GraphChart.vue         # Chart.js wrapper component
├── layouts/
│   └── default.vue            # Default layout with navigation
├── pages/
│   ├── index.vue              # Main application page
│   └── data.js                # Static data for facts and info
├── public/
│   └── robots.txt             # SEO configuration
├── server/
│   └── tsconfig.json          # Server-side TypeScript config
├── nuxt.config.ts             # Nuxt configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🛠️ Tech Stack

### Frontend Framework

- **[Nuxt 3](https://nuxt.com)** - Vue.js Framework with SSR, auto-imports, and file-based routing
- **[Vue 3](https://vuejs.org)** - Progressive JavaScript framework with Composition API
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe development

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **Custom Animations** - CSS keyframe animations for loading states
- **Glassmorphism** - Modern UI design patterns with backdrop blur

### Data Visualization

- **[Chart.js](https://www.chartjs.org)** - Flexible JavaScript charting library
- **Custom Gradients** - Dynamic gradient generation for charts

### Build & Development

- **[Vite](https://vitejs.dev)** - Next generation frontend tooling
- **[PostCSS](https://postcss.org)** - CSS transformation and optimization
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Automatic vendor prefixing

## 🎨 Component Overview

### AsteroidStats

Reusable statistics card displaying asteroid metrics with formatted values and units.

```vue
<AsteroidStats
  statTitle="Fastest Asteroid"
  :astName="fastestAsteroid.name"
  :statValue="fastestAsteroid.speed"
  unit="km/h"
/>
```

### DateInput

Custom date input component with validation and range restrictions.

```vue
<DateInput id="start_date" label="Start Date" v-model="startDate" required />
```

### GraphChart

Chart.js wrapper component with gradient support and responsive behavior.

```vue
<GraphChart
  :labels="chartLabels"
  :dataPoints="chartDataPoints"
  chartType="line"
  :gradientColors="['#3B82F6', '#8B5CF6']"
/>
```

## 🚢 Deployment

### Netlify (Recommended)

The project includes a `deploy.sh` script for easy Netlify deployment:

```bash
./deploy.sh
```

### Docker

A Dockerfile is provided for containerized deployment:

```bash
# Build the image
docker build -t asteroid-stats .

# Run the container
docker run -p 3000:3000 --env-file .env asteroid-stats
```

### Static Hosting

Generate a static site:

```bash
npm run generate
```

The `dist/` directory can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 🧪 Development Best Practices

- **Components**: Keep components small, focused, and reusable
- **Composables**: Extract shared logic into composables
- **TypeScript**: Use TypeScript for type safety where beneficial
- **CSS**: Follow mobile-first responsive design principles
- **Performance**: Leverage Nuxt's auto-imports and code splitting
- **API**: Implement proper error handling and loading states

## 📈 Performance Optimization

- Server-Side Rendering (SSR) for improved SEO and initial load time
- Code splitting and lazy loading of components
- Optimized Chart.js with `ClientOnly` wrapper
- Tailwind CSS purging for minimal CSS bundle size
- Efficient data fetching with proper loading states

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Resources

- [NASA Asteroid NeoWs API Documentation](https://api.nasa.gov)
- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/guide/introduction.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)

## 🐛 Known Issues & Roadmap

### Known Issues

- Date range validation could be more user-friendly
- Chart animations might be disabled on some mobile devices

### Future Enhancements

- [ ] Add unit and integration tests
- [ ] Implement caching for API responses
- [ ] Add more chart types and visualization options
- [ ] Create a comparison feature for multiple date ranges
- [ ] Add export functionality for data and charts
- [ ] Implement dark/light theme toggle
- [ ] Add internationalization (i18n) support

## 💬 Support

For questions, issues, or feedback:

- Open an [issue](https://github.com/yourusername/asteroid-stats/issues)
- Check existing [discussions](https://github.com/yourusername/asteroid-stats/discussions)

---

**Built with ❤️ using Nuxt 3 and NASA's Open APIs**

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

---

## Maintenance

Last maintenance update: <!--LAST_UPDATED-->2026-06-20<!--/LAST_UPDATED-->
