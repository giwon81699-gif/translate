import React, { useState } from 'react';
import { PageType } from '../types';
import { 
  Globe, 
  Menu, 
  X, 
  Search, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  Clock,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  savedQuotesCount: number;
  onOpenTracker: () => void;
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  savedQuotesCount,
  onOpenTracker,
  onOpenEstimator
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: '홈' },
    { id: 'services', label: '전문 서비스' },
    { id: 'quote', label: '무료 견적 문의' },
    { id: 'faq', label: 'FAQ' }
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-semibold text-[11px] border border-blue-500/30">
              <ShieldCheck className="w-3.5 h-3.5" /> ISO 17100 국제 인증
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">글로벌 다국어 전문 번역 & 현지화 파트너</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenEstimator}
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors font-medium text-xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" /> 실시간 단어수/비용 계산기
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={onOpenTracker}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>신청 내역 조회</span>
              {savedQuotesCount > 0 && (
                <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {savedQuotesCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center transition-colors group-hover:bg-blue-700">
              <span className="text-white font-bold text-xl leading-none">T</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800 uppercase">
              TRIX <span className="text-blue-600">Translate</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 uppercase tracking-wide">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors cursor-pointer py-1 ${
                    isActive
                      ? 'text-blue-600 font-bold border-b-2 border-blue-600'
                      : 'hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenTracker}
              className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span>견적 조회</span>
            </button>

            <button
              onClick={() => handleNavClick('quote')}
              className="bg-blue-600 text-white px-5 py-2 rounded text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors uppercase cursor-pointer"
            >
              무료 견적 문의
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.id && <div className="w-2 h-2 rounded-full bg-blue-600"></div>}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTracker();
              }}
              className="w-full py-2.5 px-4 text-center text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>신청 내역 조회 ({savedQuotesCount})</span>
            </button>

            <button
              onClick={() => handleNavClick('quote')}
              className="w-full py-3 px-4 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-bold shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              <span>무료 견적 문의</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
