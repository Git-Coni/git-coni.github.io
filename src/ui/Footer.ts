import { COMPANY_INFO, SUB_SERVICES } from '../data/services.data.ts';

export function renderFooter(): string {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="border-t border-slate-900 bg-slate-950 text-slate-400 py-14 text-sm relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <!-- Column 1: Brand Info -->
          <div class="md:col-span-2 space-y-4">
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm">
                C
              </div>
              <span class="font-mono font-bold text-base text-white tracking-tight">
                ${COMPANY_INFO.name}
              </span>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed max-w-md">
              ${COMPANY_INFO.description}
            </p>
            <div class="text-xs font-mono text-cyan-400/80">
              Primary Gateway: <span class="text-slate-200">coniteck.cc</span> (CNAME: www.coniteck.cc)
            </div>
          </div>

          <!-- Column 2: Sub-Services Quick Directory -->
          <div>
            <h4 class="font-mono text-xs uppercase tracking-wider text-slate-200 mb-4 font-semibold">
              Family Networks
            </h4>
            <ul class="space-y-2 text-xs font-mono">
              ${SUB_SERVICES.map(service => `
                <li>
                  <a 
                    href="${service.url}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <span class="w-1 h-1 rounded-full ${service.status === 'live' ? 'bg-emerald-400' : 'bg-purple-400'}"></span>
                    <span>${service.domain}</span>
                  </a>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Column 3: Tech Stack & Architecture -->
          <div>
            <h4 class="font-mono text-xs uppercase tracking-wider text-slate-200 mb-4 font-semibold">
              Architecture
            </h4>
            <ul class="space-y-2 text-xs text-slate-400">
              <li>• GitHub Pages Pure Static CDN</li>
              <li>• TypeScript & Vite Pipeline</li>
              <li>• Modular SSOT Data Architecture</li>
              <li>• Zero Daemon / Low-Resource Edge</li>
            </ul>
          </div>
        </div>

        <div class="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>
            © ${currentYear} ${COMPANY_INFO.fullName}. All rights reserved.
          </div>
          <div class="flex items-center gap-4">
            <span class="text-emerald-400/90 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>All Systems Nominal</span>
            </span>
            <span>•</span>
            <a href="https://github.com/Git-Coni/git-coni.github.io" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 transition-colors">
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
