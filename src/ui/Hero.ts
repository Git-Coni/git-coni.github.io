import { COMPANY_INFO, SUB_SERVICES } from '../data/services.data.ts';
import { getServiceIcon } from './Icons.ts';

export function renderHero(): string {
  const primaryServices = SUB_SERVICES.filter(s => s.status === 'live');

  return `
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden cyber-grid-bg">
      <!-- Glow ambient backdrops -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-1/2 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Top Badge -->
        <div class="flex justify-center mb-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-neon-cyan/20">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>NEXT-GEN VIRTUAL IT ENGINEERING LAB</span>
          </div>
        </div>

        <!-- Headline & Main Copy -->
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight font-sans">
            Architecting the
            <span class="block bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent neon-text-cyan">
              Intelligent Web Horizon
            </span>
          </h1>

          <p class="mt-6 text-lg sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            <strong class="text-white font-medium">${COMPANY_INFO.name}</strong>은 
            고성능 분산 인프라, 실시간 자산 시각화 도구, 인터랙티브 브라우저 엔터테인먼트를 설계하고 배포하는 가상 테크 시스템 엔지니어링 기업입니다.
          </p>

          <!-- Quick Action Buttons -->
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button 
              id="hero-explore-hub-btn" 
              class="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-neon-cyan flex items-center gap-2"
            >
              ${getServiceIcon('hub', 'w-4 h-4')}
              <span>서브 프로젝트 허브 둘러보기</span>
            </button>
            <a 
              href="#solutions" 
              class="px-6 py-3 rounded-lg glass-panel hover:bg-slate-800/80 text-slate-200 font-medium text-sm transition-all border border-slate-700/60 flex items-center gap-2"
            >
              ${getServiceIcon('terminal', 'w-4 h-4 text-cyan-400')}
              <span>기술 솔루션 & 아키텍처</span>
            </a>
          </div>
        </div>

        <!-- Cybernetic Architecture Interactive Terminal Simulation -->
        <div class="mt-14 max-w-3xl mx-auto rounded-xl glass-panel border border-cyan-500/20 overflow-hidden shadow-2xl">
          <!-- Terminal Header -->
          <div class="px-4 py-3 bg-slate-950/90 border-b border-cyan-500/20 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span class="ml-2 font-mono text-xs text-slate-400">coniteck-edge-gateway v2.4 (coniteck.cc)</span>
            </div>
            <div class="font-mono text-[11px] text-cyan-400/90 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>TLS 1.3 | HTTP/3</span>
            </div>
          </div>

          <!-- Terminal Content -->
          <div class="p-5 font-mono text-xs text-slate-300 space-y-3 bg-slate-950/60">
            <div class="flex items-center gap-2 text-cyan-400">
              <span class="text-slate-500">$</span>
              <span>coniteck-ctl cluster status --format=json</span>
            </div>
            <div class="text-slate-400 grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-800/80">
              <div>• Cluster Status: <span class="text-emerald-400 font-semibold">HEALTHY (100%)</span></div>
              <div>• Edge CDN: <span class="text-cyan-300">GitHub Pages / Global PoP</span></div>
              <div>• Primary Domain: <span class="text-slate-200">coniteck.cc</span></div>
              <div>• Active Sub-Nodes: <span class="text-emerald-400">${primaryServices.length} Deployed</span></div>
            </div>

            <!-- Interactive quick links inside terminal -->
            <div class="pt-3 border-t border-slate-800/80">
              <div class="text-slate-400 mb-2">Connected Mesh Endpoints:</div>
              <div class="flex flex-wrap gap-2">
                ${primaryServices.map(service => `
                  <a 
                    href="${service.url}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="px-2.5 py-1 rounded bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 hover:text-cyan-300 text-slate-300 transition-all flex items-center gap-1.5"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>${service.domain}</span>
                    ${getServiceIcon('external', 'w-3 h-3 text-slate-500')}
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
