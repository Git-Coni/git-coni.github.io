import './style.css';
import { renderNavbar } from './ui/Navbar.ts';
import { renderHero } from './ui/Hero.ts';
import { renderSolutions } from './ui/Solutions.ts';
import { renderServicesHubSection, renderFloatingHubWidget } from './ui/ServiceHub.ts';
import { renderFooter } from './ui/Footer.ts';

function initApp(): void {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <div class="min-h-screen bg-[#05070f] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
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
  const heroExploreBtn = document.getElementById('hero-explore-hub-btn');

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
      floatingPanel?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  if (heroExploreBtn) {
    heroExploreBtn.addEventListener('click', () => {
      const hubSection = document.getElementById('services-hub');
      if (hubSection) {
        hubSection.scrollIntoView({ behavior: 'smooth' });
      }
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

// DOMContentLoaded 리스너
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
