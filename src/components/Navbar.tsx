import React, { useState, useRef, useEffect } from 'react';
import { PageType } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';
import { 
  Globe, 
  Menu, 
  X, 
  Search, 
  ShieldCheck, 
  Clock, 
  ChevronDown, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  savedQuotesCount: number;
  onOpenTracker: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenTracker
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'quote', label: t.nav.quote },
    { id: 'faq', label: t.nav.faq }
  ];

  const languagesList: { code: Language; label: string; flag: string; region: string }[] = [
    { code: 'ko', label: '한국어', flag: 'KR', region: '대한민국' },
    { code: 'en', label: 'English', flag: 'US', region: 'Global' },
    { code: 'ja', label: '日本語', flag: 'JP', region: '日本' },
    { code: 'zh', label: '中文', flag: 'CN', region: '中国' },
    { code: 'es', label: 'Español', flag: 'ES', region: 'España / LatAm' }
  ];

  const currentLangObj = languagesList.find(l => l.code === language) || languagesList[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLanguage = (code: Language) => {
    setLanguage(code);
    setLangDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#EEF4FF] text-slate-600 text-xs py-1.5 px-4 border-b border-blue-100/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white text-blue-700 font-semibold text-[11px] border border-blue-200/80 shadow-xs">
              <ShieldCheck className="w-3 h-3 text-blue-600" />
              {t.nav.isoBadge}
            </span>
            <span className="hidden md:inline text-blue-200">|</span>
            <span className="hidden md:inline text-slate-600 text-[11px] font-medium">{t.nav.tagline}</span>
          </div>
          
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-slate-600 hidden sm:inline-flex items-center gap-1.5 font-medium">
              <Clock className="w-3 h-3 text-blue-600" />
              <span>{t.nav.slaNotice}</span>
            </span>
            <span className="text-blue-200 hidden sm:inline">|</span>
            <button
              onClick={onOpenTracker}
              className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-600 font-semibold transition-colors cursor-pointer"
            >
              <Search className="w-3 h-3 text-blue-600" />
              <span>{t.nav.trackQuote}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo - Windly Clean Minimal Aesthetic */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 p-[1px] shadow-sm shadow-blue-500/20">
              <div className="w-full h-full bg-blue-600 rounded-[7px] flex items-center justify-center">
                <span className="text-white font-extrabold text-base leading-none">T</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-bold tracking-tight text-slate-900 flex items-center gap-1">
                <span>TRIX</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold">
                  Translate
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/80 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons & Language Switcher Dropdown */}
          <div className="hidden md:flex items-center gap-2.5">
            
            {/* Language Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-xs transition-all cursor-pointer"
                aria-label={t.nav.selectLanguage}
              >
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span className="font-semibold">{currentLangObj.label}</span>
                <ChevronDown className={`w-3 h-3 text-slate-500 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-44 rounded-xl bg-white border border-slate-200 shadow-xl py-1.5 z-50 text-xs animate-fadeIn">
                  <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100 mb-1">
                    {t.nav.selectLanguage}
                  </div>
                  {languagesList.map((item) => {
                    const isSelected = item.code === language;
                    return (
                      <button
                        key={item.code}
                        onClick={() => handleSelectLanguage(item.code)}
                        className={`w-full text-left px-3 py-2 flex items-center justify-between transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 text-blue-600 font-bold'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold border border-slate-200/60">
                            {item.flag}
                          </span>
                          <span>{item.label}</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-blue-600" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Track Quote Modal Button */}
            <button
              onClick={onOpenTracker}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 hover:text-blue-600 rounded-lg border border-slate-200 hover:border-slate-300 shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Search className="w-3 h-3 text-slate-500" />
              <span>{t.nav.trackQuote}</span>
            </button>

            {/* Request Quote Primary Action */}
            <button
              onClick={() => handleNavClick('quote')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-sm shadow-blue-500/25 transition-all flex items-center gap-1.5 cursor-pointer active:scale-[0.98]"
            >
              <Sparkles className="w-3 h-3 text-blue-200" />
              <span>{t.nav.requestQuote}</span>
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="md:hidden flex items-center gap-2">
            
            {/* Mobile Compact Language Switcher */}
            <button
              onClick={() => {
                const langCodes: Language[] = ['ko', 'en', 'ja', 'zh', 'es'];
                const nextIdx = (langCodes.indexOf(language) + 1) % langCodes.length;
                setLanguage(langCodes[nextIdx]);
              }}
              className="px-2 py-1 rounded-md text-[11px] font-bold bg-white border border-slate-200 text-blue-600 flex items-center gap-1 shadow-xs"
            >
              <Globe className="w-3 h-3" />
              <span>{currentLangObj.flag}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-fadeIn shadow-lg">
          
          {/* Navigation Links */}
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-blue-50 text-blue-600 font-bold border border-blue-100'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.id && <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>}
              </button>
            ))}
          </div>

          {/* Mobile Language Selector Row */}
          <div className="pt-2 border-t border-slate-100">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-2 px-1">
              {t.nav.selectLanguage}
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {languagesList.map((item) => (
                <button
                  key={item.code}
                  onClick={() => handleSelectLanguage(item.code)}
                  className={`py-2 px-1 text-center rounded-lg text-[11px] font-semibold transition-all ${
                    item.code === language
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTracker();
              }}
              className="w-full py-2.5 px-4 text-center text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-xs"
            >
              <Search className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.nav.trackQuote}</span>
            </button>

            <button
              onClick={() => handleNavClick('quote')}
              className="w-full py-3 px-4 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-bold shadow-sm shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <span>{t.nav.requestQuote}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
