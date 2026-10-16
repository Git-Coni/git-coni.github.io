import { COMPANY_INFO, getServices } from '../data/services.data.ts';
import { getLanguage, getI18n } from '../data/i18n.store.ts';
import { getServiceIcon } from './Icons.ts';

export function renderHero(): string {
  const lang = getLanguage();
  const t = getI18n();
  const liveServices = getServices(lang).filter(s => s.status === 'live');

  return `
    <section id="about" class="relative pt-24 pb-20 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 corporate-gradient-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Sub-headline Pill Badge -->
        <div class="flex justify-center mb-5 sm:mb-6">
          <div class="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-[11px] sm:text-xs font-medium text-slate-300 break-keep text-center">
            <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 shrink-0"></span>
            <span>${t.hero.badge}</span>
          </div>
        </div>

        <!-- Main Headline -->
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-snug sm:leading-[1.15] break-keep">
            ${t.hero.headlinePart1} 
            <span class="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              ${t.hero.headlineGradient}
            </span>
          </h1>

          <p class="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal break-keep">
            ${t.hero.subCopy}
          </p>

          <!-- Primary Actions (Responsive Flex Column on Mobile) -->
          <div class="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto">
            <a 
              href="#services-hub" 
              class="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-subtle flex items-center justify-center gap-2"
            >
              <span>${t.hero.exploreServicesBtn}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            <a 
              href="#solutions" 
              class="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-medium text-sm transition-all border border-slate-700 flex items-center justify-center gap-2"
            >
              <span>${t.hero.coreSolutionsBtn}</span>
            </a>
          </div>
        </div>

        <!-- Corporate Metrics / Impact Stats -->
        <div class="mt-12 sm:mt-16 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          ${COMPANY_INFO.metrics.map(metric => {
            const metricKey = metric.key as keyof typeof t.hero.metrics;
            const meta = t.hero.metrics[metricKey];
            return `
              <div class="p-4 sm:p-5 rounded-xl corporate-card">
                <div class="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                  ${metric.value}
                </div>
                <div class="mt-1 text-xs sm:text-sm font-semibold text-slate-200 break-keep">
                  ${meta.label}
                </div>
                <div class="mt-1 text-[11px] sm:text-xs text-slate-400 break-keep leading-snug">
                  ${meta.desc}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Quick Access Nodes Bar -->
        <div class="mt-6 sm:mt-8 max-w-5xl mx-auto p-3.5 sm:p-4 rounded-xl corporate-panel flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div class="flex items-center gap-2 text-xs font-medium text-slate-400 shrink-0">
            <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            <span>${t.hero.activeNodesLabel}</span>
          </div>
          <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
            ${liveServices.map(service => `
              <a 
                href="${service.url}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-300 hover:text-white text-xs transition-colors flex items-center gap-1.5"
              >
                <span>${service.name}</span>
                <span class="text-[10px] text-slate-500 hidden xs:inline">(${service.domain})</span>
                ${getServiceIcon('external', 'w-3 h-3 text-slate-500')}
              </a>
            `).join('')}
          </div>
        </div>

      </div>
    </section>
  `;
}
