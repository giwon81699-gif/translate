import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  Clock 
} from 'lucide-react';

interface InstantEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToQuote: (params: { wordCount: number; serviceType: string }) => void;
}

export const InstantEstimatorModal: React.FC<InstantEstimatorModalProps> = ({
  isOpen,
  onClose,
  onApplyToQuote
}) => {
  const { t } = useLanguage();
  const [sampleText, setSampleText] = useState('');
  const [customWordCount, setCustomWordCount] = useState<number>(500);
  const [useTextCounter, setUseTextCounter] = useState(true);
  const [selectedService, setSelectedService] = useState('translation');
  const [urgency, setUrgency] = useState<'standard' | 'express'>('standard');

  if (!isOpen) return null;

  const calculatedWords = useTextCounter
    ? sampleText.trim() === '' ? 0 : sampleText.trim().split(/\s+/).length
    : customWordCount;

  // Rate calculations
  let ratePerWord = 0.12;
  if (selectedService === 'proofreading') ratePerWord = 0.06;
  if (selectedService === 'localization') ratePerWord = 0.16;
  if (selectedService === 'product-detail') ratePerWord = 0.14;
  if (selectedService === 'business-marketing') ratePerWord = 0.15;

  if (urgency === 'express') ratePerWord *= 1.35;

  const estimatedCostMinUSD = Math.max(35, Math.round(calculatedWords * ratePerWord * 0.95));
  const estimatedCostMaxUSD = Math.max(45, Math.round(calculatedWords * ratePerWord * 1.05));

  const estimatedCostMinKRW = (estimatedCostMinUSD * 1350).toLocaleString();
  const estimatedCostMaxKRW = (estimatedCostMaxUSD * 1350).toLocaleString();

  let turnaround = t.estimator.turnaroundOptions.under24h;
  if (calculatedWords <= 1000) {
    turnaround = urgency === 'express' ? t.estimator.turnaroundOptions.fast6to12h : t.estimator.turnaroundOptions.under24h;
  } else if (calculatedWords <= 3000) {
    turnaround = urgency === 'express' ? t.estimator.turnaroundOptions.under24h : t.estimator.turnaroundOptions.days1to2;
  } else if (calculatedWords <= 7000) {
    turnaround = urgency === 'express' ? t.estimator.turnaroundOptions.days2 : t.estimator.turnaroundOptions.days3to4;
  } else {
    turnaround = t.estimator.turnaroundOptions.customProject;
  }

  const handleApply = () => {
    onApplyToQuote({
      wordCount: calculatedWords,
      serviceType: selectedService
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col text-slate-800">
        
        {/* Header */}
        <div className="bg-[#F8FAFC] p-5 sm:p-6 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shadow-xs">
              <Sparkles className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                {t.estimator.modalTitle}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {t.estimator.modalSubtitle}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-5 bg-white">
          
          {/* Mode Switcher */}
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200/80 text-xs">
            <button
              onClick={() => setUseTextCounter(true)}
              className={`flex-1 py-2 font-bold rounded-lg transition-all cursor-pointer ${
                useTextCounter ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.estimator.textModeTab}
            </button>
            <button
              onClick={() => setUseTextCounter(false)}
              className={`flex-1 py-2 font-bold rounded-lg transition-all cursor-pointer ${
                !useTextCounter ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.estimator.wordCountModeTab}
            </button>
          </div>

          {/* Input Area */}
          {useTextCounter ? (
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-700">{t.estimator.pasteLabel}</span>
                <span className="font-mono text-blue-600 font-bold">
                  {calculatedWords.toLocaleString()} {t.estimator.wordsDetected}
                </span>
              </div>
              <textarea
                rows={3}
                placeholder={t.estimator.pastePlaceholder}
                value={sampleText}
                onChange={(e) => setSampleText(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-sans transition-all"
              />
            </div>
          ) : (
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                {t.estimator.wordCountInputLabel}
              </label>
              <input
                type="number"
                min={50}
                max={500000}
                step={50}
                value={customWordCount}
                onChange={(e) => setCustomWordCount(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 font-mono focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
          )}

          {/* Service & Urgency selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1.5">
                {t.estimator.serviceType}:
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              >
                <option value="translation">{t.estimator.serviceOptions.translation}</option>
                <option value="proofreading">{t.estimator.serviceOptions.proofreading}</option>
                <option value="localization">{t.estimator.serviceOptions.localization}</option>
                <option value="product-detail">{t.estimator.serviceOptions.productDetail}</option>
                <option value="business-marketing">{t.estimator.serviceOptions.businessMarketing}</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1.5">{t.estimator.deadlineLabel}</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setUrgency('standard')}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    urgency === 'standard'
                      ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {t.estimator.standardUrgency}
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('express')}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    urgency === 'express'
                      ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {t.estimator.expressUrgency}
                </button>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="p-4 rounded-xl bg-[#F8FAFF] border border-blue-200/90 space-y-3">
            <div className="flex items-center justify-between text-xs border-b border-blue-100 pb-2">
              <span className="font-bold text-slate-800">{t.estimator.calculatedEstimate}</span>
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                {calculatedWords.toLocaleString()} words
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[11px] text-slate-500 block mb-1">{t.estimator.estimatedCost}:</span>
                <div className="text-xl font-extrabold text-slate-900 tracking-tight">
                  ₩{estimatedCostMinKRW} ~ ₩{estimatedCostMaxKRW}
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                  (${estimatedCostMinUSD} ~ ${estimatedCostMaxUSD} USD)
                </div>
              </div>

              <div>
                <span className="text-[11px] text-slate-500 block mb-1">{t.estimator.estimatedTime}:</span>
                <div className="text-sm font-bold text-blue-600 flex items-center gap-1.5 mt-1">
                  <Clock className="w-4 h-4" />
                  <span>{turnaround}</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">{t.estimator.businessDaysNote}</div>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 border-t border-blue-100 pt-2 leading-normal">
              {t.estimator.notice}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#F8FAFC] p-4 border-t border-slate-200 flex justify-between items-center">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 shadow-xs transition-colors cursor-pointer"
          >
            {t.estimator.closeBtn}
          </button>

          <button
            onClick={handleApply}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm shadow-blue-600/30 flex items-center gap-1.5 cursor-pointer active:scale-[0.98]"
          >
            <span>{t.estimator.applyBtn}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
