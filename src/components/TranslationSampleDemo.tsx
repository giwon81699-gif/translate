import React, { useState } from 'react';
import { TRANSLATION_SAMPLES } from '../data/mockData';
import { Sparkles, CheckCircle2, XCircle, Lightbulb } from 'lucide-react';

export const TranslationSampleDemo: React.FC = () => {
  const [activeSampleId, setActiveSampleId] = useState(TRANSLATION_SAMPLES[0].id);

  const activeSample = TRANSLATION_SAMPLES.find(s => s.id === activeSampleId) || TRANSLATION_SAMPLES[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl overflow-hidden">
      
      {/* Header bar */}
      <div className="bg-slate-900 text-white p-5 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>실시간 현지화 품질 비교 체험</span>
          </div>
          <h3 className="text-xl font-extrabold text-white">직역과 원어민 현지화의 결정적 차이</h3>
        </div>

        {/* Industry switcher */}
        <div className="flex flex-wrap gap-1.5 bg-slate-800 p-1 rounded-xl">
          {TRANSLATION_SAMPLES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => setActiveSampleId(sample.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeSampleId === sample.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {sample.industry}
            </button>
          ))}
        </div>
      </div>

      {/* Main comparison grid */}
      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Source Language Original Box */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            <span>원문 (Original Text - {activeSample.sourceLang})</span>
            <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-mono text-[10px]">
              {activeSample.industry}
            </span>
          </div>
          <p className="text-slate-900 font-semibold text-base sm:text-lg leading-relaxed">
            "{activeSample.originalText}"
          </p>
        </div>

        {/* Side-by-side comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Literal translation box */}
          <div className="p-5 rounded-xl bg-red-50/50 border border-red-200 space-y-3">
            <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider">
              <XCircle className="w-4 h-4 text-red-500 shrink-0" />
              <span>일반 기계 직역 (Word-For-Word Translation)</span>
            </div>
            <p className="text-slate-800 text-sm leading-relaxed font-medium bg-white p-3.5 rounded-lg border border-red-100">
              "{activeSample.literalTranslation}"
            </p>
            <p className="text-xs text-red-600/90 leading-normal italic">
              ⚠️ 문맥과 정서가 반영되지 않아 딱딱하고 브랜드 신뢰도를 떨어뜨립니다.
            </p>
          </div>

          {/* TRIX Localized translation box */}
          <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-3 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>TRIX 원어민 현지화 번역 ({activeSample.targetLang})</span>
              </div>
              <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                추천 품질
              </span>
            </div>
            <p className="text-slate-900 text-sm leading-relaxed font-bold bg-white p-3.5 rounded-lg border border-emerald-200 shadow-xs">
              "{activeSample.trixLocalizedTranslation}"
            </p>
            <p className="text-xs text-emerald-900 leading-normal font-medium flex items-start gap-1.5">
              <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{activeSample.culturalNote}</span>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
