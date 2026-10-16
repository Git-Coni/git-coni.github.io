import { COMPANY_INFO, SUB_SERVICES } from '../data/services.data.ts';
import { getServiceIcon } from './Icons.ts';

export function renderHero(): string {
  const liveServices = SUB_SERVICES.filter(s => s.status === 'live');

  return `
    <section id="about" class="relative pt-32 pb-16 md:pt-40 md:pb-24 corporate-gradient-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Sub-headline Pill Badge -->
        <div class="flex justify-center mb-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 text-xs font-medium text-slate-300">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>디지털 인프라 & 인터랙티브 웹 기술 스튜디오</span>
          </div>
        </div>

        <!-- Main Headline -->
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            안정적인 디지털 인프라와<br class="hidden sm:inline" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              인터랙티브 웹 솔루션의 미래
            </span>
          </h1>

          <p class="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
            ${COMPANY_INFO.description}
          </p>

          <!-- Primary Actions -->
          <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a 
              href="#services-hub" 
              class="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-subtle flex items-center gap-2"
            >
              <span>패밀리 서비스 둘러보기</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            <a 
              href="#solutions" 
              class="px-5 py-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-medium text-sm transition-all border border-slate-700 flex items-center gap-2"
            >
              <span>핵심 사업 영역</span>
            </a>
          </div>
        </div>

        <!-- Corporate Metrics / Impact Stats (Replaces the CLI terminal box) -->
        <div class="mt-16 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          ${COMPANY_INFO.metrics.map(metric => `
            <div class="p-5 rounded-xl corporate-card">
              <div class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                ${metric.value}
              </div>
              <div class="mt-1 text-sm font-semibold text-slate-200">
                ${metric.label}
              </div>
              <div class="mt-1 text-xs text-slate-400">
                ${metric.description}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Quick Access Nodes Bar -->
        <div class="mt-8 max-w-5xl mx-auto p-4 rounded-xl corporate-panel flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-xs font-medium text-slate-400">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>현재 운영 중인 서비스 바로가기:</span>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            ${liveServices.map(service => `
              <a 
                href="${service.url}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="px-3 py-1.5 rounded-md bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-300 hover:text-white text-xs transition-colors flex items-center gap-1.5"
              >
                <span>${service.name}</span>
                <span class="text-[10px] text-slate-500">(${service.domain})</span>
                ${getServiceIcon('external', 'w-3 h-3 text-slate-500')}
              </a>
            `).join('')}
          </div>
        </div>

      </div>
    </section>
  `;
}
