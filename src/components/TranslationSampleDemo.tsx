import React, { useState } from 'react';
import { TRANSLATION_SAMPLES } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';

export const TranslationSampleDemo: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeSampleId, setActiveSampleId] = useState(TRANSLATION_SAMPLES[0].id);

  const activeSample = TRANSLATION_SAMPLES.find(s => s.id === activeSampleId) || TRANSLATION_SAMPLES[0];
  const text = t.sampleDemo;

  const industryLabels: Record<string, Record<string, string>> = {
    'IT / SaaS': { ko: 'IT / SaaS', en: 'IT / SaaS', ja: 'IT / SaaS', zh: 'IT / SaaS', es: 'TI / SaaS' },
    'E-Commerce': { ko: '이커머스 / 유통', en: 'E-Commerce', ja: 'EC / 流通', zh: '跨境电商', es: 'E-Commerce' },
    'Finance & Legal': { ko: '금융 & 법률', en: 'Finance & Legal', ja: '金融・法務', zh: '金融与法务', es: 'Finanzas y Legal' }
  };

  const getIndustryLabel = (ind: string) => {
    return industryLabels[ind]?.[language] || industryLabels[ind]?.en || ind;
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-lg shadow-blue-500/5 overflow-hidden">
      
      {/* Header bar - Windly light style */}
      <div className="bg-[#F8FAFC] p-5 sm:p-6 border-b border-slate-200/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-600 text-xs font-bold tracking-wider uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{text.tag}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            {text.title}
          </h3>
        </div>

        {/* Industry switcher */}
        <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200/80">
          {TRANSLATION_SAMPLES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => setActiveSampleId(sample.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeSampleId === sample.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              {getIndustryLabel(sample.industry)}
            </button>
          ))}
        </div>
      </div>

      {/* Main comparison grid */}
      <div className="p-5 sm:p-6 space-y-5 bg-white">
        
        {/* Source Box */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>{text.originalLabel} ({activeSample.sourceLang})</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-white text-slate-600 font-mono text-[10px] border border-slate-200 shadow-xs">
              {getIndustryLabel(activeSample.industry)}
            </span>
          </div>
          <p className="text-slate-800 font-medium text-sm sm:text-base leading-relaxed pt-1">
            "{activeSample.originalText}"
          </p>
        </div>

        {/* Side-by-side comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Literal output box */}
          <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-200/80 space-y-3">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-xs">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span>{text.literalLabel}</span>
            </div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed p-3 bg-white rounded-lg border border-rose-100 font-normal">
              "{activeSample.literalTranslation}"
            </p>
            <p className="text-[11px] text-rose-700 leading-normal italic">
              {text.literalWarning}
            </p>
          </div>

          {/* TRIX Localized box */}
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200/80 space-y-3 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{text.trixLabel} ({activeSample.targetLang})</span>
              </div>
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                {text.trixBadge}
              </span>
            </div>
            <p className="text-slate-900 text-xs sm:text-sm leading-relaxed font-semibold p-3 bg-white rounded-lg border border-blue-200 shadow-xs">
              "{activeSample.trixLocalizedTranslation}"
            </p>
            <div className="text-[11px] text-blue-900 leading-normal flex items-start gap-1.5 pt-1">
              <Lightbulb className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
              <span className="font-medium">{activeSample.culturalNote}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
