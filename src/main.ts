import './style.css';
import { renderNavbar } from './ui/Navbar.ts';
import { renderHero } from './ui/Hero.ts';
import { renderSolutions } from './ui/Solutions.ts';
import { renderServicesHubSection, renderFloatingHubWidget } from './ui/ServiceHub.ts';
import { renderFooter } from './ui/Footer.ts';
import { setLanguage, onLanguageChange } from './data/i18n.store.ts';

function renderApp(): void {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <div class="min-h-screen bg-[#0a0f1d] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      ${renderNavbar()}
      <main class="flex-grow">
        ${renderHero()}
        ${renderSolutions()}
        ${renderServicesHubSection()}
      </main>
      ${renderFooter()}
      ${renderFloatingHubWidget()}
    </div>
  `;

  setupInteractions();
}

function setupInteractions(): void {
  const floatingToggleBtn = document.getElementById('floating-hub-toggle-btn');
  const floatingPanel = document.getElementById('floating-hub-panel');
  const floatingCloseBtn = document.getElementById('floating-hub-close-btn');
  const navHubTriggerBtn = document.getElementById('nav-hub-trigger-btn');
  const langEnBtn = document.getElementById('lang-en-btn');
  const langKoBtn = document.getElementById('lang-ko-btn');

  function openHubPanel(): void {
    if (floatingPanel) {
      floatingPanel.classList.remove('hidden');
    }
  }

  function closeHubPanel(): void {
    if (floatingPanel) {
      floatingPanel.classList.add('hidden');
    }
  }

  function toggleHubPanel(): void {
    if (floatingPanel) {
      floatingPanel.classList.toggle('hidden');
    }
  }

  if (floatingToggleBtn) {
    floatingToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleHubPanel();
    });
  }

  if (floatingCloseBtn) {
    floatingCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeHubPanel();
    });
  }

  if (navHubTriggerBtn) {
    navHubTriggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openHubPanel();
    });
  }

  // Language switchers
  if (langEnBtn) {
    langEnBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setLanguage('en');
    });
  }

  if (langKoBtn) {
    langKoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setLanguage('ko');
    });
  }

  // Close panel on click outside
  document.addEventListener('click', (e) => {
    if (floatingPanel && !floatingPanel.classList.contains('hidden')) {
      const container = document.getElementById('floating-hub-container');
      if (container && !container.contains(e.target as Node)) {
        closeHubPanel();
      }
    }
  });

  // Close panel on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeHubPanel();
    }
  });
}

// Subscribe to language change events for immediate UI refresh
onLanguageChange(() => {
  renderApp();
});

// Initial boot
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
