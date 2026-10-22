import React from 'react';
import { PageType } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Globe, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F8FAFC] text-slate-600 border-t border-slate-200/80">
      
      {/* Top Banner Callout */}
      <div className="border-b border-slate-200 bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-sm tracking-tight">{t.footer.isoTitle}</h4>
              <p className="text-slate-600 text-xs mt-0.5">{t.footer.isoDesc}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.footer.ndaBadge}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.footer.globalLangBadge}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 p-[1px] shadow-xs">
                <div className="w-full h-full bg-blue-600 rounded-[7px] flex items-center justify-center">
                  <span className="text-white font-extrabold text-sm leading-none">T</span>
                </div>
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">
                TRIX <span className="text-blue-600 font-semibold">Translate</span>
              </span>
            </div>
            <p className="text-slate-700 font-semibold text-xs">
              "{t.footer.tagline}"
            </p>
            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h5 className="text-slate-900 font-bold text-xs tracking-wider uppercase mb-3">
              {t.footer.quickLinks}
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => handleNav('home')}
                  className="hover:text-blue-600 transition-colors text-slate-600 cursor-pointer font-medium"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')}
                  className="hover:text-blue-600 transition-colors text-slate-600 cursor-pointer font-medium"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('quote')}
                  className="hover:text-blue-600 transition-colors text-slate-600 cursor-pointer font-medium"
                >
                  {t.nav.quote}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('faq')}
                  className="hover:text-blue-600 transition-colors text-slate-600 cursor-pointer font-medium"
                >
                  {t.nav.faq}
                </button>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h5 className="text-slate-900 font-bold text-xs tracking-wider uppercase mb-3">
              {t.footer.servicesTitle}
            </h5>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              {t.services.items.map((s) => (
                <li key={s.id}>
                  <button 
                    onClick={() => handleNav('services')}
                    className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <div>
            {t.footer.rights}
          </div>
          <div className="flex items-center gap-5">
            <span className="hover:text-blue-600 transition-colors cursor-pointer">{t.footer.privacy}</span>
            <span className="hover:text-blue-600 transition-colors cursor-pointer">{t.footer.terms}</span>
            <span className="hover:text-blue-600 transition-colors cursor-pointer">{t.footer.security}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
