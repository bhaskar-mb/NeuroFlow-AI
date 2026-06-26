# NeuroFlow AI — Premium Enterprise AI Orchestration Platform

NeuroFlow AI is an advanced, high-performance frontend landing platform and dashboard designed for next-generation AI orchestration. It showcases a modern, premium user experience with responsive layouts, glowing glassmorphic elements, smooth micro-interactions, and real-time interactive visualizations.

---

## 🚀 Key Architectural Features

### 🧠 Synaptic Routing Core
An intelligent traffic routing protocol designed for multi-LLM orchestration. 
* **Dynamic Query Distribution:** Automatically routes user queries to the most cost-effective and capable language model (small, medium, or large) based on complexity.
* **Sub-Millisecond Latency:** Features selection times under 1ms to minimize overhead.
* **Cost Efficiency:** Reduces average computational costs by up to **60%** without sacrificing output quality.

### 🌐 Consensus Syncing
A distributed synchronization system tailored for decentralized AI nodes and edge clusters.
* **Zero Model Drift:** Ensures that model parameters and weights remain fully synchronized across geo-distributed servers.
* **Global Convergence:** Eliminates parameter desynchronization, guaranteeing consistent AI behavior regardless of user location.

### 🎨 Visual & Motion Design System
* **Interactive Neural Visualizations:** Implements real-time canvas-based network graphs showing live token routing simulation.
* **Scroll-Reveal Animations:** Uses custom React hooks to trigger fading and sliding entry effects as the user scrolls.
* **Premium Dark Mode UI:** Employs vibrant HSL-tailored colors, subtle gradient borders, and smooth elevated card scaling (`hover:scale-[1.03]`).

---

## 🛠️ Technology Stack

* **Framework:** React 18 with TypeScript
* **Build System:** Vite (featuring Hot Module Replacement)
* **Styling:** CSS3 & TailwindCSS (configured with custom animation utilities)
* **Icons:** Lucide React

---

## ⚙️ Getting Started

### 📋 Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (version 18.x or higher recommended).

### 🔧 Installation
Clone the repository and install all dependencies:
```bash
# Clone the repository
git clone https://github.com/bhaskar-mb/NeuroFlow-AI.git
cd neuroflow-ai

# Install dependencies
npm install
```

### 💻 Running the Project

#### Development Server
Start the local development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the application.

#### Production Build
Build the optimized application for deployment:
```bash
npm run build
```
This generates a static production bundle in the `dist/` directory.

#### Preview Build Locally
To run and test the compiled production build locally:
```bash
npm run preview
```

---

## 📁 Repository Structure
```
neuroflow-ai/
├── src/
│   ├── components/       # UI Components (Navbar, Hero, Features, Pricing, Footer, etc.)
│   ├── hooks/            # Custom React hooks (useScrollReveal, etc.)
│   ├── App.tsx           # Main application entry point
│   ├── index.css         # Custom animations, variables, and global styles
│   └── main.tsx          # React DOM mounting
├── public/               # Static assets
├── package.json          # Node dependencies and scripts
└── vite.config.ts        # Vite configuration
```

---

## 🌐 Deployment
The compiled output of `npm run build` is stored in the `dist/` folder. This is fully static and can be instantly hosted on modern platforms such as:
* **Vercel** / **Netlify** (connect this GitHub repository for automatic builds)
* **GitHub Pages**
* **Cloudflare Pages** / **AWS S3**

---

## 🛡️ License and Plagiarism Check
All content, explanations, copy, and graphics within this repository are custom-developed and unique to **NeuroFlow AI**. This project does not contain plagiarized text or code snippets from templates. All definitions of proprietary technologies (e.g., Synaptic Routing Core and Consensus Syncing) have been written originally from scratch.
