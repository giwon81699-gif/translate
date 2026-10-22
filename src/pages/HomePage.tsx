import React from 'react';
import { PageType } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TranslationSampleDemo } from '../components/TranslationSampleDemo';
import { 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  Zap, 
  FileText, 
  Clock, 
  Lock, 
  Layers, 
  Award, 
  BookOpen 
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType, servicePreselect?: string) => void;
  onOpenEstimator?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEstimator }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-24 pb-20 text-slate-900 bg-transparent">
      
      {/* HERO SECTION - Windly Radiant Light Canvas */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        
        {/* Soft Linear ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-blue-400/15 via-sky-300/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/4 right-5 w-[350px] h-[250px] bg-blue-300/10 blur-[100px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wide shadow-xs backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                <span>{t.hero.badge}</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.14]">
                  {t.hero.titleLine1} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">
                    {t.hero.titleGradient}
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg text-slate-700 font-medium pt-1">
                  {t.hero.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t.hero.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
                <button
                  onClick={() => onNavigate('quote')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <span>{t.hero.ctaQuote}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/90 text-sm font-semibold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>{t.hero.ctaServices}</span>
                </button>

                {onOpenEstimator && (
                  <button
                    onClick={onOpenEstimator}
                    className="w-full sm:w-auto px-4 py-3.5 text-xs text-slate-500 hover:text-blue-600 font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer underline-offset-4 hover:underline"
                  >
                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                    <span>{t.hero.quickEstimatorBtn}</span>
                  </button>
                )}
              </div>

              {/* Minimal Key Stats */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6 text-center lg:text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{t.hero.statLanguages}</div>
                  <div className="text-xs text-slate-500 font-semibold mt-1">{t.hero.statLanguagesLabel}</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 tracking-tight">{t.hero.statDelivery}</div>
                  <div className="text-xs text-slate-500 font-semibold mt-1">{t.hero.statDeliveryLabel}</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight">{t.hero.statIso}</div>
                  <div className="text-xs text-slate-500 font-semibold mt-1">{t.hero.statIsoLabel}</div>
                </div>
              </div>

            </div>

            {/* Right Column: Windly Style Preview Terminal Widget */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xl shadow-blue-500/5 space-y-4 relative group">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

                {/* Window header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {t.hero.previewBadge}
                  </span>
                </div>

                {/* Source and target cards */}
                <div className="space-y-3 text-xs">
                  
                  {/* Source block */}
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                    <div className="text-slate-500 font-semibold text-[10px] uppercase tracking-wider">
                      {t.hero.previewSourceLabel}
                    </div>
                    <p className="text-slate-800 font-medium leading-relaxed">
                      {t.hero.previewSourceText}
                    </p>
                  </div>

                  {/* Flow arrow */}
                  <div className="flex justify-center -my-1">
                    <div className="p-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Target block */}
                  <div className="p-3.5 bg-[#F8FAFF] rounded-xl border border-blue-200/90 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-blue-700 font-bold text-[11px] flex items-center gap-1.5">
                        <Globe className="w-3 h-3 text-blue-600" />
                        <span>{t.hero.previewTargetLabel}</span>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {t.hero.nativeReviewBadge}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {['한국어 (KO)', 'English (EN)', '日本語 (JA)', '中文 (ZH)', 'Español (ES)'].map((l, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-white text-slate-700 text-[10px] font-mono border border-slate-200 shadow-xs">
                          {l}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-900 font-semibold text-xs sm:text-sm pt-2 border-t border-blue-100 leading-relaxed">
                      {t.hero.previewTargetText}
                    </p>
                  </div>

                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>ISO 17100 L10n QA</span>
                  </span>
                  <span className="font-semibold text-slate-600">{t.hero.accuracyLabel}</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW - Windly B2B Clean Bento Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.services.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.services.sectionTitle}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {t.services.sectionSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((svc) => (
            <div 
              key={svc.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 shadow-sm transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] text-slate-600 font-mono px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200/60 font-semibold">
                    {svc.turnaround}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5 font-normal">
                    {svc.shortDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                  <strong className="text-slate-800">{t.services.recommendedLabel}:</strong> {svc.recommendedFor}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('quote', svc.id)}
                  className="text-xs text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>{t.services.requestThis}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[11px] text-slate-500 hover:text-slate-800 font-medium transition-colors cursor-pointer"
                >
                  {t.services.learnMore}
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* INTERACTIVE SAMPLE DEMO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TranslationSampleDemo />
      </section>

      {/* WHY US - Windly 4-Card Feature Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>{t.whyUs.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.whyUs.sectionTitle}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {t.whyUs.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.whyUs.features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-200 space-y-3 transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                {idx === 0 && <ShieldCheck className="w-4 h-4" />}
                {idx === 1 && <Lock className="w-4 h-4" />}
                {idx === 2 && <Clock className="w-4 h-4" />}
                {idx === 3 && <BookOpen className="w-4 h-4" />}
              </div>
              <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                {feature.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4-STEP PROCESS - Windly Clean Step Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
              {t.workflow.sectionBadge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.workflow.sectionTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {t.workflow.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: t.workflow.step1Title, desc: t.workflow.step1Desc },
              { title: t.workflow.step2Title, desc: t.workflow.step2Desc },
              { title: t.workflow.step3Title, desc: t.workflow.step3Desc },
              { title: t.workflow.step4Title, desc: t.workflow.step4Desc }
            ].map((step, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-2 hover:bg-blue-50/30 transition-colors">
                <span className="text-xs font-bold text-blue-600">{step.title}</span>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA - Windly Vibrant Brand Blue Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 border border-blue-500/30 p-8 sm:p-12 text-center space-y-6 shadow-xl shadow-blue-500/20">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.homeCta.title}
            </h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              {t.homeCta.desc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('quote')}
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-blue-600 hover:bg-blue-50 font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <span>{t.homeCta.ctaQuote}</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </button>
            <button
              onClick={() => onNavigate('faq')}
              className="w-full sm:w-auto px-5 py-3.5 bg-blue-800/40 hover:bg-blue-800/70 text-white border border-white/20 text-sm font-semibold rounded-xl transition-all cursor-pointer"
            >
              {t.homeCta.ctaFaq}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
