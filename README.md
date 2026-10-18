# 🚀 Krishna Gawande — Data Engineer & Big Data Specialist Portfolio

A modern, high-performance, minimalist monochrome portfolio built for **lifetime free hosting with zero maintenance** on GitHub Pages. Inspired by Hostinger's top web design aesthetics.

---

## 🌟 Highlights & Sections
* **Minimalist Monochrome Aesthetic (Hostinger-Inspired)**: Clean typography (`Plus Jakarta Sans` & `JetBrains Mono`), glassmorphism cards, subtle borders, and smooth transitions.
* **Dark & Light Mode Engine**: Seamless theme toggle with local storage persistence and system preference detection.
* **Live PySpark & Kafka Stream Pipeline Simulator**: In-browser real-time interactive canvas demonstrating stream ingestion throughput, micro-batching, and lakehouse storage.
* **Production Projects & Case Studies**:
  - **AGRO**: Big Data Agricultural Analytics Platform (AWS S3, Glue, EMR, Athena, PySpark, GitHub Actions)
  - **SEC Financial Distress Prediction Engine**: EDGAR XBRL pipeline with Parquet optimization (75% memory reduction) and Random Forest + Altman Z-Score.
  - **Sales Performance Management System**: Interactive Tableau Public & Excel BI dashboard.
* **Work Experience & Academic Details**:
  - SDE at **QuantEdgeLabs** (Trading algorithms, Django & PostgreSQL workflows)
  - PGCP-BDA (Big Data Analytics) at **CDAC SM VITA, Mumbai** (81.07%)
  - BE in Information Technology from **SGBAU** (68.59%)
* **Technical Certifications & Extracurriculars**:
  - Snowflake Badge 1: Data Warehousing Essentials
  - Board Infinity Data Science
  - Agentic AI & Gen AI 101
  - State & Division level Hockey & Cricket leadership
* **Zero Backend Contact**: Instant copy-to-clipboard email pill + direct mailto fallback.

---

## 📂 Project Structure
```text
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Automated GitHub Pages CI/CD workflow
├── assets/
│   ├── css/
│   │   └── style.css       # Complete design system & responsive layout
│   └── js/
│       └── main.js         # Interactive modals, theme engine, & pipeline simulator
├── index.html              # Semantic HTML5 markup
└── README.md               # Setup & deployment guide
```

---

## ⚡ How to Deploy to GitHub Pages (Keep Live Forever for Free)

### Step 1: Initialize Git Repository
In your terminal, navigate to the `Portfolio` folder and run:
```bash
git init
git add .
git commit -m "feat: initial release of Data Engineer portfolio"
```

### Step 2: Create a New Repository on GitHub
1. Go to [GitHub.com/new](https://github.com/new).
2. Name your repository:
   **`codekros.github.io`** *(or `portfolio`)*.
3. Set visibility to **Public**.

### Step 3: Link & Push
```bash
git branch -M main
git remote add origin https://github.com/codekros/codekros.github.io.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your GitHub repository -> **Settings** -> **Pages**.
2. Under **Build and deployment** -> **Source**, select **GitHub Actions** (the included `.github/workflows/deploy.yml` will automatically build and publish).
3. Your site will instantly go live at:
   `https://codekros.github.io/`

---

## 🌐 Custom Domain (Optional)
To connect your own custom domain (e.g. `krishnagawande.com` or `krishnagawande.dev`):
1. In repository settings -> **Pages** -> **Custom domain**, enter your domain name.
2. Add a CNAME record in your DNS provider pointing to `codekros.github.io`.
3. Enable **Enforce HTTPS**.
