import React, { useState } from 'react';
import { QuoteRequest } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Search, 
  FileText, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  MessageSquare,
  ShieldCheck,
  Lock,
  ArrowRight,
  Download,
  ExternalLink,
  Link2
} from 'lucide-react';
import { formatFileSize } from '../services/emailService';

interface QuoteTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedQuotes: QuoteRequest[];
}

// Security: Mask sensitive applicant information
export function maskEmail(email: string): string {
  if (!email || !email.includes('@')) return email;
  const [username, domain] = email.split('@');
  if (username.length <= 2) {
    return `${username[0]}***@${domain}`;
  } else if (username.length <= 4) {
    return `${username.slice(0, 2)}***@${domain}`;
  } else {
    return `${username.slice(0, 3)}***@${domain}`;
  }
}

export function maskPhone(phone: string): string {
  if (!phone) return phone;
  const trimmed = phone.trim();
  // If formatted like 010-1234-5678 or 010.1234.5678
  const parts = trimmed.split(/[- .]/);
  if (parts.length >= 3) {
    const maskedMiddle = '*'.repeat(Math.max(parts[1].length, 4));
    return `${parts[0]}-${maskedMiddle}-${parts.slice(2).join('-')}`;
  }
  // If consecutive digits e.g. 01012345678
  const digitsOnly = trimmed.replace(/\D/g, '');
  if (digitsOnly.length >= 10) {
    const head = digitsOnly.slice(0, 3);
    const tail = digitsOnly.slice(-4);
    return `${head}-****-${tail}`;
  }
  if (trimmed.length > 6) {
    return `${trimmed.slice(0, 3)}****${trimmed.slice(-3)}`;
  }
  return '***-****';
}

export function maskName(name: string): string {
  if (!name) return name;
  const trimmed = name.trim();
  if (trimmed.length <= 2) {
    return `${trimmed[0]}*`;
  }
  if (trimmed.length === 3) {
    return `${trimmed[0]}*${trimmed[2]}`;
  }
  return `${trimmed.slice(0, 2)}${'*'.repeat(trimmed.length - 3)}${trimmed.slice(-1)}`;
}

