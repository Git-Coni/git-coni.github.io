import { getServices } from '../data/services.data.ts';
import { getLanguage, getI18n } from '../data/i18n.store.ts';
import { getServiceIcon } from './Icons.ts';

export function renderSolutions(): string {
  const lang = getLanguage();
  const t = getI18n();
  const services = getServices(lang);
  const finService = services.find(s => s.id === 'fin-dashboard');
  const exoService = services.find(s => s.id === 'exo-world');
  const testService = services.find(s => s.id === 'test-platform');

  return `
    <section id="solutions" class="py-16 sm:py-20 md:py-28 relative z-10 border-t border-white/[0.08] bg-[#0d1326]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="max-w-3xl mb-12 sm:mb-16">
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-950/60 border border-blue-800/40 text-xs font-medium text-blue-400 mb-3">
            <span>${t.solutions.badge}</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight break-keep">
            ${t.solutions.title}
          </h2>
          <p class="mt-3 sm:mt-4 text-slate-400 text-sm sm:text-base leading-relaxed break-keep">
            ${t.solutions.description}
          </p>
        </div>

        <!-- 3 Pillars Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <!-- Card 1: FinTech & Asset Monitoring -->
          <div class="corporate-card rounded-xl p-5 sm:p-7 flex flex-col justify-between group">
            <div>
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 sm:mb-6">
                ${getServiceIcon('finance', 'w-5 h-5 sm:w-6 sm:h-6')}
              </div>
              <div class="text-[11px] sm:text-xs font-semibold text-blue-400 tracking-wide uppercase mb-1.5 sm:mb-2">
                ${t.solutions.fin.category}
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 tracking-tight break-keep">
                ${t.solutions.fin.title}
              </h3>
              <p class="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 sm:mb-6 break-keep">
                ${t.solutions.fin.description}
              </p>
            </div>
            
            <div class="pt-4 sm:pt-5 border-t border-white/[0.06]">
              <a 
                href="${finService?.url || '#'}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center justify-between w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 text-xs font-medium transition-colors"
              >
                <span>${t.solutions.fin.button}</span>
                ${getServiceIcon('external', 'w-3.5 h-3.5 text-slate-400')}
              </a>
            </div>
          </div>

          <!-- Card 2: Interactive Web Game -->
          <div class="corporate-card rounded-xl p-5 sm:p-7 flex flex-col justify-between group">
            <div>
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-5 sm:mb-6">
                ${getServiceIcon('game', 'w-5 h-5 sm:w-6 sm:h-6')}
              </div>
              <div class="text-[11px] sm:text-xs font-semibold text-sky-400 tracking-wide uppercase mb-1.5 sm:mb-2">
                ${t.solutions.exo.category}
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 tracking-tight break-keep">
                ${t.solutions.exo.title}
              </h3>
              <p class="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 sm:mb-6 break-keep">
                ${t.solutions.exo.description}
              </p>
            </div>
            
            <div class="pt-4 sm:pt-5 border-t border-white/[0.06]">
              <a 
                href="${exoService?.url || '#'}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center justify-between w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 text-xs font-medium transition-colors"
              >
                <span>${t.solutions.exo.button}</span>
                ${getServiceIcon('external', 'w-3.5 h-3.5 text-slate-400')}
              </a>
            </div>
          </div>

          <!-- Card 3: Psychometrics Platform -->
          <div class="corporate-card rounded-xl p-5 sm:p-7 flex flex-col justify-between group">
            <div>
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 sm:mb-6">
                ${getServiceIcon('psychology', 'w-5 h-5 sm:w-6 sm:h-6')}
              </div>
              <div class="text-[11px] sm:text-xs font-semibold text-indigo-400 tracking-wide uppercase mb-1.5 sm:mb-2">
                ${t.solutions.test.category}
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 tracking-tight break-keep">
                ${t.solutions.test.title}
              </h3>
              <p class="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 sm:mb-6 break-keep">
                ${t.solutions.test.description}
              </p>
            </div>
            
            <div class="pt-4 sm:pt-5 border-t border-white/[0.06]">
              <a 
                href="${testService?.url || '#'}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center justify-between w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 text-xs font-medium transition-colors"
              >
                <span>${t.solutions.test.button}</span>
                ${getServiceIcon('external', 'w-3.5 h-3.5 text-slate-400')}
              </a>
            </div>
          </div>
        </div>

        <!-- Corporate Principles Section -->
        <div class="mt-12 sm:mt-16 p-5 sm:p-8 rounded-xl corporate-panel">
          <div class="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            ${t.solutions.principles.badge}
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 break-keep">
            ${t.solutions.principles.title}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            ${t.solutions.principles.items.map(principle => `
              <div class="space-y-1.5 sm:space-y-2">
                <div class="flex items-center gap-2 text-slate-200 font-semibold text-sm break-keep">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                  <span>${principle.title}</span>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed break-keep">
                  ${principle.desc}
                </p>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </section>
  `;
}
