import React, { useState, useEffect } from 'react';
import { QuoteRequest, AttachedFile } from '../types';
import { LANGUAGES_LIST } from '../data/mockData';
import { 
  FileText, 
  UploadCloud, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Lock, 
  Sparkles, 
  Copy, 
  Check, 
  ArrowRight,
  FileCheck
} from 'lucide-react';

interface FreeQuotePageProps {
  initialServicePreselect?: string;
  initialWordCount?: number;
  onQuoteSubmitted: (newQuote: QuoteRequest) => void;
  onOpenTracker: () => void;
}

export const FreeQuotePage: React.FC<FreeQuotePageProps> = ({
  initialServicePreselect,
  initialWordCount,
  onQuoteSubmitted,
  onOpenTracker
}) => {
  // Form fields state
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('한국어 (Korean)');
  const [targetLanguage, setTargetLanguage] = useState('영어 (US / UK)');
  const [preferredDeadline, setPreferredDeadline] = useState('일반 납기 (영업일 기준 3~5일)');
  const [translationPurpose, setTranslationPurpose] = useState('상품 상세페이지 / 이커머스');
  
  // File attachments state (Slots 1, 2, 3)
  const [files, setFiles] = useState<(AttachedFile | null)[]>([null, null, null]);

  // Project details text
  const [projectDetails, setProjectDetails] = useState('');

  // Privacy consent
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  // Form errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<QuoteRequest | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  // Auto word counter helper
  const [wordCounterInput, setWordCounterInput] = useState('');
  const [showWordCounterHelper, setShowWordCounterHelper] = useState(false);

  // Initialize service preselect or initial word count if passed
  useEffect(() => {
    if (initialServicePreselect) {
      if (initialServicePreselect === 'product-detail') setTranslationPurpose('상품 상세페이지 / 이커머스');
      else if (initialServicePreselect === 'localization') setTranslationPurpose('소프트웨어 및 모바일 앱 UI');
      else if (initialServicePreselect === 'business-marketing') setTranslationPurpose('마케팅 및 홍보 자료');
      else if (initialServicePreselect === 'proofreading') setTranslationPurpose('원어민 교정 및 감수');
    }
    if (initialWordCount) {
      setProjectDetails(`[예상 단어수: ${initialWordCount} 단어]\n`);
    }
  }, [initialServicePreselect, initialWordCount]);

  // File upload change handler
  const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    const newFile: AttachedFile = {
      id: Math.random().toString(36).substring(2, 9),
      name: selected.name,
      size: selected.size,
      type: selected.type || 'Document',
      uploadDate: new Date().toISOString()
    };

    setFiles(prev => {
      const next = [...prev];
      next[index] = newFile;
      return next;
    });
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prev => {
      const next = [...prev];
      next[index] = null;
      return next;
    });
  };

  // Helper for word count from pasted text
  const handleCalculateWords = () => {
    const words = wordCounterInput.trim() === '' ? 0 : wordCounterInput.trim().split(/\s+/).length;
    setProjectDetails(prev => {
      const appendNote = `\n[예상 단어수 샘플 계산: ${words} 단어]`;
      return prev.includes('예상 단어수') ? prev : prev + appendNote;
    });
    setShowWordCounterHelper(false);
  };

  // Validate form
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = '성함(담당자명)을 입력해 주세요.';
    if (!contactNumber.trim()) newErrors.contactNumber = '연락처(전화번호)를 입력해 주세요.';
    if (!email.trim() || !email.includes('@')) newErrors.email = '올바른 이메일 주소를 입력해 주세요.';
    if (!sourceLanguage) newErrors.sourceLanguage = '원문 언어를 선택해 주세요.';
    if (!targetLanguage) newErrors.targetLanguage = '번역할 언어(타겟 언어)를 선택해 주세요.';
    if (!privacyAgreed) newErrors.privacyAgreed = '개인정보 수집 및 이용 동의에 체크해 주세요.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    // Simulate network submission delay
    setTimeout(() => {
      const activeFiles = files.filter((f): f is AttachedFile => f !== null);

      const generatedId = `TRIX-2026-${Math.floor(1000 + Math.random() * 9000)}`;

      const newQuote: QuoteRequest = {
        id: generatedId,
        createdAt: new Date().toISOString(),
        name,
        contactNumber,
        email,
        sourceLanguage,
        targetLanguage,
        preferredDeadline,
        translationPurpose,
        files: activeFiles,
        projectDetails,
        privacyAgreed,
        status: 'Under Review'
      };

      onQuoteSubmitted(newQuote);
      setSubmittedQuote(newQuote);
      setIsSubmitting(false);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 1000);
  };

  const copyReferenceId = () => {
    if (!submittedQuote) return;
    navigator.clipboard.writeText(submittedQuote.id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Title & Subtitle */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
          빠르고 안전한 비밀보장 견적
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          무료 견적 문의
        </h1>
        <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
          번역하실 문서나 프로젝트 내용을 입력해주세요. 담당 PM이 확인 후 2시간 이내에 세부 견적서를 발송해 드립니다.
        </p>
      </div>

      {/* SUCCESS CONFIRMATION STATE */}
      {submittedQuote ? (
        <div className="bg-white border-2 border-emerald-500/30 rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              견적 문의가 성공적으로 접수되었습니다!
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto font-medium">
              문의해주신 내용을 바탕으로 전문 PM이 최적의 견적과 안내를 이메일로 빠르게 전달해 드리겠습니다.
            </p>
          </div>

          {/* Reference Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 max-w-md mx-auto space-y-3 text-left">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              고객님의 견적 접수 번호 (Reference No.)
            </div>
            <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-300 font-mono text-lg font-bold text-slate-900">
              <span>{submittedQuote.id}</span>
              <button
                onClick={copyReferenceId}
                className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
              >
                {copiedId ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId ? '복사완료' : '번호 복사'}</span>
              </button>
            </div>
            <div className="text-[11px] text-slate-500 leading-normal">
              이 접수 번호로 언제든지 상단 메뉴의 [신청 내역 조회]에서 실시간 진행 상태(검토 중/견적 발송/완료)를 조회하실 수 있습니다.
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onOpenTracker}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileCheck className="w-4 h-4" />
              <span>실시간 접수 내역 확인하기</span>
            </button>

            <button
              onClick={() => {
                setSubmittedQuote(null);
                setName('');
                setEmail('');
                setContactNumber('');
                setProjectDetails('');
                setFiles([null, null, null]);
                setPrivacyAgreed(false);
              }}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl transition-all cursor-pointer"
            >
              추가 견적 문의 작성하기
            </button>
          </div>
        </div>
      ) : (

        /* MAIN INQUIRY FORM */
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10 space-y-8">
          
          {/* Trust Header inside Form */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2 font-semibold">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>ISO 17100 국제 번역 품질 보증</span>
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>100% 기밀유지 및 암호화 파일 업로드</span>
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>영업시간 내 2시간 이내 답변</span>
            </div>
          </div>

          {/* SECTION 1: Client Information */}
          <div className="space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">1</span>
              <span>신청인 / 기업 연락처 정보</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Field 1: Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  1. 성함 / 기업명 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="예: 홍길동 / (주)글로벌트레이딩"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full p-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-red-500 ring-red-500/20' : 'border-slate-300 focus:border-blue-600 focus:ring-blue-500/20'
                  }`}
                />
                {errors.name && <span className="text-[11px] text-red-500 font-semibold mt-1 block">{errors.name}</span>}
              </div>

              {/* Field 2: Contact Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  2. 연락처(전화번호) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="010-0000-0000"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className={`w-full p-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 ${
                    errors.contactNumber ? 'border-red-500 ring-red-500/20' : 'border-slate-300 focus:border-blue-600 focus:ring-blue-500/20'
                  }`}
                />
                {errors.contactNumber && <span className="text-[11px] text-red-500 font-semibold mt-1 block">{errors.contactNumber}</span>}
              </div>

              {/* Field 3: Email Address */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  3. 이메일 주소 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 ring-red-500/20' : 'border-slate-300 focus:border-blue-600 focus:ring-blue-500/20'
                  }`}
                />
                {errors.email && <span className="text-[11px] text-red-500 font-semibold mt-1 block">{errors.email}</span>}
              </div>

            </div>
          </div>

          {/* SECTION 2: Project Parameters */}
          <div className="space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">2</span>
              <span>언어 선택 및 희망 납기일</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Field 4: Source Language */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  4. 원문 언어 (Source) <span className="text-red-500">*</span>
                </label>
                <select
                  value={sourceLanguage}
                  onChange={(e) => setSourceLanguage(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs font-medium bg-white focus:outline-none focus:border-blue-600"
                >
                  {LANGUAGES_LIST.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              {/* Field 5: Target Language */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  5. 번역 언어 (Target) <span className="text-red-500">*</span>
                </label>
                <select
                  value={targetLanguage}
                  onChange={(e) => setTargetLanguage(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs font-medium bg-white focus:outline-none focus:border-blue-600"
                >
                  {LANGUAGES_LIST.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              {/* Field 6: Preferred Deadline */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  6. 희망 납기일
                </label>
                <select
                  value={preferredDeadline}
                  onChange={(e) => setPreferredDeadline(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs font-medium bg-white focus:outline-none focus:border-blue-600"
                >
                  <option value="⚡ 긴급 당일 번역 (24시간 이내)">⚡ 긴급 당일 번역 (24시간 이내)</option>
                  <option value="익일 익일 번역 (48시간 이내)">익일 번역 (48시간 이내)</option>
                  <option value="일반 납기 (영업일 기준 3~5일)">일반 납기 (영업일 기준 3~5일)</option>
                  <option value="협의 가능 / 대형 프로젝트">협의 가능 / 대형 프로젝트</option>
                </select>
              </div>

              {/* Field 7: Translation Purpose */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  7. 번역 분야 / 목적
                </label>
                <select
                  value={translationPurpose}
                  onChange={(e) => setTranslationPurpose(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs font-medium bg-white focus:outline-none focus:border-blue-600"
                >
                  <option value="상품 상세페이지 / 이커머스">상품 상세페이지 / 이커머스</option>
                  <option value="소프트웨어 및 모바일 앱 UI">소프트웨어 & 모바일 앱 UI</option>
                  <option value="법률 계약서 및 정관">법률 계약서 및 공식 서류</option>
                  <option value="마케팅 및 홍보 자료">마케팅 및 홍보 캠페인</option>
                  <option value="원어민 교정 및 감수">원어민 교정 및 감수</option>
                  <option value="기업 내부 업무용">기업 내부 업무용 문서</option>
                  <option value="학술 논문 및 출판">학술 논문 및 출판물</option>
                </select>
              </div>

            </div>
          </div>

          {/* SECTION 3: File Attachments 1, 2, 3 */}
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                <span>번역 대상 파일 첨부 (최대 3개)</span>
              </h3>
              <span className="text-[11px] text-slate-500 font-medium">지원 포맷: PDF, DOCX, XLSX, PPTX, ZIP, 이미지</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[0, 1, 2].map((slotIndex) => {
                const attached = files[slotIndex];
                const fileLabelNumber = slotIndex === 0 ? '8. 첨부파일 1' : slotIndex === 1 ? '9. 첨부파일 2' : '10. 첨부파일 3';

                return (
                  <div key={slotIndex} className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      {fileLabelNumber}
                    </label>

                    {attached ? (
                      <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-xl flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                          <div className="truncate">
                            <span className="font-bold text-slate-900 block truncate">{attached.name}</span>
                            <span className="text-[10px] text-slate-500 font-mono">{(attached.size / 1024).toFixed(1)} KB</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(slotIndex)}
                          className="p-1 rounded-md text-slate-400 hover:text-red-600 hover:bg-white transition-colors cursor-pointer"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl bg-slate-50/60 hover:bg-blue-50/30 transition-all cursor-pointer group text-center">
                        <UploadCloud className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors mb-1" />
                        <span className="text-xs font-bold text-slate-700 group-hover:text-blue-700">클릭하여 파일 선택</span>
                        <span className="text-[10px] text-slate-400">선택 사항</span>
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(slotIndex, e)}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 4: Field 11 - Project Details / Request */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold text-slate-900">
                11. 프로젝트 세부 요청사항
              </label>
              
              <button
                type="button"
                onClick={() => setShowWordCounterHelper(!showWordCounterHelper)}
                className="text-xs text-blue-600 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>단어수 계산 도구</span>
              </button>
            </div>

            {/* Word Counter Helper Box */}
            {showWordCounterHelper && (
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl space-y-2 animate-fadeIn text-xs">
                <div className="font-bold text-blue-900">원문 텍스트를 붙여넣어 단어수를 계산하세요:</div>
                <textarea
                  rows={2}
                  placeholder="계산할 샘플 텍스트를 붙여넣으세요..."
                  value={wordCounterInput}
                  onChange={(e) => setWordCounterInput(e.target.value)}
                  className="w-full p-2 bg-white border border-blue-200 rounded-lg text-xs"
                />
                <div className="flex justify-between items-center">
                  <span className="font-mono text-blue-800 font-bold">
                    계산 결과: {wordCounterInput.trim() === '' ? 0 : wordCounterInput.trim().split(/\s+/).length} 단어
                  </span>
                  <button
                    type="button"
                    onClick={handleCalculateWords}
                    className="px-3 py-1 bg-blue-600 text-white rounded font-bold text-xs cursor-pointer"
                  >
                    요청사항에 단어수 추가하기
                  </button>
                </div>
              </div>
            )}

            <textarea
              rows={5}
              placeholder="희망하는 톤앤매너, 타겟 독자, 전용 용어집 유무, 분량, 추가 요청사항 등을 자유롭게 작성해주세요..."
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 leading-relaxed"
            />
          </div>

          {/* SECTION 5: Privacy Consent Checkbox */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={privacyAgreed}
                onChange={(e) => setPrivacyAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <span className="text-xs text-slate-700 group-hover:text-slate-900 leading-normal">
                견적 상담 및 답변 작성을 위한 개인정보 수집 및 이용에 동의합니다. <span className="text-red-500">*</span>
              </span>
            </label>
            {errors.privacyAgreed && (
              <span className="text-[11px] text-red-500 font-semibold block pl-7">{errors.privacyAgreed}</span>
            )}
          </div>

          {/* SECTION 6: Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-slate-900 hover:bg-black disabled:opacity-50 text-white font-bold text-sm rounded shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide"
            >
              {isSubmitting ? (
                <span>견적 요청 처리 중...</span>
              ) : (
                <>
                  <span>무료 견적 요청하기</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-[11px] text-slate-400 text-center mt-3 uppercase tracking-wider">
              사전 결제 필요 없음 • ISO 17100 철저한 기밀유지 준수
            </p>
          </div>

        </form>
      )}

    </div>
  );
};
