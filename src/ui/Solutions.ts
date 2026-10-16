import { SUB_SERVICES } from '../data/services.data.ts';
import { getServiceIcon } from './Icons.ts';

export function renderSolutions(): string {
  const finService = SUB_SERVICES.find(s => s.id === 'fin-dashboard');
  const exoService = SUB_SERVICES.find(s => s.id === 'exo-world');
  const testService = SUB_SERVICES.find(s => s.id === 'test-platform');

  return `
    <section id="solutions" class="py-24 relative z-10 border-t border-slate-900 bg-slate-950/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <span>ENGINEERING DIVISIONS</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            가상 엔지니어링 핵심 솔루션
          </h2>
          <p class="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            coniteck은 분산형 프론트엔드 아키텍처와 독립형 서브 서비스를 통해 실용적이면서도 혁신적인 웹 솔루션을 연구하고 제공합니다.
          </p>
        </div>

        <!-- 3 Pillars Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1: FinTech & Asset Monitoring -->
          <div class="glass-panel glass-panel-hover rounded-xl p-6 flex flex-col justify-between border-emerald-500/20 group">
            <div>
              <div class="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 group-hover:border-emerald-400 transition-all">
                ${getServiceIcon('finance', 'w-6 h-6')}
              </div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-mono text-emerald-400 uppercase tracking-wider">Financial Engine</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-500/30">ONLINE</span>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">자산 현황 & 금융 분석 대시보드</h3>
              <p class="text-sm text-slate-300 leading-relaxed mb-6">
                실시간 자산 변동, 포트폴리오 가치 및 수입/지출 내역을 시각화하는 고성능 개인 자산 통계 대시보드 시스템입니다.
              </p>
            </div>
            
            <div class="pt-4 border-t border-slate-800">
              <a 
                href="${finService?.url || '#'}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono transition-all group-hover:border-emerald-400"
              >
                <span>Launch ${finService?.domain || 'fin.coniteck.cc'}</span>
                ${getServiceIcon('external', 'w-4 h-4 text-emerald-400')}
              </a>
            </div>
          </div>

          <!-- Card 2: Interactive Web Game -->
          <div class="glass-panel glass-panel-hover rounded-xl p-6 flex flex-col justify-between border-cyan-500/20 group">
            <div>
              <div class="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                ${getServiceIcon('game', 'w-6 h-6')}
              </div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-mono text-cyan-400 uppercase tracking-wider">Interactive Gaming</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">ONLINE</span>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">ExoWorld 웹 게임</h3>
              <p class="text-sm text-slate-300 leading-relaxed mb-6">
                설치 없이 웹 브라우저 표준 기술을 바탕으로 구동되는 가상 Sci-Fi 인터랙티브 시뮬레이션 및 전략 엔터테인먼트 엔진입니다.
              </p>
            </div>
            
            <div class="pt-4 border-t border-slate-800">
              <a 
                href="${exoService?.url || '#'}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono transition-all group-hover:border-cyan-400"
              >
                <span>Launch ${exoService?.domain || 'exo.coniteck.cc'}</span>
                ${getServiceIcon('external', 'w-4 h-4 text-cyan-400')}
              </a>
            </div>
          </div>

          <!-- Card 3: Psychometrics Platform -->
          <div class="glass-panel glass-panel-hover rounded-xl p-6 flex flex-col justify-between border-indigo-500/20 group">
            <div>
              <div class="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-105 group-hover:border-indigo-400 transition-all">
                ${getServiceIcon('psychology', 'w-6 h-6')}
              </div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-mono text-indigo-400 uppercase tracking-wider">Psychometrics</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-950 text-indigo-300 border border-indigo-500/30">ONLINE</span>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">성향 진단 & 분석 플랫폼</h3>
              <p class="text-sm text-slate-300 leading-relaxed mb-6">
                테토-에겐 및 심리 성향 진단 알고리즘을 통해 사용자의 행동 패턴과 성향을 명확하게 도출하는 인터랙티브 웹 테스트입니다.
              </p>
            </div>
            
            <div class="pt-4 border-t border-slate-800">
              <a 
                href="${testService?.url || '#'}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-mono transition-all group-hover:border-indigo-400"
              >
                <span>Launch ${testService?.domain || 'test.coniteck.cc'}</span>
                ${getServiceIcon('external', 'w-4 h-4 text-indigo-400')}
              </a>
            </div>
          </div>
        </div>

        <!-- Architecture Feature Highlights -->
        <div id="architecture" class="mt-20 glass-panel rounded-2xl p-8 border border-slate-800">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div class="lg:col-span-1">
              <span class="text-xs font-mono text-cyan-400 tracking-wider uppercase">High Performance Web</span>
              <h3 class="text-2xl font-bold text-white mt-1">Zero-Backend, Pure Edge Architecture</h3>
              <p class="mt-3 text-slate-400 text-sm leading-relaxed">
                정적 호스팅 환경(GitHub Pages)에 최적화된 빌드 무결성을 유지하며, 글로벌 CDN을 통한 밀리초 단위 초저지연 로딩을 실현합니다.
              </p>
            </div>
            <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <div class="flex items-center gap-2 text-cyan-400 font-mono text-sm font-semibold mb-1">
                  ${getServiceIcon('check', 'w-4 h-4')}
                  <span>데이터 레이어 SSOT 분리</span>
                </div>
                <p class="text-xs text-slate-400">
                  모든 서브 서비스 메타데이터를 <code class="text-cyan-300">data/</code> 레이어에서 전역 관리하여 손쉬운 확장성을 보장합니다.
                </p>
              </div>
              <div class="p-4 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <div class="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold mb-1">
                  ${getServiceIcon('check', 'w-4 h-4')}
                  <span>Type-Safe TypeScript</span>
                </div>
                <p class="text-xs text-slate-400">
                  엄격한 타입 시스템을 적용하여 런타임 오류를 원천 차단하고 컴파일 시점의 안전성을 극대화합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