export const QuoteTrackerModal: React.FC<QuoteTrackerModalProps> = ({
  isOpen,
  onClose,
  savedQuotes
}) => {
  const { t } = useLanguage();
  const [searchId, setSearchId] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [noteSuccess, setNoteSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchId.trim();
    if (!query) {
      setErrorMessage(t.tracker.searchEmptyNotice);
      setSelectedQuote(null);
      setHasSearched(true);
      return;
    }

    setErrorMessage(null);
    setHasSearched(true);

    const found = savedQuotes.find(
      q => q.id.toLowerCase() === query.toLowerCase()
    );

    if (found) {
      setSelectedQuote(found);
    } else {
      setSelectedQuote(null);
      setErrorMessage(t.tracker.searchNotFound);
    }
  };

  const handleResetSearch = () => {
    setSearchId('');
    setSelectedQuote(null);
    setErrorMessage(null);
    setHasSearched(false);
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
    setTimeout(() => setNoteSuccess(false), 3500);
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

  const getStatusLabel = (status: QuoteRequest['status']) => {
    switch (status) {
      case 'Received': return t.tracker.steps.received;
      case 'Under Review': return t.tracker.steps.review;
      case 'Quotation Sent': return t.tracker.steps.quoteSent;
      case 'In Progress': return t.tracker.steps.inProgress;
      case 'Completed': return t.tracker.steps.completed;
      default: return t.tracker.steps.received;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] text-slate-800">
        
        {/* Header - Windly Clean Light Aesthetic */}
        <div className="bg-[#F8FAFC] p-5 sm:p-6 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm shadow-blue-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  {t.tracker.modalTitle}
                </h3>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  <Lock className="w-3 h-3" /> {t.tracker.securityBadge}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {t.tracker.modalSubtitle}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label={t.tracker.closeBtn}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 bg-white">
          
          {/* Strictly Single-Query Search Input - Zero Leaks */}
          <div className="space-y-2">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder={t.tracker.searchPlaceholder}
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all font-mono"
                />
                {searchId && (
                  <button
                    type="button"
                    onClick={handleResetSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-sm shadow-blue-600/30 cursor-pointer flex items-center gap-1.5 shrink-0 active:scale-[0.98]"
              >
                <span>{t.tracker.searchBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>{t.tracker.searchHelpText}</span>
              </span>
              <span className="text-slate-400 font-mono hidden sm:inline">{t.tracker.searchExample}</span>
            </div>
          </div>

          {/* Error Message if Not Found or Empty */}
          {errorMessage && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3 text-xs animate-fadeIn">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
              <div className="leading-relaxed">
                <p className="font-bold">{errorMessage}</p>
                <p className="text-rose-700 mt-1">
                  {t.tracker.notFoundDesc}
                </p>
              </div>
            </div>
          )}

          {/* Selected Quote Details - Strictly rendered ONLY when a single quote matches */}
          {selectedQuote ? (
            <div className="space-y-5 animate-fadeIn">
              
              {/* Quote Overview Card */}
              <div className="bg-[#F8FAFF] p-5 rounded-xl border border-blue-200/90 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-blue-100 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 font-medium">{t.tracker.quoteIdLabel}:</span>
                      <span className="font-mono font-bold text-blue-600 text-base">{selectedQuote.id}</span>
                      <button 
                        onClick={() => copyToClipboard(selectedQuote.id)}
                        className="text-xs text-slate-600 hover:text-blue-600 flex items-center gap-1 bg-white hover:bg-blue-50 border border-slate-200 px-2 py-0.5 rounded transition-colors cursor-pointer"
                        title={t.tracker.copyBtn}
                      >
                        {copiedId ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span className="text-[11px] font-semibold">{copiedId ? t.tracker.copiedBtn : t.tracker.copyBtn}</span>
                      </button>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {t.tracker.submittedAt}: {new Date(selectedQuote.createdAt).toLocaleString()}
                    </div>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-blue-700 border border-blue-200 flex items-center gap-1.5 shadow-xs">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>{t.tracker.statusLabel}: <strong className="text-blue-700">{getStatusLabel(selectedQuote.status)}</strong></span>
                  </div>
                </div>

                {/* Progress Stepper */}
                <div className="py-2">
                  <div className="grid grid-cols-5 gap-1.5 text-center relative">
                    {[
                      { step: 1, label: t.tracker.steps.received },
                      { step: 2, label: t.tracker.steps.review },
                      { step: 3, label: t.tracker.steps.quoteSent },
                      { step: 4, label: t.tracker.steps.inProgress },
                      { step: 5, label: t.tracker.steps.completed }
                    ].map((st) => {
                      const currentStep = getStatusStepIndex(selectedQuote.status);
                      const isDone = st.step <= currentStep;
                      const isCurrent = st.step === currentStep;

                      return (
                        <div key={st.step} className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-1.5 transition-all ${
                            isCurrent
                              ? 'bg-blue-600 text-white ring-4 ring-blue-100 shadow-md shadow-blue-500/20'
                              : isDone
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'bg-white text-slate-400 border border-slate-200'
                          }`}>
                            {isDone ? <Check className="w-4 h-4" /> : st.step}
                          </div>
                          <span className={`text-[11px] leading-tight ${
                            isCurrent
                              ? 'text-blue-600 font-bold'
                              : isDone 
                              ? 'text-slate-800 font-semibold' 
                              : 'text-slate-400'
                          }`}>
                            {st.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Applicant & Project Details - Privacy Enforced with Masking */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                
                {/* Applicant Info (Strictly Masked) */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" />
                      {t.tracker.clientInfoTitle}
                    </span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                      {t.tracker.maskedBadge}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium">{t.tracker.nameLabel}:</span>{' '}
                    <span className="font-bold text-slate-900">{maskName(selectedQuote.name)}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium">{t.tracker.emailLabel}:</span>{' '}
                    <span className="font-mono font-bold text-slate-900">{maskEmail(selectedQuote.email)}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium">{t.tracker.phoneLabel}:</span>{' '}
                    <span className="font-mono font-bold text-slate-900">{maskPhone(selectedQuote.contactNumber)}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-200">
                    {t.tracker.maskedNotice}
                  </div>
                </div>

                {/* Project Specs */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                  <div className="font-bold text-slate-900 border-b border-slate-200 pb-2 text-xs">
                    {t.tracker.langPairLabel} & {t.tracker.deadlineLabel}
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium">{t.tracker.langPairLabel}:</span>{' '}
                    <span className="font-bold text-blue-600">{selectedQuote.sourceLanguage} → {selectedQuote.targetLanguage}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium">{t.tracker.deadlineLabel}:</span>{' '}
                    <span className="font-semibold text-slate-800">{selectedQuote.preferredDeadline}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium">{t.tracker.purposeLabel}:</span>{' '}
                    <span className="font-semibold text-slate-800">{selectedQuote.translationPurpose}</span>
                  </div>
                </div>
              </div>

              {/* Attached Files List */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="font-bold text-slate-900 text-xs flex justify-between items-center">
                  <span>{t.tracker.attachedFilesTitle} ({selectedQuote.files.length})</span>
                  <span className="text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-semibold">
                    {t.tracker.secureStorageBadge}
                  </span>
                </div>
                {selectedQuote.files.length === 0 ? (
                  <p className="text-xs text-slate-500 italic">{t.tracker.noFiles}</p>
                ) : (
                  <div className="space-y-2">
                    {selectedQuote.files.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200 text-xs shadow-xs gap-3">
                        <div className="flex items-center gap-2 overflow-hidden flex-1">
                          <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                          <span className="font-semibold text-slate-800 truncate">{file.name}</span>
                          <span className="text-[10px] text-slate-400 font-mono shrink-0">({formatFileSize(file.size)})</span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {file.dataBase64 && (
                            <a
                              href={file.dataBase64}
                              download={file.name}
                              className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-md font-bold text-[10px] flex items-center gap-1 border border-blue-200 transition-colors"
                              title={t.tracker.downloadFileBtn}
                            >
                              <Download className="w-3 h-3" />
                              <span>{t.tracker.downloadFileBtn}</span>
                            </a>
                          )}
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold">
                            {t.tracker.storedBadge}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Large File External Share Link */}
              {selectedQuote.largeFileUrl && (
                <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl space-y-2 text-xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Link2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>{t.tracker.largeFileTitle}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-lg border border-blue-200 text-xs">
                    <span className="truncate font-mono text-slate-700">{selectedQuote.largeFileUrl}</span>
                    <a
                      href={selectedQuote.largeFileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs flex items-center gap-1.5 shrink-0 transition-colors shadow-xs"
                    >
                      <span>{t.tracker.downloadFileBtn}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {/* Project Requirements */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                <div className="font-bold text-slate-900">{t.tracker.projectDetailsTitle}</div>
                <p className="text-slate-700 bg-white p-3 rounded-lg leading-relaxed whitespace-pre-wrap border border-slate-200">
                  {selectedQuote.projectDetails || t.tracker.noDetails}
                </p>
              </div>

              {/* Follow-up with PM */}
              <div className="p-4 bg-[#F8FAFF] border border-blue-200 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-xs">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  <span>{t.tracker.contactPmTitle}</span>
                </div>
                <form onSubmit={handleAddNote} className="space-y-2.5">
                  <textarea
                    rows={2}
                    placeholder={t.tracker.contactPmPlaceholder}
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    {noteSuccess ? (
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {t.tracker.noteSentSuccess}
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-500">{t.tracker.responseTimeNotice}</span>
                    )}
                    <button
                      type="submit"
                      disabled={!noteText.trim()}
                      className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer shrink-0"
                    >
                      {t.tracker.sendNoteBtn}
                    </button>
                  </div>
                </form>
              </div>

            </div>
          ) : !hasSearched ? (
            /* Clean Empty State Before Query - Zero information exposed */
            <div className="text-center py-10 px-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
                <Search className="w-6 h-6" />
              </div>
              <p className="font-bold text-sm text-slate-800">
                {t.tracker.emptyStateTitle}
              </p>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                {t.tracker.emptyStateDesc}
              </p>
            </div>
          ) : null}

        </div>

        {/* Footer actions */}
        <div className="bg-[#F8FAFC] p-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer border border-slate-200 shadow-xs"
          >
            {t.tracker.closeBtn}
          </button>
        </div>

      </div>
    </div>
  );
};
