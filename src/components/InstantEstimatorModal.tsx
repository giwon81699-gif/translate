import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
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
  let ratePerWord = 0.12; // Base translation (~160 KRW / word)
  if (selectedService === 'proofreading') ratePerWord = 0.06;
  if (selectedService === 'localization') ratePerWord = 0.16;
  if (selectedService === 'product-detail') ratePerWord = 0.14;
  if (selectedService === 'business-marketing') ratePerWord = 0.15;

  if (urgency === 'express') ratePerWord *= 1.35;

  const estimatedCostMinUSD = Math.max(35, Math.round(calculatedWords * ratePerWord * 0.95));
  const estimatedCostMaxUSD = Math.max(45, Math.round(calculatedWords * ratePerWord * 1.05));

  // KRW Conversion (~1,350 KRW / USD)
  const estimatedCostMinKRW = (estimatedCostMinUSD * 1350).toLocaleString();
  const estimatedCostMaxKRW = (estimatedCostMaxUSD * 1350).toLocaleString();

  // Turnaround calculation
  let turnaround = '24시간 이내';
  if (calculatedWords <= 1000) turnaround = urgency === 'express' ? '6~12시간 이내' : '24시간 이내';
  else if (calculatedWords <= 3000) turnaround = urgency === 'express' ? '24시간 이내' : '1~2일 소요';
  else if (calculatedWords <= 7000) turnaround = urgency === 'express' ? '2일 소요' : '3~4일 소요';
  else turnaround = '프로젝트 별도 협의';

  const handleApply = () => {
    onApplyToQuote({
      wordCount: calculatedWords,
      serviceType: selectedService
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-fadeIn">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-blue-200" />
            </div>
            <div>
              <h3 className="text-lg font-bold">실시간 단어수 & 예상 견적 계산기</h3>
              <p className="text-xs text-blue-100">원문 텍스트를 붙여넣거나 단어수를 직접 입력해 예상 일정과 견적을 확인하세요</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          
          {/* Mode Switcher */}
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setUseTextCounter(true)}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                useTextCounter ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              텍스트 붙여넣기 (자동 계산)
            </button>
            <button
              onClick={() => setUseTextCounter(false)}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                !useTextCounter ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              단어수 직접 입력
            </button>
          </div>

          {/* Input Field */}
          {useTextCounter ? (
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700">샘플 텍스트 붙여넣기:</label>
                <span className="text-xs font-mono font-bold text-blue-600">
                  {calculatedWords} 단어
                </span>
              </div>
              <textarea
                rows={4}
                placeholder="계산할 원문 텍스트를 이곳에 붙여넣으세요..."
                value={sampleText}
                onChange={(e) => setSampleText(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          ) : (
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">예상 총 단어수:</label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min={50}
                  max={50000}
                  step={50}
                  value={customWordCount}
                  onChange={(e) => setCustomWordCount(Math.max(0, Number(e.target.value)))}
                  className="w-full p-3 border border-slate-300 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                <span className="text-xs font-bold text-slate-500 uppercase">단어</span>
              </div>
            </div>
          )}

          {/* Service & Speed Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1.5">희망 번역 서비스:</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-xl bg-white font-medium focus:outline-none"
              >
                <option value="translation">전문 전문번역</option>
                <option value="proofreading">원어민 감수 & 원문 교정</option>
                <option value="localization">소프트웨어 & 모바일 앱 현지화</option>
                <option value="product-detail">상품 상세페이지 번역</option>
                <option value="business-marketing">마케팅 & 기업 홍보 번역</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1.5">납기 옵션:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setUrgency('standard')}
                  className={`p-2 rounded-xl border text-center font-semibold transition-all cursor-pointer ${
                    urgency === 'standard'
                      ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  일반 납기
                </button>
                <button
                  onClick={() => setUrgency('express')}
                  className={`p-2 rounded-xl border text-center font-semibold transition-all cursor-pointer ${
                    urgency === 'express'
                      ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  ⚡ 긴급 당일
                </button>
              </div>
            </div>
          </div>

          {/* Estimated Result Card */}
          <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 space-y-4">
            <div className="grid grid-cols-2 gap-4 text-center border-b border-slate-800 pb-4">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase block tracking-wider">예상 예상 견적 범위</span>
                <span className="text-xl sm:text-2xl font-extrabold text-blue-400">
                  약 ₩{estimatedCostMinKRW} ~ ₩{estimatedCostMaxKRW}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">(${estimatedCostMinUSD} ~ ${estimatedCostMaxUSD} USD)</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase block tracking-wider">예상 소요 시간</span>
                <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 flex items-center justify-center gap-1 mt-0.5">
                  <Clock className="w-5 h-5 text-emerald-400" /> {turnaround}
                </span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>원어민 번역, 교정 감수, 전문 용어 집필, ISO 17100 품질검수가 모두 포함된 금액입니다.</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-slate-600 hover:text-slate-900 text-xs font-semibold cursor-pointer"
          >
            취소
          </button>

          <button
            onClick={handleApply}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>이 내용으로 무료 견적 신청하기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
