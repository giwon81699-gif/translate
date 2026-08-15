import React from 'react';
import { PageType } from '../types';
import { SERVICES_DATA, WHY_US_FEATURES, TESTIMONIALS } from '../data/mockData';
import { TranslationSampleDemo } from '../components/TranslationSampleDemo';
import { 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  Zap,
  ChevronRight,
  Calculator
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType, servicePreselect?: string) => void;
  onOpenEstimator: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEstimator }) => {
  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Background Grids & Glow */}
        <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text Column */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>글로벌 전문 번역 & 현지화 서비스</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                  언어를 넘어, <br className="hidden sm:inline" />
                  <span className="text-blue-400">세계로 연결합니다.</span>
                </h1>
                
                {/* Subheadline */}
                <p className="text-lg sm:text-xl font-bold text-slate-200">
                  글로벌 비즈니스의 성공을 이끄는 프리미엄 현지화 파트너
                </p>
              </div>

              {/* Supporting Text */}
              <p className="text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                기업 계약서, IT/앱 현지화, 해외 이커머스 상세페이지부터 마케팅 홍보물까지 50여 개 언어 원어민 전문가가 정밀하게 번역합니다.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNavigate('quote')}
                  className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded shadow-sm transition-colors uppercase cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>무료 견적 문의하기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenEstimator}
                  className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-bold rounded transition-colors uppercase flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-blue-400" />
                  <span>실시간 단어수/비용 계산기</span>
                </button>
              </div>

              {/* Key Trust Stats */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-extrabold text-white">50+</div>
                  <div className="text-xs text-slate-400 font-medium">지원 언어 조합</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-blue-400">99.8%</div>
                  <div className="text-xs text-slate-400 font-medium">정시 납기 준수율</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-emerald-400">ISO 17100</div>
                  <div className="text-xs text-slate-400 font-medium">국제 품질 인증</div>
                </div>
              </div>

            </div>

            {/* Right Interactive Preview Widget */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-5 backdrop-blur-md">
                
                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                    <span className="text-xs font-mono font-bold text-slate-400 ml-2">TRIX-L10N-ENGINE</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    실시간 원어민 검수
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60">
                    <div className="text-slate-400 font-bold mb-1 uppercase tracking-wider text-[10px]">원문 (English Source):</div>
                    <p className="text-slate-200 font-medium">"Expand your brand globally with confidence and authentic local appeal."</p>
                  </div>

                  <div className="flex justify-center">
                    <div className="p-1.5 rounded-full bg-blue-600 text-white">
                      <Zap className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-3 bg-blue-950/50 rounded-xl border border-blue-800/60">
                    <div className="text-blue-300 font-bold mb-1 uppercase tracking-wider text-[10px] flex justify-between">
                      <span>타겟: 한국어 / 일본어 / 독일어 / 스페인어</span>
                      <span className="text-emerald-400">100% 원어민 현지화</span>
                    </div>
                    <p className="text-white font-bold text-sm">
                      확고한 신뢰와 현지 문화에 울림을 주는 언어로 귀사 브랜드의 성공적인 세계 진출을 지원합니다.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => onNavigate('quote')}
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    프로젝트 문서 제출하고 빠른 견적 받기 →
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            전문 번역 솔루션
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            맞춤형 원어민 번역 서비스
          </h2>
          <p className="text-slate-600 text-base">
            단 한 장의 비즈니스 문서부터 대규모 글로벌 플랫폼 현지화까지 신속하게 처리해 드립니다.
          </p>
        </div>

        {/* 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all hover:border-blue-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Globe className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.shortDesc}
                </p>

                <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  {service.highlights.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  예상 소요시간: {service.turnaround}
                </span>
                <button
                  onClick={() => onNavigate('quote', service.id)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                >
                  <span>견적 문의</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 px-6 py-3 rounded-xl transition-all cursor-pointer"
          >
            <span>전체 서비스의 상세 워크플로우 및 스펙 확인하기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* WHY TRIX TRANSLATE? SECTION */}
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              TRIX TRANSLATE의 차별성
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              왜 TRIX Translate인가?
            </h2>
            <p className="text-slate-300 text-base">
              전문 분야 지식, 원어민 감수, 엄격한 품질 관리(QC)를 통합하여 최고의 결과를 만듭니다.
            </p>
          </div>

          {/* 6 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_US_FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 hover:border-blue-500/50 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-white">
                  {feature.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Process Timeline */}
          <div className="mt-16 pt-12 border-t border-slate-800">
            <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-wider mb-8">
              5단계 품질 보증(QA) 워크플로우
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center">
              {[
                { step: '01', title: '접수 및 분석', desc: '단어수, 용어 분석 및 견적 안내' },
                { step: '02', title: '원어민 번역', desc: '해당 분야 전문 번역가 1:1 배치' },
                { step: '03', title: '원어민 2차 감수', desc: '원문 대조 및 문법/어조 정밀 교정' },
                { step: '04', title: '포맷팅 및 현지화', desc: '레이아웃 및 용어 통일성 검수' },
                { step: '05', title: '납품 및 사후지원', desc: '정시 납품 및 고객 피드백 반영' }
              ].map((p) => (
                <div key={p.step} className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/50">
                  <div className="text-blue-400 font-mono font-extrabold text-sm mb-1">{p.step}</div>
                  <div className="text-white font-bold text-xs mb-1">{p.title}</div>
                  <div className="text-slate-400 text-[11px]">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE LOCALIZATION SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TranslationSampleDemo />
      </section>

      {/* CUSTOMER TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            고객 후기
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            글로벌 기업들이 신뢰하는 파트너
          </h2>
          <p className="text-slate-600 text-base">
            IT 스타트업, 이커머스 셀러, 법률사무소, 글로벌 브랜드들의 성공 사례를 확인해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {t.industry}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.avatarBg} text-white font-bold text-sm flex items-center justify-center shrink-0`}>
                    {t.clientName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.clientName}</h4>
                    <p className="text-xs text-slate-500">{t.companyRole}, <span className="font-semibold text-slate-700">{t.companyName}</span></p>
                  </div>
                </div>

                <div className="text-right text-[11px] text-slate-400 font-mono hidden sm:block">
                  {t.languagePair}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            지금 세계 시장으로 진출해보세요!
          </h2>
          <p className="text-blue-100 text-base max-w-2xl mx-auto">
            번역하고자 하는 문서나 프로젝트 정보를 첨부해 주시면, 2시간 이내에 정확하고 투명한 견적서를 안내해 드립니다.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('quote')}
              className="px-8 py-4 bg-white hover:bg-slate-100 text-blue-900 font-extrabold text-base rounded-xl shadow-lg transition-all cursor-pointer"
            >
              지금 무료 견적 신청하기
            </button>
            <button
              onClick={() => onNavigate('faq')}
              className="px-6 py-4 bg-blue-800/60 hover:bg-blue-800 border border-blue-400/30 text-white font-bold text-base rounded-xl transition-all cursor-pointer"
            >
              궁금한 점이 있으신가요? FAQ 보기
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
