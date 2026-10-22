import React, { useState, useEffect } from 'react';
import { QuoteRequest, AttachedFile } from '../types';
import { LANGUAGES_LIST } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { 
  UploadCloud, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Lock, 
  Copy, 
  Check, 
  ArrowRight,
  FileCheck,
  Mail,
  Send,
  Sparkles,
  Download,
  AlertCircle,
  ExternalLink,
  Link2
} from 'lucide-react';
import { 
  sendQuoteEmail, 
  createMailtoLink, 
  TARGET_BUSINESS_EMAIL, 
  EmailSendResult,
  formatFileSize
} from '../services/emailService';

export const ALLOWED_EXTENSIONS = [
  'pdf',
  'docx',
  'doc',
  'pptx',
  'xlsx',
  'txt',
  'hwp',
  'png',
  'jpg',
  'jpeg',
  'zip'
];
export const MAX_FILE_SIZE_BYTES = 20 * 1024 * 1024; // 20MB total limit
export const ACCEPT_FILE_ATTR = '.pdf,.docx,.doc,.pptx,.xlsx,.txt,.hwp,.png,.jpg,.jpeg,.zip';

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
  const { t } = useLanguage();

  // Form fields state
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState(LANGUAGES_LIST[0]);
  const [targetLanguage, setTargetLanguage] = useState(LANGUAGES_LIST[1]);
  const [preferredDeadline, setPreferredDeadline] = useState('');
  const [translationPurpose, setTranslationPurpose] = useState('');
  
  // File attachments state (Slots 1, 2, 3)
  const [files, setFiles] = useState<(AttachedFile | null)[]>([null, null, null]);
  const [largeFileUrl, setLargeFileUrl] = useState('');
  const [fileAlertMessage, setFileAlertMessage] = useState<string | null>(null);

  // Project details text
  const [projectDetails, setProjectDetails] = useState('');

  // Privacy consent
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  // Form errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<QuoteRequest | null>(null);
  const [emailStatus, setEmailStatus] = useState<EmailSendResult | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  // Keep defaults aligned with active language options
  useEffect(() => {
    if (t.quotePage.purposeOptions.length > 0 && !translationPurpose) {
      setTranslationPurpose(t.quotePage.purposeOptions[0].label);
    }
    if (t.quotePage.deadlineOptions.length > 0 && !preferredDeadline) {
      setPreferredDeadline(t.quotePage.deadlineOptions[0].label);
    }
  }, [t.quotePage.purposeOptions, t.quotePage.deadlineOptions, translationPurpose, preferredDeadline]);

  // Initialize service preselect or initial word count if passed
  useEffect(() => {
    if (initialServicePreselect) {
      const match = t.quotePage.purposeOptions.find(p => p.value.includes(initialServicePreselect));
      if (match) {
        setTranslationPurpose(match.label);
      } else if (t.quotePage.purposeOptions[0]) {
        setTranslationPurpose(t.quotePage.purposeOptions[0].label);
      }
    }
    if (initialWordCount) {
      setProjectDetails(`[Word Count Estimate: ${initialWordCount} words]\n`);
    }
  }, [initialServicePreselect, initialWordCount, t.quotePage.purposeOptions]);

  // File upload change handler with strict security and size verification
  const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    // Reset previous alert
    setFileAlertMessage(null);

    // 1. Extension validation (.pdf, .docx, .doc, .pptx, .xlsx, .txt, .hwp, .png, .jpg, .jpeg, .zip only)
    const ext = selected.name.split('.').pop()?.toLowerCase() || '';
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      setFileAlertMessage(t.quotePage.invalidFileFormat);
      e.target.value = '';
      return;
    }

    // 2. Capacity validation: single or total file size limit of 20MB
    const otherFilesSize = files
      .filter((f, i) => f !== null && i !== index)
      .reduce((sum, f) => sum + (f?.size || 0), 0);

    if (selected.size > MAX_FILE_SIZE_BYTES || (otherFilesSize + selected.size) > MAX_FILE_SIZE_BYTES) {
      setFileAlertMessage(t.quotePage.fileSizeExceeded);
      e.target.value = '';
      return;
    }

    const newFile: AttachedFile = {
      id: Math.random().toString(36).substring(2, 9),
      name: selected.name,
      size: selected.size,
      type: selected.type || 'Document',
      uploadDate: new Date().toISOString()
    };

    // Read file as base64 data URL for client storage and in-browser download
    const reader = new FileReader();
    reader.onload = () => {
      newFile.dataBase64 = reader.result as string;
      setFiles(prev => {
        const next = [...prev];
        next[index] = { ...newFile };
        return next;
      });
    };
    reader.onerror = () => {
      setFiles(prev => {
        const next = [...prev];
        next[index] = newFile;
        return next;
      });
    };
    reader.readAsDataURL(selected);
    e.target.value = '';
  };

  const handleRemoveFile = (index: number) => {
    setFileAlertMessage(null);
    setFiles(prev => {
      const next = [...prev];
      next[index] = null;
      return next;
    });
  };

  // Validate form
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = t.quotePage.validation.name;
    if (!contactNumber.trim()) newErrors.contactNumber = t.quotePage.validation.phone;
    if (!email.trim() || !email.includes('@')) newErrors.email = t.quotePage.validation.email;
    if (!sourceLanguage) newErrors.sourceLanguage = t.quotePage.validation.sourceLang;
    if (!targetLanguage) newErrors.targetLanguage = t.quotePage.validation.targetLang;
    if (!privacyAgreed) newErrors.privacyAgreed = t.quotePage.validation.privacy;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 200, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    setEmailStatus(null);

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
      preferredDeadline: preferredDeadline || t.quotePage.deadlineOptions[0]?.label || 'Standard',
      translationPurpose: translationPurpose || t.quotePage.purposeOptions[0]?.label || 'General',
      files: activeFiles,
      largeFileUrl: largeFileUrl.trim() || undefined,
      projectDetails,
      privacyAgreed,
      status: 'Under Review'
    };

    try {
      // Send email to business email (contact@trixtranslate.com) via EmailJS
      const emailResult = await sendQuoteEmail(newQuote);
      setEmailStatus(emailResult);
    } catch (err: unknown) {
      console.error('Email sending exception:', err);
      setEmailStatus({
        success: false,
        isDemo: false,
        error: err instanceof Error ? err.message : 'Error sending dispatch email'
      });
    }

    onQuoteSubmitted(newQuote);
    setSubmittedQuote(newQuote);
    setIsSubmitting(false);
    window.scrollTo({ top: 50, behavior: 'smooth' });
  };

  const copyReferenceId = () => {
    if (!submittedQuote) return;
    navigator.clipboard.writeText(submittedQuote.id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-slate-900 bg-transparent">
      
      {/* Title & Subtitle */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.quotePage.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.quotePage.title}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {t.quotePage.subtitle}
        </p>
      </div>

      {/* SUCCESS CONFIRMATION STATE */}
      {submittedQuote ? (
        <div className="bg-white border border-emerald-200 rounded-2xl p-8 sm:p-12 shadow-xl text-center space-y-6 animate-fadeIn">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.quotePage.submittedTitle}
            </h2>
            <p className="text-slate-600 text-sm max-w-lg mx-auto">
              {t.quotePage.submittedDesc}
            </p>
          </div>

          {/* Reference Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 max-w-lg mx-auto space-y-4 text-left">
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                {t.quotePage.yourQuoteId}
              </div>
              <div className="flex items-center justify-between bg-white p-3.5 rounded-xl border border-blue-200 font-mono text-lg font-bold text-blue-600 shadow-xs">
                <span>{submittedQuote.id}</span>
                <button
                  type="button"
                  onClick={copyReferenceId}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer border border-slate-200"
                >
                  {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId ? t.tracker.copiedBtn : t.tracker.copyBtn}</span>
                </button>
              </div>
            </div>

            {/* Email Dispatch Info Box */}
            <div className="bg-[#F8FAFF] p-4 rounded-xl border border-blue-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{t.quotePage.emailDispatchTitle}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white text-blue-700 font-bold border border-blue-200">
                  {TARGET_BUSINESS_EMAIL}
                </span>
              </div>

              <div className="text-xs leading-relaxed text-slate-700">
                {emailStatus?.isDemo ? (
                  <div className="flex items-start gap-1.5 text-blue-900">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{t.quotePage.emailPrepared}</span>
                  </div>
                ) : emailStatus?.success ? (
                  <div className="flex items-start gap-1.5 text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{t.quotePage.emailSentSuccess}</span>
                  </div>
                ) : (
                  <div className="text-amber-800 text-xs font-medium">
                    {t.quotePage.emailFallback}
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-blue-100 flex items-center justify-between text-xs">
                <a
                  href={createMailtoLink(submittedQuote)}
                  className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1.5 hover:underline"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.quotePage.openEmailApp}</span>
                </a>
              </div>
            </div>

            {/* Submitted Summary Details */}
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs space-y-1.5 text-slate-600">
              <div className="font-bold text-slate-900 mb-1">{t.quotePage.summaryTitle}</div>
              <div>• <strong>{t.quotePage.summaryApplicant}</strong>: {submittedQuote.name} ({submittedQuote.contactNumber} / {submittedQuote.email})</div>
              <div>• <strong>{t.quotePage.summaryLanguage}</strong>: {submittedQuote.sourceLanguage} → {submittedQuote.targetLanguage}</div>
              <div>• <strong>{t.quotePage.summaryScope}</strong>: {submittedQuote.preferredDeadline} / {submittedQuote.translationPurpose}</div>
              <div>
                • <strong>{t.quotePage.summaryFiles}</strong>: {submittedQuote.files.length > 0 
                  ? submittedQuote.files.map(f => `${f.name} (${formatFileSize(f.size)})`).join(', ') 
                  : t.quotePage.summaryNoFiles}
              </div>
              {submittedQuote.largeFileUrl && (
                <div className="flex items-center gap-1.5 flex-wrap">
                  • <strong>{t.quotePage.summaryLargeFile}</strong>:
                  <a
                    href={submittedQuote.largeFileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline font-mono flex items-center gap-1 truncate max-w-xs"
                  >
                    <span>{submittedQuote.largeFileUrl}</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </div>
              )}
            </div>

            <div className="text-[11px] text-slate-500 leading-normal">
              {t.quotePage.trackerNotice}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={onOpenTracker}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-sm shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <FileCheck className="w-4 h-4" />
              <span>{t.quotePage.checkStatusBtn}</span>
            </button>

            <button
              onClick={() => {
                setSubmittedQuote(null);
                setName('');
                setEmail('');
                setContactNumber('');
                setProjectDetails('');
                setFiles([null, null, null]);
                setLargeFileUrl('');
                setFileAlertMessage(null);
                setPrivacyAgreed(false);
              }}
              className="px-5 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-semibold rounded-xl transition-all cursor-pointer shadow-xs"
            >
              {t.quotePage.newQuoteBtn}
            </button>
          </div>
        </div>
      ) : (

        /* MAIN INQUIRY FORM - Windly Clean Light Aesthetic */
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-blue-500/5 p-6 sm:p-10 space-y-8">
          
          {/* Trust Banner inside Form */}
          <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>{t.quotePage.trustIso}</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>{t.quotePage.trustNda}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>{t.quotePage.trustSla}</span>
            </div>
          </div>

          {/* SECTION 1: Client Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">1</span>
              <span>{t.quotePage.step1Title}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.quotePage.clientName} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder={t.quotePage.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full p-2.5 rounded-xl bg-slate-50/70 border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-rose-400 ring-rose-500/20' : 'border-slate-300 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                />
                {errors.name && <span className="text-[11px] text-rose-500 font-semibold mt-1 block">{errors.name}</span>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.quotePage.clientPhone} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder={t.quotePage.phonePlaceholder}
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className={`w-full p-2.5 rounded-xl bg-slate-50/70 border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.contactNumber ? 'border-rose-400 ring-rose-500/20' : 'border-slate-300 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                />
                {errors.contactNumber && <span className="text-[11px] text-rose-500 font-semibold mt-1 block">{errors.contactNumber}</span>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.quotePage.clientEmail} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder={t.quotePage.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-2.5 rounded-xl bg-slate-50/70 border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-rose-400 ring-rose-500/20' : 'border-slate-300 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                />
                {errors.email && <span className="text-[11px] text-rose-500 font-semibold mt-1 block">{errors.email}</span>}
              </div>
            </div>
          </div>

          {/* SECTION 2: Language Pair */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">2</span>
              <span>{t.quotePage.step2Title}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.quotePage.sourceLang} <span className="text-rose-500">*</span>
                </label>
                <select
                  value={sourceLanguage}
                  onChange={(e) => setSourceLanguage(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-50/70 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  {LANGUAGES_LIST.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.quotePage.targetLang} <span className="text-rose-500">*</span>
                </label>
                <select
                  value={targetLanguage}
                  onChange={(e) => setTargetLanguage(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-50/70 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  {LANGUAGES_LIST.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* SECTION 3: Service Scope & Turnaround */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">3</span>
              <span>{t.quotePage.step3Title}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.quotePage.serviceType} / {t.quotePage.purpose}
                </label>
                <select
                  value={translationPurpose}
                  onChange={(e) => setTranslationPurpose(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-50/70 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  {t.quotePage.purposeOptions.map((opt) => (
                    <option key={opt.value} value={opt.label}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.quotePage.preferredDeadline}
                </label>
                <select
                  value={preferredDeadline}
                  onChange={(e) => setPreferredDeadline(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-50/70 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  {t.quotePage.deadlineOptions.map((opt) => (
                    <option key={opt.value} value={opt.label}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* SECTION 4: File Upload & Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">4</span>
              <span>{t.quotePage.step4Title}</span>
            </h3>

            {/* File Security & Size Alert Banner */}
            {fileAlertMessage && (
              <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-xs text-rose-700 animate-fadeIn">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div className="flex-1 leading-relaxed">
                  <span className="font-semibold">{fileAlertMessage}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setFileAlertMessage(null)}
                  className="text-rose-400 hover:text-rose-600 p-0.5 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* File Slots */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {t.quotePage.fileUploadTitle}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[0, 1, 2].map((idx) => {
                  const currentFile = files[idx];
                  return (
                    <div 
                      key={idx}
                      className={`p-3 rounded-xl border flex flex-col justify-between min-h-[105px] relative transition-all ${
                        currentFile 
                          ? 'bg-white border-blue-200 shadow-xs'
                          : 'bg-slate-50/70 border-2 border-dashed border-slate-300 hover:border-blue-400 hover:bg-blue-50/40'
                      }`}
                    >
                      {currentFile ? (
                        <div className="space-y-1.5 overflow-hidden">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              {t.quotePage.attachedBadge}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleRemoveFile(idx)}
                              className="text-slate-400 hover:text-rose-600 p-0.5 cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-xs font-semibold text-slate-800 truncate">{currentFile.name}</p>
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-slate-500 font-mono">{formatFileSize(currentFile.size)}</span>
                            {currentFile.dataBase64 && (
                              <a
                                href={currentFile.dataBase64}
                                download={currentFile.name}
                                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-bold hover:underline"
                                title={t.quotePage.downloadFileBtn}
                              >
                                <Download className="w-3 h-3" />
                                <span>{t.quotePage.downloadFileBtn}</span>
                              </a>
                            )}
                          </div>
                        </div>
                      ) : (
                        <label className="flex flex-col items-center justify-center h-full cursor-pointer py-2">
                          <UploadCloud className="w-5 h-5 text-blue-500 mb-1" />
                          <span className="text-[11px] font-bold text-slate-700">{t.quotePage.fileSlotLabel} #{idx + 1}</span>
                          <span className="text-[10px] text-slate-400">{t.quotePage.clickToSelect}</span>
                          <input
                            type="file"
                            accept={ACCEPT_FILE_ATTR}
                            onChange={(e) => handleFileChange(idx, e)}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="text-[11px] text-slate-500 mt-1.5">
                {t.quotePage.fileUploadHint}
              </p>
            </div>

            {/* Large File External Share Link */}
            <div className="pt-2">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Link2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{t.quotePage.largeFileUrlLabel}</span>
                </span>
                <span className="text-[10px] text-slate-400 font-normal">Google Drive, Dropbox, OneDrive</span>
              </label>
              <div className="relative">
                <input
                  type="url"
                  placeholder={t.quotePage.largeFileUrlPlaceholder}
                  value={largeFileUrl}
                  onChange={(e) => setLargeFileUrl(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50/70 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-xs"
                />
                <Link2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                {t.quotePage.largeFileUrlHint}
              </p>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {t.quotePage.projectDetailsLabel}
              </label>
              <textarea
                rows={3}
                placeholder={t.quotePage.projectDetailsPlaceholder}
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50/70 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-sans transition-all"
              />
            </div>
          </div>

          {/* Privacy Agreement */}
          <div className="pt-2">
            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={privacyAgreed}
                onChange={(e) => setPrivacyAgreed(e.target.checked)}
                className="w-4 h-4 rounded mt-0.5 accent-blue-600 cursor-pointer"
              />
              <span className="text-xs text-slate-600 font-medium">
                {t.quotePage.privacyNotice} <span className="text-rose-500">*</span>
              </span>
            </label>
            {errors.privacyAgreed && (
              <span className="text-[11px] text-rose-500 font-bold mt-1 block">
                {errors.privacyAgreed}
              </span>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              {t.quotePage.submitNotice}
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-sm shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <span>{isSubmitting ? t.quotePage.submittingBtn : t.quotePage.submitBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </form>
      )}

    </div>
  );
};
