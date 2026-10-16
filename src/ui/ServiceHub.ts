import { SUB_SERVICES } from '../data/services.data.ts';
import { getServiceIcon } from './Icons.ts';

/**
 * 페이지 본문의 공식 서브 프로젝트 허브 섹션 렌더링
 */
export function renderServicesHubSection(): string {
  return `
    <section id="services-hub" class="py-24 relative z-10 border-t border-slate-900 cyber-grid-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Title -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
              <span>CONNECTED ECOSYSTEM</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              패밀리 서비스 & 서브 프로젝트 허브
            </h2>
            <p class="mt-2 text-slate-400 text-sm max-w-xl">
              coniteck 생태계의 모든 독립 웹 애플리케이션 노드로 연결되는 중앙 디렉터리입니다.
            </p>
          </div>
          <div class="mt-4 md:mt-0 font-mono text-xs text-slate-400">
            Active Sub-Domains: <span class="text-emerald-400 font-bold">${SUB_SERVICES.length} Registered</span>
          </div>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${SUB_SERVICES.map(service => {
            const isLive = service.status === 'live';
            const badgeBg = isLive 
              ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/30' 
              : 'bg-purple-950/80 text-purple-400 border-purple-500/30';

            return `
              <div class="glass-panel glass-panel-hover rounded-xl p-5 flex flex-col justify-between border-slate-800 relative group overflow-hidden">
                <div class="relative z-10">
                  <div class="flex items-start justify-between mb-4">
                    <div class="w-10 h-10 rounded-lg bg-slate-900/90 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-neon-cyan transition-all">
                      ${getServiceIcon(service.iconType, 'w-5 h-5')}
                    </div>
                    <span class="px-2 py-0.5 rounded text-[10px] font-mono border ${badgeBg}">
                      ${service.badgeText}
                    </span>
                  </div>

                  <h3 class="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    ${service.name}
                  </h3>
                  <div class="text-xs font-mono text-cyan-400/80 mb-2">
                    ${service.domain}
                  </div>
                  <p class="text-xs text-slate-400 leading-relaxed mb-4">
                    ${service.description}
                  </p>
                </div>

                <div class="pt-3 border-t border-slate-800/80 relative z-10">
                  ${isLive ? `
                    <a 
                      href="${service.url}" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="inline-flex items-center justify-between w-full text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors py-1 group/btn"
                    >
                      <span class="flex items-center gap-1.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>방문하기</span>
                      </span>
                      ${getServiceIcon('external', 'w-3.5 h-3.5 text-slate-500 group-hover/btn:text-cyan-300 transition-colors')}
                    </a>
                  ` : `
                    <div class="flex items-center justify-between text-xs font-mono text-slate-500 py-1">
                      <span>개발 진행 중</span>
                      <span class="text-[10px]">SOON</span>
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
 * 화면 우측 하단에 고정되는 컴팩트한 모서리 플로팅 미니 허브 위젯 (Floating Corner Widget)
 */
export function renderFloatingHubWidget(): string {
  const liveCount = SUB_SERVICES.filter(s => s.status === 'live').length;

  return `
    <div id="floating-hub-container" class="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      <!-- Expanded Popover Panel (Hidden by default, toggled via JS) -->
      <div 
        id="floating-hub-panel" 
        class="hidden mb-3 w-80 sm:w-96 rounded-2xl glass-panel bg-slate-950/95 border border-cyan-500/30 shadow-2xl p-4 transition-all duration-300 transform origin-bottom-right"
        role="dialog"
        aria-label="서브 프로젝트 바로가기 패널"
      >
        <!-- Panel Header -->
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-cyan-500/20">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-neon-cyan"></span>
            <span class="font-mono font-bold text-xs text-white uppercase tracking-wider">coniteck Hub</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-500/30">
              ${liveCount} NODES
            </span>
            <button 
              id="floating-hub-close-btn"
              class="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
              aria-label="허브 닫기"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Micro Service Links -->
        <div class="space-y-2 max-h-[360px] overflow-y-auto pr-1">
          ${SUB_SERVICES.map(service => {
            const isLive = service.status === 'live';

            if (!isLive) {
              return `
                <div class="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between opacity-60">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-500">
                      ${getServiceIcon(service.iconType, 'w-4 h-4')}
                    </div>
                    <div>
                      <div class="text-xs font-semibold text-slate-400">${service.name}</div>
                      <div class="text-[10px] font-mono text-slate-500">${service.domain}</div>
                    </div>
                  </div>
                  <span class="text-[9px] font-mono text-purple-400 px-1.5 py-0.5 bg-purple-950 rounded">SOON</span>
                </div>
              `;
            }

            return `
              <a 
                href="${service.url}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="p-2.5 rounded-lg bg-slate-900/70 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between group transition-all"
              >
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                    ${getServiceIcon(service.iconType, 'w-4 h-4')}
                  </div>
                  <div class="text-left">
                    <div class="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                      <span>${service.name}</span>
                      <span class="text-[10px] font-normal text-slate-400 hidden xs:inline">(${service.tagline})</span>
                    </div>
                    <div class="text-[10px] font-mono text-cyan-400/90">${service.domain}</div>
                  </div>
                </div>
                ${getServiceIcon('external', 'w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 transition-colors')}
              </a>
            `;
          }).join('')}
        </div>

        <div class="mt-3 pt-2 border-t border-slate-800 text-[10px] font-mono text-center text-slate-500">
          coniteck Distributed Nodes • coniteck.cc
        </div>
      </div>

      <!-- Trigger Button (Compact Floating Pill / Badge) -->
      <button 
        id="floating-hub-toggle-btn"
        class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-slate-950/90 border border-cyan-400/50 hover:border-cyan-300 text-slate-100 shadow-neon-cyan hover:shadow-cyan-500/50 transition-all duration-300 group"
        aria-label="서브 프로젝트 허브 열기/닫기"
      >
        <div class="relative flex items-center justify-center">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping absolute"></span>
          <span class="w-2 h-2 rounded-full bg-emerald-400 relative"></span>
        </div>
        <div class="flex items-center gap-1.5 font-mono text-xs font-medium">
          ${getServiceIcon('hub', 'w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform')}
          <span>Sub-Projects</span>
        </div>
        <span class="px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
          ${liveCount}
        </span>
      </button>
    </div>
  `;
}
