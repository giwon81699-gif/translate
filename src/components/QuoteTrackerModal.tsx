import React, { useState } from 'react';
import { QuoteRequest } from '../types';
import { 
  X, 
  Search, 
  FileText, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  MessageSquare
} from 'lucide-react';

interface QuoteTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedQuotes: QuoteRequest[];
}

export const QuoteTrackerModal: React.FC<QuoteTrackerModalProps> = ({
  isOpen,
  onClose,
  savedQuotes
}) => {
  const [searchId, setSearchId] = useState('');
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(
    savedQuotes.length > 0 ? savedQuotes[0] : null
  );
  const [copiedId, setCopiedId] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [noteSuccess, setNoteSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchId.trim()) return;
    const found = savedQuotes.find(
      q => q.id.toLowerCase() === searchId.trim().toLowerCase()
    );
    if (found) {
      setSelectedQuote(found);
    } else {
      alert(`접수 번호 "${searchId}"를 최근 신청 내역에서 찾을 수 없습니다. 최근에 접수하셨다면 접수 번호를 확인해주세요.`);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    setNoteSuccess(true);
    setNoteText('');
    setTimeout(() => setNoteSuccess(false), 3000);
  };

  const getStatusStepIndex = (status: QuoteRequest['status']) => {
    switch (status) {
      case 'Received': return 1;
      case 'Under Review': return 2;
      case 'Quotation Sent': return 3;
      case 'In Progress': return 4;
      case 'Completed': return 5;
      default: return 1;
    }
  };

  const getStatusLabelInKorean = (status: QuoteRequest['status']) => {
    switch (status) {
      case 'Received': return '접수 완료';
      case 'Under Review': return '검토 중';
      case 'Quotation Sent': return '견적서 발송 완료';
      case 'In Progress': return '번역 진행 중';
      case 'Completed': return '최종 납품 완료';
      default: return '접수 완료';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-fadeIn">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">신청 내역 & 진행 상태 조회</h3>
              <p className="text-xs text-slate-400">실시간 진행 상태 및 제출한 프로젝트 정보를 확인하세요</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Lookup Input */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="접수 번호를 입력하세요 (예: TRIX-2026-8942)..."
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-all cursor-pointer"
            >
              조회하기
            </button>
          </form>

          {/* Recent Submissions Picker if multiple */}
          {savedQuotes.length > 0 && (
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                이 브라우저에서 신청한 내역 ({savedQuotes.length}건)
              </label>
              <div className="flex flex-wrap gap-2">
                {savedQuotes.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => setSelectedQuote(q)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all flex items-center gap-2 cursor-pointer ${
                      selectedQuote?.id === q.id
                        ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="font-mono">{q.id}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-bold">
                      {getStatusLabelInKorean(q.status)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Selected Quote Details */}
          {selectedQuote ? (
            <div className="space-y-6">
              
              {/* Quote Overview Card */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-500">접수 번호:</span>
                      <span className="font-mono font-bold text-slate-900">{selectedQuote.id}</span>
                      <button 
                        onClick={() => copyToClipboard(selectedQuote.id)}
                        className="text-xs text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedId ? '복사됨' : '복사'}</span>
                      </button>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      신청 일시: {new Date(selectedQuote.createdAt).toLocaleString('ko-KR')}
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>현재 진행 상태: {getStatusLabelInKorean(selectedQuote.status)}</span>
                  </div>
                </div>

                {/* Progress Stepper */}
                <div className="py-2">
                  <div className="text-xs font-semibold text-slate-700 mb-3">프로젝트 처리 단계:</div>
                  <div className="grid grid-cols-5 gap-1 text-center">
                    {[
                      { step: 1, label: '접수 완료' },
                      { step: 2, label: '검토 중' },
                      { step: 3, label: '견적서 발송' },
                      { step: 4, label: '번역가 배정' },
                      { step: 5, label: '최종 완료' }
                    ].map((st) => {
                      const currentStep = getStatusStepIndex(selectedQuote.status);
                      const isDone = st.step <= currentStep;
                      return (
                        <div key={st.step} className="flex flex-col items-center">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-1 transition-all ${
                            isDone 
                              ? 'bg-blue-600 text-white shadow-xs' 
                              : 'bg-slate-200 text-slate-500'
                          }`}>
                            {isDone ? <Check className="w-4 h-4" /> : st.step}
                          </div>
                          <span className={`text-[10px] font-medium leading-tight ${isDone ? 'text-slate-900 font-bold' : 'text-slate-400'}`}>
                            {st.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Inquiry Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
                  <div className="font-bold text-slate-900 border-b border-slate-100 pb-1 text-xs">신청자 정보</div>
                  <div><span className="text-slate-500">성함/기업명:</span> <span className="font-semibold text-slate-800">{selectedQuote.name}</span></div>
                  <div><span className="text-slate-500">이메일:</span> <span className="font-semibold text-slate-800">{selectedQuote.email}</span></div>
                  <div><span className="text-slate-500">연락처:</span> <span className="font-semibold text-slate-800">{selectedQuote.contactNumber}</span></div>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
                  <div className="font-bold text-slate-900 border-b border-slate-100 pb-1 text-xs">언어 및 일정</div>
                  <div><span className="text-slate-500">언어 조합:</span> <span className="font-bold text-blue-700">{selectedQuote.sourceLanguage} → {selectedQuote.targetLanguage}</span></div>
                  <div><span className="text-slate-500">희망 납기일:</span> <span className="font-semibold text-slate-800">{selectedQuote.preferredDeadline}</span></div>
                  <div><span className="text-slate-500">번역 목적:</span> <span className="font-semibold text-slate-800">{selectedQuote.translationPurpose}</span></div>
                </div>
              </div>

              {/* Attached Files */}
              <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-3">
                <div className="font-bold text-slate-900 text-xs flex justify-between items-center">
                  <span>첨부 파일 ({selectedQuote.files.length}개)</span>
                  <span className="text-[11px] text-slate-500 font-normal">보안 서버 보관</span>
                </div>
                {selectedQuote.files.length === 0 ? (
                  <p className="text-xs text-slate-400 italic">첨부된 파일이 없습니다.</p>
                ) : (
                  <div className="space-y-2">
                    {selectedQuote.files.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-xs">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                          <span className="font-medium text-slate-800 truncate">{file.name}</span>
                          <span className="text-[10px] text-slate-400 font-mono">({(file.size / 1024).toFixed(1)} KB)</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-medium">업로드됨</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Requirements text */}
              <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 text-xs">
                <div className="font-bold text-slate-900">프로젝트 세부 요청사항</div>
                <p className="text-slate-700 bg-slate-50 p-3 rounded-lg leading-relaxed whitespace-pre-wrap border border-slate-100">
                  {selectedQuote.projectDetails || '별도 작성된 세부 요청사항이 없습니다.'}
                </p>
              </div>

              {/* Add Follow-Up Note to Project Manager */}
              <div className="p-4 bg-blue-50/60 border border-blue-200/80 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-xs">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  <span>담당 PM에게 추가 메시지/파일 변경 전달</span>
                </div>
                <form onSubmit={handleAddNote} className="space-y-2">
                  <textarea
                    rows={2}
                    placeholder="수정된 문서 전달, 추가 요구사항, 납기 문의 사항이 있으시면 입력해 주세요..."
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    className="w-full p-2.5 bg-white border border-blue-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                  <div className="flex justify-between items-center">
                    {noteSuccess ? (
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> 메시지가 전담 PM팀에게 전송되었습니다!
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-500">평균 답변 시간: 15~30분 이내</span>
                    )}
                    <button
                      type="submit"
                      disabled={!noteText.trim()}
                      className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                    >
                      메시지 전송
                    </button>
                  </div>
                </form>
              </div>

            </div>
          ) : (
            <div className="text-center py-12 text-slate-500 space-y-3">
              <AlertCircle className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="font-semibold text-sm">최근 접수된 견적 내역이 없습니다.</p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                무료 견적 문의 페이지에서 번역 신청을 진행해주시면 즉시 조회 가능한 접수 번호가 발급됩니다.
              </p>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
          >
            창 닫기
          </button>
        </div>

      </div>
    </div>
  );
};
