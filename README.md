# Tours and Travel Website

A React and JavaScript website for tours and travel services.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (see `.env.example`) and set your Google Apps Script endpoint:

```bash
VITE_GAS_ENDPOINT="https://script.google.com/macros/s/XXXXXXXXXXXX/exec"
```

### Running the Development Server

To start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── App.jsx     # Main App component
│   ├── App.css     # App styles
│   ├── main.jsx    # Entry point
│   └── index.css   # Global styles
├── index.html      # HTML template
├── vite.config.js  # Vite configuration
└── package.json    # Dependencies and scripts
```

## Technologies Used

- React 18
- Vite (build tool)
- JavaScript
- Tailwind CSS
- React Router
- Framer Motion
