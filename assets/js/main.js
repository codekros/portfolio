/**
 * KRISHNA GAWANDE — DATA ENGINEER & BIG DATA SPECIALIST
 * Interactive Case Studies, Modal Dialogs, Category Filters & Theme Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initHeaderScroll();
  initProjectFilters();
  initCaseStudyModals();
  initClipboardCopy();
  initContactForm();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. Theme Toggle (Monochrome Dark / Clean Light)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

/* --------------------------------------------------------------------------
   2. Header Scroll Blur Effect
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   3. Project Category Filter
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transition = 'opacity 0.25s ease';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. Case Study Modal Dialogs (<dialog>) with Resume Projects
   -------------------------------------------------------------------------- */
const caseStudiesData = {
  'project-agro': {
    title: 'AGRO: Intelligent Agricultural Analytics Platform',
    category: 'Big Data & Cloud ETL',
    repoUrl: 'https://github.com/PGCPBDA-FinalProject/Group-4-AGRO-Feb-2026',
    problem: 'Processing and analyzing 14 years of uncurated, large-scale hourly weather datasets across 4,685 cities to extract agricultural intelligence.',
    architecture: 'End-to-end Big Data Lakehouse pipeline built on AWS (S3, Glue, EMR, Athena, SageMaker) with PySpark. Engineered scalable ETL pipelines for data ingestion, cleaning, schema normalization, and feature extraction. Automated testing and version control with GitHub Actions CI/CD.',
    metrics: [
      'Scale: Ingested & transformed 14 years of hourly meteorological weather data across 4,685 cities',
      'Diagnostic Analytics: Quantified crop season onset anomalies using meteorological thresholds',
      'Machine Learning: Developed unsupervised clustering models to classify agro-climatic zones for crop recommendations',
      'Renewable Energy Engine: Built a scoring engine to evaluate greenhouse infrastructure viability using weather parameters',
      'Quality & CI/CD: Standardized and normalized datasets for schema consistency and automated PySpark workflows'
    ],
    tech: ['PySpark', 'AWS S3', 'AWS Glue', 'Amazon EMR', 'Amazon Athena', 'SageMaker', 'Python', 'GitHub Actions']
  },
  'project-sec': {
    title: 'SEC Corporate Financial Intelligence & Distress Prediction Engine',
    category: 'Financial Analytics & ML',
    repoUrl: 'https://github.com/codekros/SEC-XBRL-fillings-analysis-dashboard.git',
    problem: 'Automating the ingestion and parsing of complex, nested US-GAAP XBRL disclosures from SEC EDGAR filings while overcoming high memory overhead.',
    architecture: 'Automated ingestion pipeline parsing disclosure tables into standardized schemas. Reduced memory usage by 75% via numeric downcasting, categorical encoding, and Parquet columnar optimization. Implemented Sloan Accrual Ratio, DuPont ROE, and 8 solvency ratios. Trained a Random Forest model with Altman Z-Score to predict corporate distress, visualized in an interactive Streamlit + Plotly dashboard.',
    metrics: [
      'Memory Optimization: Reduced memory consumption by 75% using numeric downcasting and Parquet',
      'Core KPIs: Consolidated financial disclosures into 18 key corporate financial metrics',
      'Distress Prediction: Hybrid Random Forest + Altman Z-Score stress testing',
      'Interactive Dashboard: Streamlit & Plotly analytics with automated filer profiling for SPACs & ETFs'
    ],
    tech: ['Python', 'Pandas', 'Parquet', 'Scikit-learn', 'Streamlit', 'Plotly', 'Pytest', 'Git']
  },
  'project-sales': {
    title: 'Sales Performance Management System Dashboard',
    category: 'Business Intelligence',
    repoUrl: 'https://github.com/codekros/sales-insights.git',
    problem: 'Multi-country transactional sales logs required unified KPI tracking, regional revenue trend segmentation, and executive decision-support visualization.',
    architecture: 'Designed and developed an interactive Tableau Public dashboard integrated with structured transactional data modeling in MS Excel.',
    metrics: [
      'Interactive Filtering: Regional sales performance analysis across countries, states, cities, and retail segments',
      'KPI Visualizations: Dynamic indicators identifying product distribution trends and revenue growth',
      'Decision Support: Executive dashboard enabling rapid data-driven business decisions'
    ],
    tech: ['Tableau Public', 'MS Excel', 'Data Modeling', 'KPI Analytics', 'ETL']
  }
};

function initCaseStudyModals() {
  const modal = document.getElementById('caseStudyModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const projectCards = document.querySelectorAll('.project-card[data-project-id]');

  if (!modal) return;

  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.project-links')) return;

      const projectId = card.getAttribute('data-project-id');
      const data = caseStudiesData[projectId];
      if (!data) return;

      document.getElementById('modalTitle').textContent = data.title;
      document.getElementById('modalCategory').textContent = data.category;
      document.getElementById('modalProblem').textContent = data.problem;
      document.getElementById('modalArchitecture').textContent = data.architecture;
      
      const modalRepoLink = document.getElementById('modalRepoLink');
      if (modalRepoLink) {
        modalRepoLink.href = data.repoUrl;
      }

      const metricsList = document.getElementById('modalMetrics');
      metricsList.innerHTML = '';
      data.metrics.forEach(m => {
        const li = document.createElement('li');
        li.textContent = m;
        metricsList.appendChild(li);
      });

      const techContainer = document.getElementById('modalTech');
      techContainer.innerHTML = '';
      data.tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = t;
        techContainer.appendChild(span);
      });

      modal.showModal();
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => modal.close());
  }

  // Light dismiss on backdrop click
  modal.addEventListener('click', (event) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      modal.close();
    }
  });
}

/* --------------------------------------------------------------------------
   5. Clipboard Copy Toast Notification
   -------------------------------------------------------------------------- */
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function initClipboardCopy() {
  const copyBtn = document.getElementById('btnCopyEmail');
  const emailElement = document.getElementById('userEmailText');

  if (copyBtn && emailElement) {
    copyBtn.addEventListener('click', async () => {
      const email = emailElement.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = 'Copied! ✓';
        showToast('✓ Email copied to clipboard');
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
        }, 2000);
      } catch (err) {
        showToast('Email: ' + email);
      }
    });
  }
}

/* --------------------------------------------------------------------------
   6. Contact Form (Zero-Server / Mailto)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const subject = document.getElementById('formSubject').value.trim() || 'Data Engineering Inquiry';
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.');
      return;
    }

    const mailtoUrl = `mailto:krishnagawande2231@gmail.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent(message + '\n\nSender: ' + name + ' (' + email + ')')}`;
    
    showToast('Opening your email client...');
    window.location.href = mailtoUrl;
    contactForm.reset();
  });
}

/* --------------------------------------------------------------------------
   7. Smooth Navigation Scrolling
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
