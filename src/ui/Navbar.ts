import { COMPANY_INFO, getServices } from '../data/services.data.ts';
import { getLanguage, getI18n } from '../data/i18n.store.ts';
import { getBrandLogoSymbol, getServiceIcon } from './Icons.ts';

export function renderNavbar(): string {
  const lang = getLanguage();
  const t = getI18n();
  const liveCount = getServices(lang).filter(s => s.status === 'live').length;

  return `
    <header class="fixed top-0 left-0 right-0 z-40 bg-[#0a0f1d]/90 backdrop-blur-md border-b border-white/[0.08]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Brand Logo & Tech Symbol -->
        <a href="#" class="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:border-blue-400 group-hover:bg-blue-600/20 transition-all">
            ${getBrandLogoSymbol('w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:scale-105 transition-transform')}
          </div>
          <span class="font-bold text-base sm:text-lg text-slate-100 tracking-tight">
            ${COMPANY_INFO.name}
          </span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#about" class="hover:text-slate-100 transition-colors">${t.nav.about}</a>
          <a href="#solutions" class="hover:text-slate-100 transition-colors">${t.nav.solutions}</a>
          <a href="#services-hub" class="hover:text-slate-100 transition-colors flex items-center gap-2">
            <span>${t.nav.services}</span>
            <span class="px-1.5 py-0.5 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              ${liveCount}
            </span>
          </a>
        </nav>

        <!-- Right Side: Language Switcher & Family Sites Hub -->
        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
          <!-- Language Toggle Switcher (EN | KO) -->
          <div class="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs font-medium">
            <button
              id="lang-en-btn"
              class="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs transition-all ${lang === 'en' ? 'bg-blue-600 text-white font-semibold shadow-sm' : 'text-slate-400 hover:text-slate-200'}"
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              id="lang-ko-btn"
              class="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs transition-all ${lang === 'ko' ? 'bg-blue-600 text-white font-semibold shadow-sm' : 'text-slate-400 hover:text-slate-200'}"
              aria-label="한국어로 전환"
            >
              KO
            </button>
          </div>

          <!-- Family Sites Hub Button -->
          <button 
            id="nav-hub-trigger-btn"
            class="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600 transition-all text-xs font-medium"
            aria-label="${t.nav.familySitesBtn}"
          >
            ${getServiceIcon('hub', 'w-3.5 h-3.5 text-slate-400')}
            <span class="hidden xs:inline">${t.nav.familySitesBtn}</span>
          </button>
        </div>
      </div>
    </header>
  `;
}
