import React from 'react';
import { PageType } from '../types';
import { Globe, Mail, Phone, MapPin, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Footer Callout */}
      <div className="border-b border-slate-800/80 bg-slate-950/50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">ISO 17100 국제 번역 품질 인증</h4>
              <p className="text-slate-400 text-xs mt-0.5">전문 원어민 2단계 크로스 감수, 철저한 용어집 작성, 100% 비밀유지 보장.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>철저한 비밀유지계약 (NDA) 체결</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>전 세계 50개 이상 주요 언어 지원</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                TRIX <span className="text-blue-500">Translate</span>
              </span>
            </div>
            <p className="text-slate-300 font-semibold text-sm italic">
              "언어의 한계를 넘어 글로벌 가치를 전달합니다."
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              글로벌 비즈니스 및 개인 고객을 위한 전문 번역, 원어민 감수, 웹/앱 현지화 서비스를 제공하는 글로컬리제이션 전문 기관입니다.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h5 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-slate-200">
              메뉴
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('home')}
                  className="hover:text-blue-400 transition-colors text-slate-300 cursor-pointer"
                >
                  홈 (Home)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')}
                  className="hover:text-blue-400 transition-colors text-slate-300 cursor-pointer"
                >
                  서비스 안내 (Services)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('quote')}
                  className="hover:text-blue-400 transition-colors text-slate-300 cursor-pointer"
                >
                  무료 견적 문의 (Free Quote)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('faq')}
                  className="hover:text-blue-400 transition-colors text-slate-300 cursor-pointer"
                >
                  자주 묻는 질문 (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div>
            <h5 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-slate-200">
              제공 서비스
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>전문 문서 번역 (Document Translation)</li>
              <li>원어민 감수 & 교정 (Proofreading)</li>
              <li>소프트웨어 & 앱/웹 현지화 (Localization)</li>
              <li>상품 상세페이지 & 이커머스 번역</li>
              <li>기업 마케팅 & 홍보물 번역</li>
              <li>다국어 엔터프라이즈 전략 컨설팅</li>
            </ul>
          </div>

          {/* Global Operations & Contact */}
          <div>
            <h5 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-slate-200">
              글로벌 고객 지원
            </h5>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>글로벌 허브: 서울 • 뉴욕 • 런던 • 도쿄 • 싱가포르</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>contact@trixtranslate.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>02-555-TRIX (한국 직통)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-400 font-medium uppercase tracking-widest gap-4">
          <div>
            © 2026 TRIX Translate. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">개인정보 처리방침</span>
            <span className="hover:text-slate-300 cursor-pointer">이용약관</span>
            <span className="hover:text-slate-300 cursor-pointer">글로벌 지사 안내</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
