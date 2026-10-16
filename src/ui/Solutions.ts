import { COMPANY_INFO, SUB_SERVICES } from '../data/services.data.ts';
import { getServiceIcon } from './Icons.ts';

export function renderSolutions(): string {
  const finService = SUB_SERVICES.find(s => s.id === 'fin-dashboard');
  const exoService = SUB_SERVICES.find(s => s.id === 'exo-world');
  const testService = SUB_SERVICES.find(s => s.id === 'test-platform');

  return `
    <section id="solutions" class="py-20 md:py-28 relative z-10 border-t border-white/[0.08] bg-[#0d1326]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="max-w-3xl mb-16">
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-950/60 border border-blue-800/40 text-xs font-medium text-blue-400 mb-3">
            <span>핵심 사업 영역</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            전문성과 안정성에 기반한 핵심 서비스
          </h2>
          <p class="mt-4 text-slate-400 text-base leading-relaxed">
            coniteck은 고도화된 정적 웹 인프라를 바탕으로 자산 관리, 브라우저 인터랙션, 데이터 분석 영역에서 독자적인 웹 솔루션을 구축하고 있습니다.
          </p>
        </div>

        <!-- 3 Pillars Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Card 1: FinTech & Asset Monitoring -->
          <div class="corporate-card rounded-xl p-7 flex flex-col justify-between group">
            <div>
              <div class="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                ${getServiceIcon('finance', 'w-6 h-6')}
              </div>
              <div class="text-xs font-semibold text-blue-400 tracking-wide uppercase mb-2">
                FinTech & Asset Management
              </div>
              <h3 class="text-xl font-bold text-white mb-3 tracking-tight">
                자산 현황 대시보드
              </h3>
              <p class="text-sm text-slate-400 leading-relaxed mb-6">
                분산된 개인 금융 자산과 현금 흐름을 시각화하고 안정적으로 모니터링할 수 있는 경량 자산 관리 대시보드 플랫폼입니다.
              </p>
            </div>
            
            <div class="pt-5 border-t border-white/[0.06]">
              <a 
                href="${finService?.url || '#'}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 text-xs font-medium transition-colors"
              >
                <span>${finService?.name || 'FinConi'} 바로가기</span>
                ${getServiceIcon('external', 'w-3.5 h-3.5 text-slate-400')}
              </a>
            </div>
          </div>

          <!-- Card 2: Interactive Web Game -->
          <div class="corporate-card rounded-xl p-7 flex flex-col justify-between group">
            <div>
              <div class="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-6">
                ${getServiceIcon('game', 'w-6 h-6')}
              </div>
              <div class="text-xs font-semibold text-sky-400 tracking-wide uppercase mb-2">
                Interactive Entertainment
              </div>
              <h3 class="text-xl font-bold text-white mb-3 tracking-tight">
                인터랙티브 웹 게임
              </h3>
              <p class="text-sm text-slate-400 leading-relaxed mb-6">
                웹 표준 기술로 구현되어 크로스 플랫폼에서 지연 없이 부드럽게 작동하는 전략형 브라우저 인터랙티브 게임 환경입니다.
              </p>
            </div>
            
            <div class="pt-5 border-t border-white/[0.06]">
              <a 
                href="${exoService?.url || '#'}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 text-xs font-medium transition-colors"
              >
                <span>${exoService?.name || 'ExoWorld'} 바로가기</span>
                ${getServiceIcon('external', 'w-3.5 h-3.5 text-slate-400')}
              </a>
            </div>
          </div>

          <!-- Card 3: Psychometrics Platform -->
          <div class="corporate-card rounded-xl p-7 flex flex-col justify-between group">
            <div>
              <div class="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                ${getServiceIcon('psychology', 'w-6 h-6')}
              </div>
              <div class="text-xs font-semibold text-indigo-400 tracking-wide uppercase mb-2">
                Behavioral Data Analytics
              </div>
              <h3 class="text-xl font-bold text-white mb-3 tracking-tight">
                심리 성향 분석 테스트
              </h3>
              <p class="text-sm text-slate-400 leading-relaxed mb-6">
                사용자 반응과 정량적 데이터 모델을 결합하여 개인의 성향과 행동 양식을 명확하게 도출하는 분석 솔루션입니다.
              </p>
            </div>
            
            <div class="pt-5 border-t border-white/[0.06]">
              <a 
                href="${testService?.url || '#'}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 text-xs font-medium transition-colors"
              >
                <span>${testService?.name || 'Teto-Egen'} 바로가기</span>
                ${getServiceIcon('external', 'w-3.5 h-3.5 text-slate-400')}
              </a>
            </div>
          </div>
        </div>

        <!-- Corporate Principles Section -->
        <div class="mt-16 p-8 rounded-xl corporate-panel">
          <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Engineering Principles
          </div>
          <h3 class="text-2xl font-bold text-white mb-8">
            coniteck이 지향하는 엔지니어링 가치
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${COMPANY_INFO.principles.map(principle => `
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-slate-200 font-semibold text-sm">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span>${principle.title}</span>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">
                  ${principle.description}
                </p>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </section>
  `;
}
