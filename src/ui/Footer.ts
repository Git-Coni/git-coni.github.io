import { COMPANY_INFO, SUB_SERVICES } from '../data/services.data.ts';

export function renderFooter(): string {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="border-t border-white/[0.08] bg-[#080d19] text-slate-400 py-12 text-sm relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <!-- Column 1: Brand Info -->
          <div class="md:col-span-2 space-y-3">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">
                c
              </div>
              <span class="font-bold text-base text-white tracking-tight">
                ${COMPANY_INFO.name}
              </span>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed max-w-md">
              ${COMPANY_INFO.description}
            </p>
            <div class="text-xs text-slate-400">
              공식 웹사이트: <span class="text-slate-300">coniteck.cc</span>
            </div>
          </div>

          <!-- Column 2: Sub-Services Quick Directory -->
          <div>
            <h4 class="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              패밀리 서비스
            </h4>
            <ul class="space-y-2 text-xs">
              ${SUB_SERVICES.map(service => `
                <li>
                  <a 
                    href="${service.url}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400"
                  >
                    <span class="w-1.5 h-1.5 rounded-full ${service.status === 'live' ? 'bg-emerald-500' : 'bg-slate-600'}"></span>
                    <span>${service.name}</span>
                    <span class="text-[10px] text-slate-500 font-mono">(${service.domain})</span>
                  </a>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Column 3: Tech Stack & Architecture -->
          <div>
            <h4 class="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              기술 아키텍처
            </h4>
            <ul class="space-y-2 text-xs text-slate-400">
              <li>• 고성능 정적 웹 아키텍처 (Vite & TypeScript)</li>
              <li>• 글로벌 엣지 CDN 무중단 분산 배포</li>
              <li>• 모듈형 SSOT 데이터 레이어 관리</li>
              <li>• 서버리스 Zero-Daemon 환경</li>
            </ul>
          </div>
        </div>

        <div class="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © ${currentYear} ${COMPANY_INFO.fullName}. All rights reserved.
          </div>
          <div class="flex items-center gap-3">
            <span class="text-slate-400">정적 호스팅 (GitHub Pages)</span>
            <span>•</span>
            <a href="https://github.com/Git-Coni/git-coni.github.io" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
              GitHub 저장소
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
