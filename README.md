# No Photography Gallery

A modern, fast, and privacy-focused photo gallery web app built with React, TypeScript, and Vite.

## Overview

No Photography Gallery is designed to showcase images and playlists in a clean, responsive interface. It prioritizes user privacy and performance, making it ideal for personal portfolios, event galleries, or curated collections.

## Features

- Fast and lightweight, powered by Vite
- Built with React and TypeScript
- Built on top of MUI v7 for material design components
- Responsive design for all devices
- Easy to customize and extend
- Privacy-focused with no tracking or ads

## Getting Started

### Prerequisites

- Node.js (v22+ recommended)
- npm

### Installation

```bash
git clone https://github.com/FatihKaanAkkus/no-photography-fkakkuscom.git
cd no-photography-fkakkuscom
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To create a production build:

```bash
npm run build
```

### Deployment

You can deploy the `dist` folder to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

### Docker Deployment

You can also deploy using Docker. First, build the Docker image:

```bash
npm run docker:build
```

Then run the Docker container:

```bash
npm run docker:up
```

The application will be accessible at [http://localhost:4848](http://localhost:4848).

### Docker Build Artifact

The docker build step also creates a `dist.tar.gz` file that contains the production build of the application. You can extract this file and serve it using any static file server. The location of the `dist.tar.gz` file in the container is:

```
/home/node/dist.tar.gz
```
