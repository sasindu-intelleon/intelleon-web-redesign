# INTELLEON — Next.js Refactor

A modern, highly modular, and fully responsive redesign of the **INTELLEON** technology landing page. Built with **Next.js 14+ (App Router)**, **TypeScript**, and **Tailwind CSS**, this repository refactors the original single-file layout into clean, reusable client-side components with full Light/Dark mode parity and interactive product viewports.

> **Note:** This project is a UI/UX modernization refactor and design enhancement concept built for INTELLEON.

---

## 🌟 Key Features

* **⚡ Modern Tech Stack:** Next.js App Router, TypeScript, and Tailwind CSS.
* **🌓 Full Light/Dark Mode Parity:** Custom theme-toggle mechanism with dynamic filter-based logo rendering (`brightness-0` for crisp light mode contrast).
* **🎨 Interactive Service Viewports:** In-place dynamic detail views for all 8 core tech services (`Enterprise Applications`, `Web`, `Mobile`, `Desktop`, `API Integration`, `UI/UX`, `E-Commerce`, `SaaS`).
* **📦 Product Showcases:** Interactive detail views for featured SaaS solutions (*NextOrder Manager (NOM)* & *Organizer*).
* **📱 Responsive Layout & Sidebar:** Context-aware sticky navigation with scroll-spy functionality and adaptive mobile drawer navigation.
* **🚀 Static Export Ready:** Pre-configured for static site generation (`output: 'export'`) with unoptimized image handling for GitHub Pages deployment.

---

## 🛠️ Tech Stack & Dependencies

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Icons:** FontAwesome 6+ & Inline SVGs
* **Typography:** Chakra Petch, Orbitron, Inter

---

## 📁 Project Structure

```text
├── public/
│   └── images/              # Assets & logo assets
├── src/
│   └── app/
│       ├── components/
│       │   ├── Header.tsx    # Responsive header & theme toggle
│       │   ├── Sidebar.tsx   # Sticky scroll-spy navigation
│       │   ├── Hero.tsx      # Multi-slide dynamic hero carousel
│       │   ├── WhatWeDo.tsx  # Dynamic service cards & detail views
│       │   ├── OurProducts.tsx # Product showcases & modal/detail states
│       │   └── Contact.tsx   # Light/Dark compatible contact form & footer
│       ├── layout.tsx        # Global fonts & HTML wrapper
│       └── page.tsx          # Main assembly page
├── next.config.js            # Static export & Next.js config
├── tailwind.config.ts        # Custom theme colors & typography rules
└── package.json

```

---

## 🚀 Getting Started

### Prerequisites

* Node.js `18.x` or higher
* `npm` / `yarn` / `pnpm`

### Installation

1. **Clone the repository:**
```bash
git clone [https://github.com/your-username/intelleon-web-redesign.git](https://github.com/your-username/intelleon-web-redesign.git)
cd intelleon-web-redesign

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```


Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Building & GitHub Pages Deployment

### Static Export

To build the static HTML bundle:

```bash
npm run build

```

This generates an `out` directory containing all static HTML, CSS, and JS assets.

### Automated GitHub Pages Workflow

A GitHub Action (`.github/workflows/deploy.yml`) is included to build and deploy the `out` directory automatically upon pushing to the `main` branch. Ensure **Settings -> Pages -> Source** is set to **GitHub Actions**.

---

## 📄 License

This repository is maintained as a portfolio showcase / UI modernization concept for **INTELLEON LTD**.

```

```