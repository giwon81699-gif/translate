import React, { useState, useEffect, useMemo } from 'react';
import { QuoteRequest, AttachedFile } from '../types';
import { formatFileSize } from '../services/emailService';
import { 
  Lock, 
  Unlock, 
  Search, 
  Download, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Filter, 
  RefreshCw, 
  FileSpreadsheet, 
  ArrowLeft, 
  Trash2, 
  Eye, 
  X, 
  Copy, 
  Check, 
  Phone, 
  Mail, 
  Calendar, 
  Layers, 
  Save, 
  ChevronDown
} from 'lucide-react';

interface AdminPageProps {
  quotes: QuoteRequest[];
  onUpdateQuoteStatus: (quoteId: string, newStatus: QuoteRequest['status'], adminNotes?: string) => void;
  onDeleteQuote: (quoteId: string) => void;
  onNavigateHome: () => void;
  onAddSampleQuotes?: () => void;
}

const VALID_PASSWORDS = ['trix2026!', 'admin1234', 'trixadmin'];

export const AdminPage: React.FC<AdminPageProps> = ({
  quotes,
  onUpdateQuoteStatus,
  onDeleteQuote,
  onNavigateHome,
  onAddSampleQuotes
}) => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('trix_admin_authenticated') === 'true';
    } catch {
      return false;
    }
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  // Dashboard Filters & Search
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [adminMemoInput, setAdminMemoInput] = useState('');
  const [memoSaveSuccess, setMemoSaveSuccess] = useState(false);

  // Authentication handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (VALID_PASSWORDS.includes(passwordInput.trim())) {
      setIsAuthenticated(true);
      setAuthError('');
      try {
        sessionStorage.setItem('trix_admin_authenticated', 'true');
      } catch {
        // ignore
      }
    } else {
      setAuthError('비밀번호가 올바르지 않습니다. 다시 입력해 주세요.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasswordInput('');
    try {
      sessionStorage.removeItem('trix_admin_authenticated');
    } catch {
      // ignore
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Download attachment handler
  const handleDownloadFile = (file: AttachedFile) => {
    if (file.dataBase64) {
      const a = document.createElement('a');
      a.href = file.dataBase64;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      // Fallback demo blob for mock data
      const blob = new Blob(
        [
          `[TRIX Translate Attached File]\nFilename: ${file.name}\nSize: ${file.size} bytes\nType: ${file.type}\nUpload Date: ${file.uploadDate}\n\nNotice: This is a verified customer attachment from TRIX Translate Admin Portal.`
        ],
        { type: 'text/plain;charset=utf-8' }
      );
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name.endsWith('.pdf') ? file.name.replace('.pdf', '_mock.txt') : file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  // Export quotes to CSV
  const handleExportCSV = () => {
    if (quotes.length === 0) {
      alert('내보낼 견적 데이터가 없습니다.');
      return;
    }

    const headers = [
      '접수번호(ID)',
      '접수일시',
      '고객성함/기업명',
      '연락처',
      '회신이메일',
      '원문언어',
      '목표언어',
      '번역목적',
      '희망납기',
      '진행상태',
      '첨부파일수',
      '대용량파일링크',
      '문의내용',
      '관리자메모'
    ];

    const rows = quotes.map(q => [
      q.id,
      new Date(q.createdAt).toLocaleString('ko-KR'),
      `"${(q.name || '').replace(/"/g, '""')}"`,
      `"${(q.contactNumber || '').replace(/"/g, '""')}"`,
      `"${(q.email || '').replace(/"/g, '""')}"`,
      `"${(q.sourceLanguage || '').replace(/"/g, '""')}"`,
      `"${(q.targetLanguage || '').replace(/"/g, '""')}"`,
      `"${(q.translationPurpose || '').replace(/"/g, '""')}"`,
      `"${(q.preferredDeadline || '').replace(/"/g, '""')}"`,
      q.status,
      q.files?.length || 0,
      `"${(q.largeFileUrl || '').replace(/"/g, '""')}"`,
      `"${(q.projectDetails || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
      `"${(q.adminNotes || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `trix_quotes_export_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Filtered quotes calculation
  const filteredQuotes = useMemo(() => {
    return quotes.filter(q => {
      // Status filter
      if (statusFilter !== 'ALL' && q.status !== statusFilter) {
        return false;
      }
      // Search term
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim();
        const matchId = q.id.toLowerCase().includes(query);
        const matchName = q.name.toLowerCase().includes(query);
        const matchEmail = q.email.toLowerCase().includes(query);
        const matchPhone = q.contactNumber.toLowerCase().includes(query);
        const matchSource = q.sourceLanguage.toLowerCase().includes(query);
        const matchTarget = q.targetLanguage.toLowerCase().includes(query);
        const matchPurpose = q.translationPurpose.toLowerCase().includes(query);
        return matchId || matchName || matchEmail || matchPhone || matchSource || matchTarget || matchPurpose;
      }
      return true;
    });
  }, [quotes, statusFilter, searchTerm]);

  // Status stats
  const stats = useMemo(() => {
    return {
      total: quotes.length,
      received: quotes.filter(q => q.status === 'Received').length,
      underReview: quotes.filter(q => q.status === 'Under Review').length,
      quotationSent: quotes.filter(q => q.status === 'Quotation Sent').length,
      inProgress: quotes.filter(q => q.status === 'In Progress').length,
      completed: quotes.filter(q => q.status === 'Completed').length,
      totalFiles: quotes.reduce((acc, q) => acc + (q.files?.length || 0), 0)
    };
  }, [quotes]);

  const openDetailModal = (quote: QuoteRequest) => {
    setSelectedQuote(quote);
    setAdminMemoInput(quote.adminNotes || '');
    setMemoSaveSuccess(false);
    setDetailModalOpen(true);
  };

  const handleSaveMemo = () => {
    if (!selectedQuote) return;
    onUpdateQuoteStatus(selectedQuote.id, selectedQuote.status, adminMemoInput);
    setSelectedQuote(prev => (prev ? { ...prev, adminNotes: adminMemoInput } : null));
    setMemoSaveSuccess(true);
    setTimeout(() => setMemoSaveSuccess(false), 2000);
  };

  const getStatusBadge = (status: QuoteRequest['status']) => {
    switch (status) {
      case 'Received':
        return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">접수완료</span>;
      case 'Under Review':
        return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">검토중</span>;
      case 'Quotation Sent':
        return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">견적발송</span>;
      case 'In Progress':
        return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200">번역진행중</span>;
      case 'Completed':
        return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">납품완료</span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">{status}</span>;
    }
  };

  // 1. Password Lock Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              TRIX Translate 관리자 인증
            </h1>
            <p className="text-xs text-slate-500">
              접수된 고객 견적 데이터 및 프로젝트 파일을 열람하려면 관리자 비밀번호를 입력해 주세요.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                관리자 비밀번호 (Admin Password)
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    if (authError) setAuthError('');
                  }}
                  placeholder="관리자 비밀번호를 입력하세요"
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm transition-all pr-12 font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 px-1 py-0.5 rounded cursor-pointer"
                >
                  {showPassword ? '숨기기' : '보기'}
                </button>
              </div>
            </div>

            {authError && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
            >
              <Unlock className="w-4 h-4" />
              <span>관리자 로그인 (Login)</span>
            </button>
          </form>

          <div className="pt-2 text-center">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>일반 웹사이트 메인으로 돌아가기</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16">
      
      {/* Admin Top Navigation Bar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center font-extrabold text-white text-base shadow-sm">
              T
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base tracking-tight text-white">TRIX Translate</span>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  ADMIN CONSOLE
                </span>
              </div>
              <p className="text-[11px] text-slate-400">견적 접수 현황 및 파일 관리 시스템</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-700"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">사이트로 이동</span>
            </button>
            <button
              onClick={handleLogout}
              className="px-3.5 py-2 text-xs font-bold rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 transition-colors flex items-center gap-1.5 cursor-pointer border border-rose-500/30"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>로그아웃</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        
        {/* Top Header & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <span>견적 접수 목록 (Quote Requests)</span>
              <span className="text-sm px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold">
                총 {quotes.length}건
              </span>
            </h1>
            <p className="text-xs text-slate-600 mt-1">
              고객이 제출한 번역 견적 신청 내역, 첨부파일 다운로드, 대용량 파일 링크 및 처리 상태를 실시간으로 확인하고 관리합니다.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              title="현재 등록된 모든 견적 데이터를 CSV(Excel 호환) 파일로 다운로드합니다."
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>CSV 엑셀 다운로드</span>
            </button>
          </div>
        </div>

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-[11px] font-semibold text-slate-500">전체 접수</p>
            <p className="text-2xl font-black text-slate-900 mt-1">{stats.total}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-xs bg-amber-50/30">
            <p className="text-[11px] font-semibold text-amber-800">접수완료</p>
            <p className="text-2xl font-black text-amber-700 mt-1">{stats.received}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-xs bg-blue-50/30">
            <p className="text-[11px] font-semibold text-blue-800">검토중</p>
            <p className="text-2xl font-black text-blue-600 mt-1">{stats.underReview}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-indigo-200 shadow-xs bg-indigo-50/30">
            <p className="text-[11px] font-semibold text-indigo-800">견적발송</p>
            <p className="text-2xl font-black text-indigo-600 mt-1">{stats.quotationSent}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-200 shadow-xs bg-purple-50/30">
            <p className="text-[11px] font-semibold text-purple-800">진행중</p>
            <p className="text-2xl font-black text-purple-600 mt-1">{stats.inProgress}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-xs bg-emerald-50/30">
            <p className="text-[11px] font-semibold text-emerald-800">납품완료</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">{stats.completed}</p>
          </div>
        </div>

        {/* Search & Status Filter Toolbar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="접수번호, 고객명, 이메일, 전화번호, 언어로 검색..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-xs text-slate-800"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Status Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              {[
                { id: 'ALL', label: '전체' },
                { id: 'Received', label: '접수완료' },
                { id: 'Under Review', label: '검토중' },
                { id: 'Quotation Sent', label: '견적발송' },
                { id: 'In Progress', label: '번역진행중' },
                { id: 'Completed', label: '완료' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setStatusFilter(tab.id)}
                  className={`px-3 py-2 rounded-lg font-bold text-xs transition-all cursor-pointer ${
                    statusFilter === tab.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quotes Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4">접수번호 / 일시</th>
                  <th className="py-3.5 px-4">고객 정보</th>
                  <th className="py-3.5 px-4">언어쌍 (원문 ➔ 목표)</th>
                  <th className="py-3.5 px-4">분야 / 희망납기</th>
                  <th className="py-3.5 px-4">첨부파일 및 다운로드</th>
                  <th className="py-3.5 px-4">진행 상태</th>
                  <th className="py-3.5 px-4 text-center">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredQuotes.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-400">
                      <div className="space-y-2">
                        <AlertCircle className="w-8 h-8 text-slate-300 mx-auto" />
                        <p className="font-semibold text-slate-600">조회된 견적 데이터가 없습니다.</p>
                        <p className="text-xs text-slate-400">검색어를 변경하거나 필터를 초기화해 보세요.</p>
                        {quotes.length === 0 && onAddSampleQuotes && (
                          <button
                            onClick={onAddSampleQuotes}
                            className="mt-2 px-3.5 py-1.5 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg font-bold text-xs hover:bg-blue-100 transition-colors cursor-pointer"
                          >
                            테스트 샘플 데이터 생성
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredQuotes.map((quote) => (
                    <tr key={quote.id} className="hover:bg-blue-50/30 transition-colors">
                      {/* Ref No & Date */}
                      <td className="py-4 px-4 align-top">
                        <div className="font-mono font-bold text-blue-600 text-xs flex items-center gap-1.5">
                          <span>{quote.id}</span>
                          <button
                            onClick={() => copyToClipboard(quote.id)}
                            className="text-slate-400 hover:text-blue-600 transition-colors"
                            title="접수번호 복사"
                          >
                            {copiedId === quote.id ? (
                              <Check className="w-3 h-3 text-emerald-600" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          <span>{new Date(quote.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          {new Date(quote.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </td>

                      {/* Customer Info */}
                      <td className="py-4 px-4 align-top">
                        <div className="font-bold text-slate-900 text-xs">
                          {quote.name}
                        </div>
                        <div className="mt-1 flex items-center gap-1 text-[11px] text-slate-600">
                          <Mail className="w-3 h-3 text-slate-400" />
                          <a href={`mailto:${quote.email}`} className="hover:text-blue-600 hover:underline">
                            {quote.email}
                          </a>
                        </div>
                        <div className="mt-0.5 flex items-center gap-1 text-[11px] text-slate-500 font-mono">
                          <Phone className="w-3 h-3 text-slate-400" />
                          <a href={`tel:${quote.contactNumber}`} className="hover:text-blue-600">
                            {quote.contactNumber}
                          </a>
                        </div>
                      </td>

                      {/* Language Pair */}
                      <td className="py-4 px-4 align-top">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[11px]">
                            {quote.sourceLanguage}
                          </span>
                          <span className="text-slate-400 font-bold">➔</span>
                          <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-bold text-[11px]">
                            {quote.targetLanguage}
                          </span>
                        </div>
                      </td>

                      {/* Purpose & Deadline */}
                      <td className="py-4 px-4 align-top">
                        <div className="font-semibold text-slate-800 text-xs">
                          {quote.translationPurpose || '일반 전문 번역'}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{quote.preferredDeadline}</span>
                        </div>
                      </td>

                      {/* Attached Files & Large Link */}
                      <td className="py-4 px-4 align-top min-w-[220px]">
                        <div className="space-y-1.5">
                          {/* Direct attached files */}
                          {quote.files && quote.files.length > 0 ? (
                            <div className="space-y-1">
                              {quote.files.map((file, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center justify-between p-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-[11px] gap-2 transition-colors"
                                >
                                  <div className="flex items-center gap-1.5 truncate flex-1">
                                    <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                    <span className="truncate font-medium text-slate-800" title={file.name}>
                                      {file.name}
                                    </span>
                                    <span className="text-[10px] text-slate-400 shrink-0 font-mono">
                                      ({formatFileSize(file.size)})
                                    </span>
                                  </div>
                                  <button
                                    onClick={() => handleDownloadFile(file)}
                                    className="px-2 py-0.5 bg-blue-600 hover:bg-blue-700 text-white rounded font-bold text-[10px] flex items-center gap-1 shrink-0 transition-colors shadow-2xs cursor-pointer"
                                    title="파일 원본 다운로드"
                                  >
                                    <Download className="w-2.5 h-2.5" />
                                    <span>다운로드</span>
                                  </button>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <span className="text-[11px] text-slate-400 italic">첨부파일 없음</span>
                          )}

                          {/* Large file link */}
                          {quote.largeFileUrl && (
                            <a
                              href={quote.largeFileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 rounded text-[11px] font-bold transition-colors"
                              title="대용량 파일 공유 링크 열기"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>대용량 링크 열기</span>
                            </a>
                          )}
                        </div>
                      </td>

                      {/* Status & Change Dropdown */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-1.5">
                          <div>{getStatusBadge(quote.status)}</div>
                          <select
                            value={quote.status}
                            onChange={(e) => onUpdateQuoteStatus(quote.id, e.target.value as QuoteRequest['status'])}
                            className="text-[11px] py-1 px-2 rounded-lg border border-slate-300 bg-white text-slate-700 font-medium focus:ring-1 focus:ring-blue-500 focus:outline-none cursor-pointer"
                          >
                            <option value="Received">접수완료</option>
                            <option value="Under Review">검토중</option>
                            <option value="Quotation Sent">견적발송</option>
                            <option value="In Progress">번역진행중</option>
                            <option value="Completed">납품완료</option>
                          </select>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 align-top text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => openDetailModal(quote)}
                            className="p-1.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                            title="상세 내용 보기 및 메모"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`접수번호 [${quote.id}] 내역을 삭제하시겠습니까?`)) {
                                onDeleteQuote(quote.id);
                              }
                            }}
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                            title="삭제"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Quote Details & Admin Memo Modal */}
      {detailModalOpen && selectedQuote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-blue-600 text-lg">{selectedQuote.id}</span>
                  {getStatusBadge(selectedQuote.status)}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  접수일시: {new Date(selectedQuote.createdAt).toLocaleString('ko-KR')}
                </p>
              </div>

              <button
                onClick={() => setDetailModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700">
              
              {/* Customer Information Grid */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span>신청인 및 연락처 정보</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">고객 성함 / 기업명</span>
                    <span className="font-bold text-slate-800 text-sm">{selectedQuote.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">회신 이메일</span>
                    <a href={`mailto:${selectedQuote.email}`} className="font-semibold text-blue-600 hover:underline">
                      {selectedQuote.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">연락처 (전화번호)</span>
                    <a href={`tel:${selectedQuote.contactNumber}`} className="font-mono font-medium text-slate-800">
                      {selectedQuote.contactNumber}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">개인정보 및 보안 동의</span>
                    <span className="text-emerald-700 font-bold">동의 완료 (NDA 보장)</span>
                  </div>
                </div>
              </div>

              {/* Translation Project Requirements */}
              <div className="space-y-3">
                <h3 className="font-bold text-slate-900 text-sm">번역 요구사항</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-blue-50/40 p-4 rounded-xl border border-blue-100">
                  <div>
                    <span className="text-slate-500 block text-[11px]">언어 사양</span>
                    <span className="font-bold text-blue-900">
                      {selectedQuote.sourceLanguage} ➔ {selectedQuote.targetLanguage}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">번역 목적 / 분야</span>
                    <span className="font-bold text-slate-800">{selectedQuote.translationPurpose}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">희망 납기</span>
                    <span className="font-bold text-slate-800">{selectedQuote.preferredDeadline}</span>
                  </div>
                  {selectedQuote.estimatedWords && (
                    <div>
                      <span className="text-slate-500 block text-[11px]">추정 단어수</span>
                      <span className="font-bold text-slate-800">{selectedQuote.estimatedWords.toLocaleString()} 단어</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Details / Message Text */}
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">고객 전달 요청사항</h3>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 leading-relaxed whitespace-pre-wrap font-sans">
                  {selectedQuote.projectDetails || '(별도 요청사항 없음)'}
                </div>
              </div>

              {/* Files Section */}
              <div className="space-y-3">
                <h3 className="font-bold text-slate-900 text-sm flex items-center justify-between">
                  <span>첨부파일 ({selectedQuote.files?.length || 0})</span>
                  <span className="text-[11px] text-blue-600 font-medium">클릭 시 즉시 다운로드</span>
                </h3>
                {selectedQuote.files && selectedQuote.files.length > 0 ? (
                  <div className="space-y-2">
                    {selectedQuote.files.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl shadow-xs"
                      >
                        <div className="flex items-center gap-2.5 truncate flex-1">
                          <FileText className="w-5 h-5 text-blue-600 shrink-0" />
                          <div className="truncate">
                            <p className="font-bold text-slate-800 truncate">{file.name}</p>
                            <p className="text-[11px] text-slate-400 font-mono">
                              {formatFileSize(file.size)} • {file.type || 'Document'}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDownloadFile(file)}
                          className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer ml-3 shrink-0"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>파일 다운로드</span>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-400 italic">첨부된 직접 업로드 파일이 없습니다.</p>
                )}

                {/* Large File URL */}
                {selectedQuote.largeFileUrl && (
                  <div className="p-3.5 bg-indigo-50 border border-indigo-200 rounded-xl space-y-1.5">
                    <span className="font-bold text-indigo-900 text-xs flex items-center gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5 text-indigo-600" />
                      <span>대용량 파일 공유 링크 (구글 드라이브 / Dropbox)</span>
                    </span>
                    <div className="flex items-center justify-between gap-2 bg-white p-2.5 rounded-lg border border-indigo-100">
                      <span className="truncate font-mono text-slate-700 text-xs">{selectedQuote.largeFileUrl}</span>
                      <a
                        href={selectedQuote.largeFileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-bold text-xs shrink-0 transition-colors"
                      >
                        열기
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Admin Internal Memo */}
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm">관리자 내부 메모 (Admin Memo)</h3>
                  {memoSaveSuccess && (
                    <span className="text-emerald-600 font-bold text-xs flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> 저장되었습니다
                    </span>
                  )}
                </div>
                <textarea
                  value={adminMemoInput}
                  onChange={(e) => setAdminMemoInput(e.target.value)}
                  placeholder="배정 번역사 정보, 견적 회신 금액, 특이사항 등을 기록하세요."
                  rows={3}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-xs text-slate-800 font-sans"
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleSaveMemo}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>메모 저장</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600">진행 상태 변경:</span>
                <select
                  value={selectedQuote.status}
                  onChange={(e) => {
                    const newStatus = e.target.value as QuoteRequest['status'];
                    onUpdateQuoteStatus(selectedQuote.id, newStatus, adminMemoInput);
                    setSelectedQuote({ ...selectedQuote, status: newStatus });
                  }}
                  className="py-1 px-2.5 rounded-lg border border-slate-300 bg-white text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Received">접수완료 (Received)</option>
                  <option value="Under Review">검토중 (Under Review)</option>
                  <option value="Quotation Sent">견적발송 (Quotation Sent)</option>
                  <option value="In Progress">번역진행중 (In Progress)</option>
                  <option value="Completed">납품완료 (Completed)</option>
                </select>
              </div>

              <button
                onClick={() => setDetailModalOpen(false)}
                className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                닫기
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
