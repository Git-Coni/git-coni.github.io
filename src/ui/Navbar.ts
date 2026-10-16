import { COMPANY_INFO, SUB_SERVICES } from '../data/services.data.ts';
import { getServiceIcon } from './Icons.ts';

export function renderNavbar(): string {
  const liveCount = SUB_SERVICES.filter(s => s.status === 'live').length;

  return `
    <header class="fixed top-0 left-0 right-0 z-40 bg-[#0a0f1d]/90 backdrop-blur-md border-b border-white/[0.08]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Brand Logo -->
        <a href="#" class="flex items-center gap-2.5 group">
          <div class="w-8 h-8 rounded-md bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-semibold text-sm group-hover:bg-blue-600/20 transition-colors">
            c
          </div>
          <span class="font-bold text-lg text-slate-100 tracking-tight">
            ${COMPANY_INFO.name}
          </span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#about" class="hover:text-slate-100 transition-colors">기업 소개</a>
          <a href="#solutions" class="hover:text-slate-100 transition-colors">핵심 솔루션</a>
          <a href="#services-hub" class="hover:text-slate-100 transition-colors flex items-center gap-2">
            <span>패밀리 서비스</span>
            <span class="px-1.5 py-0.5 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              ${liveCount}
            </span>
          </a>
        </nav>

        <!-- Right Side: Mini Hub Trigger Button -->
        <div class="flex items-center gap-3">
          <button 
            id="nav-hub-trigger-btn"
            class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600 transition-all text-xs font-medium"
            aria-label="패밀리 서비스 바로가기"
          >
            ${getServiceIcon('hub', 'w-3.5 h-3.5 text-slate-400')}
            <span>패밀리 사이트</span>
          </button>
        </div>
      </div>
    </header>
  `;
}
