import { COMPANY_INFO, getServices } from '../data/services.data.ts';
import { getLanguage, getI18n } from '../data/i18n.store.ts';
import { getBrandLogoSymbol } from './Icons.ts';

export function renderFooter(): string {
  const currentYear = new Date().getFullYear();
  const lang = getLanguage();
  const t = getI18n();
  const services = getServices(lang);

  return `
    <footer class="border-t border-white/[0.08] bg-[#080d19] text-slate-400 py-10 sm:py-12 text-sm relative z-10 pb-20 sm:pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <!-- Column 1: Brand Info -->
          <div class="md:col-span-2 space-y-3">
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">
                ${getBrandLogoSymbol('w-4 h-4 text-blue-400')}
              </div>
              <span class="font-bold text-base text-white tracking-tight">
                ${COMPANY_INFO.name}
              </span>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed max-w-md break-keep">
              ${t.footer.description}
            </p>
            <div class="text-xs text-slate-400">
              ${t.footer.officialWebsite}: <span class="text-slate-300">${COMPANY_INFO.domain}</span>
            </div>
          </div>

          <!-- Column 2: Sub-Services Quick Directory -->
          <div>
            <h4 class="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              ${t.footer.familyTitle}
            </h4>
            <ul class="space-y-2 text-xs">
              ${services.map(service => `
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
              ${t.footer.archTitle}
            </h4>
            <ul class="space-y-2 text-xs text-slate-400">
              ${t.footer.archItems.map(item => `
                <li class="break-keep">• ${item}</li>
              `).join('')}
            </ul>
          </div>
        </div>

        <div class="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © ${currentYear} ${COMPANY_INFO.fullName}. ${t.footer.rights}
          </div>
          <div class="flex items-center gap-3">
            <span class="text-slate-400">${t.footer.hostingNote}</span>
            <span>•</span>
            <a href="https://github.com/Git-Coni/git-coni.github.io" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
              ${t.footer.repo}
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
