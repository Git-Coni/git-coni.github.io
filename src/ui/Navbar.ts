import { COMPANY_INFO, SUB_SERVICES } from '../data/services.data.ts';
import { getServiceIcon } from './Icons.ts';

export function renderNavbar(): string {
  const liveCount = SUB_SERVICES.filter(s => s.status === 'live').length;

  return `
    <header class="fixed top-0 left-0 right-0 z-40 glass-panel border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Brand Logo -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-300 group-hover:shadow-neon-cyan transition-all">
            <span class="font-mono font-bold text-lg tracking-wider">C</span>
          </div>
          <div class="flex flex-col">
            <span class="font-mono font-bold text-lg text-slate-100 tracking-tight flex items-center gap-1">
              ${COMPANY_INFO.name}<span class="text-cyan-400 animate-pulse">_</span>
            </span>
            <span class="text-[10px] uppercase font-mono text-cyan-400/80 tracking-widest -mt-1">SYSTEMS LAB</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#solutions" class="hover:text-cyan-400 transition-colors">Core Solutions</a>
          <a href="#architecture" class="hover:text-cyan-400 transition-colors">Architecture</a>
          <a href="#services-hub" class="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <span>Ecosystem</span>
            <span class="px-1.5 py-0.5 text-[10px] font-mono rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
              ${liveCount} LIVE
            </span>
          </a>
        </nav>

        <!-- Right Side: System Status & Mini Hub Trigger Button -->
        <div class="flex items-center gap-3">
          <!-- Operational Pulse Indicator -->
          <div class="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>NODES ONLINE</span>
          </div>

          <!-- Header Hub Widget Trigger Button -->
          <button 
            id="nav-hub-trigger-btn"
            class="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 hover:border-cyan-400 transition-all text-xs font-mono group"
            aria-label="서브 프로젝트 허브 열기"
          >
            ${getServiceIcon('hub', 'w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform')}
            <span class="hidden xs:inline">Hub</span>
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          </button>
        </div>
      </div>
    </header>
  `;
}
