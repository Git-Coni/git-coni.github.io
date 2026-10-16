import { getServices } from '../data/services.data.ts';
import { getLanguage, getI18n } from '../data/i18n.store.ts';
import { getServiceIcon } from './Icons.ts';

/**
 * 페이지 본문의 공식 서브 프로젝트 허브 섹션 렌더링
 */
export function renderServicesHubSection(): string {
  const lang = getLanguage();
  const t = getI18n();
  const services = getServices(lang);

  return `
    <section id="services-hub" class="py-20 md:py-28 relative z-10 border-t border-white/[0.08] bg-[#0a0f1d]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Title -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-800 text-xs font-medium text-slate-300 mb-3 border border-slate-700">
              <span>${t.hub.badge}</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              ${t.hub.title}
            </h2>
            <p class="mt-2 text-slate-400 text-sm max-w-xl">
              ${t.hub.description}
            </p>
          </div>
          <div class="mt-4 md:mt-0 text-xs text-slate-400 font-medium">
            ${t.hub.totalRegistered}: <span class="text-slate-200 font-semibold">${services.length} ${t.hub.countUnit}</span>
          </div>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          ${services.map(service => {
            const isLive = service.status === 'live';
            const badgeClass = isLive 
              ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/40' 
              : 'bg-slate-800 text-slate-400 border-slate-700';

            return `
              <div class="corporate-card rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <div class="flex items-start justify-between mb-4">
                    <div class="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300">
                      ${getServiceIcon(service.iconType, 'w-5 h-5')}
                    </div>
                    <span class="px-2 py-0.5 rounded text-[11px] font-medium border ${badgeClass}">
                      ${service.badgeText}
                    </span>
                  </div>

                  <h3 class="text-base font-bold text-white mb-1">
                    ${service.name}
                  </h3>
                  <div class="text-xs text-blue-400 font-mono mb-2">
                    ${service.domain}
                  </div>
                  <p class="text-xs text-slate-400 leading-relaxed mb-4">
                    ${service.description}
                  </p>
                </div>

                <div class="pt-3 border-t border-white/[0.06]">
                  ${isLive ? `
                    <a 
                      href="${service.url}" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="inline-flex items-center justify-between w-full text-xs font-medium text-slate-300 hover:text-white py-1 transition-colors group"
                    >
                      <span class="flex items-center gap-1.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>${t.hub.visitBtn}</span>
                      </span>
                      ${getServiceIcon('external', 'w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 transition-colors')}
                    </a>
                  ` : `
                    <div class="flex items-center justify-between text-xs text-slate-500 py-1">
                      <span>${t.hub.comingSoonDesc}</span>
                      <span class="text-[10px] uppercase font-mono">${t.hub.comingSoonBadge}</span>
                    </div>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}

/**
 * 화면 우측 하단에 고정되는 작고 단정한 미니멀 플로팅 허브 위젯 (Floating Corner Widget)
 */
export function renderFloatingHubWidget(): string {
  const lang = getLanguage();
  const t = getI18n();
  const services = getServices(lang);
  const liveCount = services.filter(s => s.status === 'live').length;

  return `
    <div id="floating-hub-container" class="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      <!-- Expanded Popover Panel (Hidden by default, toggled via JS) -->
      <div 
        id="floating-hub-panel" 
        class="hidden mb-3 w-80 sm:w-96 rounded-xl bg-slate-900 border border-slate-700/80 shadow-2xl p-4 transition-all duration-200"
        role="dialog"
        aria-label="${t.hub.floating.title}"
      >
        <!-- Panel Header -->
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <span class="font-semibold text-xs text-white">${t.hub.floating.title}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
              ${liveCount} ${t.hub.floating.nodesActive}
            </span>
            <button 
              id="floating-hub-close-btn"
              class="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Micro Service Links -->
        <div class="space-y-1.5 max-h-[340px] overflow-y-auto pr-1">
          ${services.map(service => {
            const isLive = service.status === 'live';

            if (!isLive) {
              return `
                <div class="p-2.5 rounded-lg bg-slate-800/40 border border-transparent flex items-center justify-between opacity-50">
                  <div class="flex items-center gap-3">
                    <div class="w-7 h-7 rounded bg-slate-800 flex items-center justify-center text-slate-500">
                      ${getServiceIcon(service.iconType, 'w-3.5 h-3.5')}
                    </div>
                    <div>
                      <div class="text-xs font-medium text-slate-400">${service.name}</div>
                      <div class="text-[10px] text-slate-500 font-mono">${service.domain}</div>
                    </div>
                  </div>
                  <span class="text-[10px] text-slate-500 px-1.5 py-0.5 bg-slate-800 rounded">${service.badgeText}</span>
                </div>
              `;
            }

            return `
              <a 
                href="${service.url}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 flex items-center justify-between group transition-all"
              >
                <div class="flex items-center gap-3">
                  <div class="w-7 h-7 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 transition-colors">
                    ${getServiceIcon(service.iconType, 'w-3.5 h-3.5')}
                  </div>
                  <div class="text-left">
                    <div class="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors flex items-center gap-1.5">
                      <span>${service.name}</span>
                      <span class="text-[10px] font-normal text-slate-400 hidden xs:inline">(${service.tagline})</span>
                    </div>
                    <div class="text-[10px] text-slate-400 font-mono">${service.domain}</div>
                  </div>
                </div>
                ${getServiceIcon('external', 'w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 transition-colors')}
              </a>
            `;
          }).join('')}
        </div>

        <div class="mt-3 pt-2.5 border-t border-white/[0.06] text-[11px] text-center text-slate-400">
          ${t.hub.floating.domainNote}
        </div>
      </div>

      <!-- Trigger Button (Compact Clean Pill Badge) -->
      <button 
        id="floating-hub-toggle-btn"
        class="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600 shadow-card transition-all text-xs font-medium"
        aria-label="${t.hub.floating.triggerLabel}"
      >
        <span class="w-2 h-2 rounded-full bg-blue-500"></span>
        <span class="font-medium">${t.hub.floating.triggerLabel}</span>
        <span class="px-1.5 py-0.2 rounded-full text-[10px] bg-slate-900 text-slate-400 border border-slate-700 font-mono">
          ${liveCount}
        </span>
      </button>
    </div>
  `;
}
