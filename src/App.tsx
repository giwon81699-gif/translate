import React, { useState, useEffect } from 'react';
import { PageType, QuoteRequest } from './types';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteTrackerModal } from './components/QuoteTrackerModal';
import { InstantEstimatorModal } from './components/InstantEstimatorModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { FreeQuotePage } from './pages/FreeQuotePage';
import { FAQPage } from './pages/FAQPage';
import { AdminPage } from './pages/AdminPage';

function checkIsAdminRoute(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    window.location.pathname === '/admin' ||
    window.location.pathname.startsWith('/admin') ||
    window.location.hash === '#admin' ||
    window.location.search.includes('page=admin')
  );
}

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageType>(() => {
    return checkIsAdminRoute() ? 'admin' : 'home';
  });
  const [servicePreselect, setServicePreselect] = useState<string | undefined>();
  const [wordCountPrefill, setWordCountPrefill] = useState<number | undefined>();

  // Listen to popstate and hashchange for URL /admin routing
  useEffect(() => {
    const handleUrlChange = () => {
      if (checkIsAdminRoute()) {
        setCurrentPage('admin');
      } else {
        const hash = window.location.hash.replace('#', '');
        if (hash === 'services' || hash === 'quote' || hash === 'faq') {
          setCurrentPage(hash as PageType);
        } else if (!window.location.pathname.startsWith('/admin')) {
          setCurrentPage('home');
        }
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  // Saved quote requests in localStorage
  const [savedQuotes, setSavedQuotes] = useState<QuoteRequest[]>(() => {
    try {
      const stored = localStorage.getItem('trix_saved_quotes');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (err) {
      console.error('Failed to parse saved quotes from localStorage', err);
    }
    return [
      {
        id: 'TRIX-2026-8942',
        createdAt: new Date(Date.now() - 3600000 * 3).toISOString(),
        name: 'Alexander Wright (Global Retail Corp)',
        contactNumber: '+1 (555) 382-9102',
        email: 'alex.wright@globalbrand.com',
        sourceLanguage: 'English (US)',
        targetLanguage: 'Japanese',
        preferredDeadline: 'Standard (3-5 Business Days)',
        translationPurpose: 'E-Commerce / Detail Page',
        files: [
          {
            id: 'file-1',
            name: 'Amazon_Product_Catalog_2026.pdf',
            size: 245000,
            type: 'application/pdf',
            uploadDate: new Date().toISOString(),
            dataBase64: 'data:text/plain;base64,W1RSSVggVHJhbnNsYXRlXQpBbWF6b25fUHJvZHVjdF9DYXRhbG9nXzIwMjYucGRmClBsZWFzZSB0cmFuc2xhdGUgb3VyIGUtY29tbWVyY2UgcHJvZHVjdCBsaXN0aW5ncyBpbnRvIGhpZ2gtY29udmVydGluZyBuYXRpdmUgSmFwYW5lc2Uu'
          }
        ],
        largeFileUrl: 'https://drive.google.com/drive/folders/sample-high-res-assets',
        projectDetails: 'Please translate our e-commerce product listings with native Japanese nuance, localized character limits, and high-converting retail terminology.',
        privacyAgreed: true,
        status: 'Under Review',
        adminNotes: '검토 완료: 일본 현지 이커머스 전담 번역사 배정 예정 (단가 협의 완료)'
      },
      {
        id: 'TRIX-2026-7819',
        createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
        name: '김태호 (네오바이오텍 특허팀)',
        contactNumber: '010-9842-1133',
        email: 'th.kim@neobiotech.co.kr',
        sourceLanguage: 'Korean',
        targetLanguage: 'English (US)',
        preferredDeadline: 'Express (24-48 Hours)',
        translationPurpose: 'Legal / Contract / Patent',
        files: [
          {
            id: 'file-2',
            name: 'US_Patent_Specification_Draft.docx',
            size: 612000,
            type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            uploadDate: new Date(Date.now() - 3600000 * 18).toISOString(),
            dataBase64: 'data:text/plain;base64,W1RSSVggVHJhbnNsYXRlXQpVU19QYXRlbnRfU3BlY2lmaWNhdGlvbl9EcmFmdC5kb2N4CkJpb2NoZW1pc3RyeSBwYXRlbnQgY2xhaW1zIGFuZCBjb21wb3VuZCBkZXNjcmlwdGlvbiB0cmFuc2xhdGlvbiByZXF1ZXN0Lg=='
          }
        ],
        largeFileUrl: '',
        projectDetails: '미국 특허청(USPTO) 출원용 바이오 화합물 명세서 번역입니다. 특허 전문 미국 변호사 감수가 필요합니다.',
        privacyAgreed: true,
        status: 'Quotation Sent',
        adminNotes: '견적서 메일 발송 완료. 고객사 품의 승인 대기 중.'
      }
    ];
  });

  // Modal visibility states
  const [trackerOpen, setTrackerOpen] = useState(false);
  const [estimatorOpen, setEstimatorOpen] = useState(false);

  // Sync savedQuotes to localStorage (quota-safe)
  useEffect(() => {
    try {
      localStorage.setItem('trix_saved_quotes', JSON.stringify(savedQuotes));
    } catch {
      // If quota exceeded due to large base64 attachments, store lightweight metadata
      try {
        const sanitized = savedQuotes.map(q => ({
          ...q,
          files: q.files.map(f => ({
            id: f.id,
            name: f.name,
            size: f.size,
            type: f.type,
            uploadDate: f.uploadDate
          }))
        }));
        localStorage.setItem('trix_saved_quotes', JSON.stringify(sanitized));
      } catch (innerErr) {
        console.warn('Could not persist quotes to localStorage', innerErr);
      }
    }
  }, [savedQuotes]);

  const handleNavigate = (page: PageType, preselectService?: string) => {
    if (preselectService) {
      setServicePreselect(preselectService);
    } else {
      setServicePreselect(undefined);
    }
    setCurrentPage(page);

    try {
      if (page === 'admin') {
        window.history.pushState(null, '', '/admin');
      } else if (page === 'home') {
        window.history.pushState(null, '', '/');
      } else {
        window.history.pushState(null, '', `/#${page}`);
      }
    } catch {
      // ignore
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuoteSubmitted = (newQuote: QuoteRequest) => {
    setSavedQuotes(prev => [newQuote, ...prev]);
  };

  const handleUpdateQuoteStatus = (
    quoteId: string, 
    newStatus: QuoteRequest['status'], 
    adminNotes?: string
  ) => {
    setSavedQuotes(prev =>
      prev.map(q => {
        if (q.id === quoteId) {
          return {
            ...q,
            status: newStatus,
            ...(adminNotes !== undefined ? { adminNotes } : {})
          };
        }
        return q;
      })
    );
  };

  const handleDeleteQuote = (quoteId: string) => {
    setSavedQuotes(prev => prev.filter(q => q.id !== quoteId));
  };

  const handleAddSampleQuotes = () => {
    setSavedQuotes([
      {
        id: 'TRIX-2026-8942',
        createdAt: new Date(Date.now() - 3600000 * 3).toISOString(),
        name: 'Alexander Wright (Global Retail Corp)',
        contactNumber: '+1 (555) 382-9102',
        email: 'alex.wright@globalbrand.com',
        sourceLanguage: 'English (US)',
        targetLanguage: 'Japanese',
        preferredDeadline: 'Standard (3-5 Business Days)',
        translationPurpose: 'E-Commerce / Detail Page',
        files: [
          {
            id: 'file-1',
            name: 'Amazon_Product_Catalog_2026.pdf',
            size: 245000,
            type: 'application/pdf',
            uploadDate: new Date().toISOString(),
            dataBase64: 'data:text/plain;base64,W1RSSVggVHJhbnNsYXRlXQpBbWF6b25fUHJvZHVjdF9DYXRhbG9nXzIwMjYucGRmClBsZWFzZSB0cmFuc2xhdGUgb3VyIGUtY29tbWVyY2UgcHJvZHVjdCBsaXN0aW5ncyBpbnRvIGhpZ2gtY29udmVydGluZyBuYXRpdmUgSmFwYW5lc2Uu'
          }
        ],
        largeFileUrl: 'https://drive.google.com/drive/folders/sample-high-res-assets',
        projectDetails: 'Please translate our e-commerce product listings with native Japanese nuance, localized character limits, and high-converting retail terminology.',
        privacyAgreed: true,
        status: 'Under Review',
        adminNotes: '검토 완료: 일본 현지 이커머스 전담 번역사 배정 예정 (단가 협의 완료)'
      },
      {
        id: 'TRIX-2026-7819',
        createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
        name: '김태호 (네오바이오텍 특허팀)',
        contactNumber: '010-9842-1133',
        email: 'th.kim@neobiotech.co.kr',
        sourceLanguage: 'Korean',
        targetLanguage: 'English (US)',
        preferredDeadline: 'Express (24-48 Hours)',
        translationPurpose: 'Legal / Contract / Patent',
        files: [
          {
            id: 'file-2',
            name: 'US_Patent_Specification_Draft.docx',
            size: 612000,
            type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            uploadDate: new Date(Date.now() - 3600000 * 18).toISOString(),
            dataBase64: 'data:text/plain;base64,W1RSSVggVHJhbnNsYXRlXQpVU19QYXRlbnRfU3BlY2lmaWNhdGlvbl9EcmFmdC5kb2N4CkJpb2NoZW1pc3RyeSBwYXRlbnQgY2xhaW1zIGFuZCBjb21wb3VuZCBkZXNjcmlwdGlvbiB0cmFuc2xhdGlvbiByZXF1ZXN0Lg=='
          }
        ],
        largeFileUrl: '',
        projectDetails: '미국 특허청(USPTO) 출원용 바이오 화합물 명세서 번역입니다. 특허 전문 미국 변호사 감수가 필요합니다.',
        privacyAgreed: true,
        status: 'Quotation Sent',
        adminNotes: '견적서 메일 발송 완료. 고객사 품의 승인 대기 중.'
      }
    ]);
  };

  const handleApplyFromEstimator = (params: { wordCount: number; serviceType: string }) => {
    setWordCountPrefill(params.wordCount);
    setServicePreselect(params.serviceType);
    handleNavigate('quote');
  };

  // If currently on admin page, render admin experience
  if (currentPage === 'admin') {
    return (
      <AdminPage
        quotes={savedQuotes}
        onUpdateQuoteStatus={handleUpdateQuoteStatus}
        onDeleteQuote={handleDeleteQuote}
        onNavigateHome={() => handleNavigate('home')}
        onAddSampleQuotes={handleAddSampleQuotes}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F4F7FF] via-[#F8FAFC] to-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      
      {/* Top Navbar with Language Dropdown & Windly Light Styling */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        savedQuotesCount={savedQuotes.length}
        onOpenTracker={() => setTrackerOpen(true)}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEstimator={() => setEstimatorOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'quote' && (
          <FreeQuotePage
            initialServicePreselect={servicePreselect}
            initialWordCount={wordCountPrefill}
            onQuoteSubmitted={handleQuoteSubmitted}
            onOpenTracker={() => setTrackerOpen(true)}
          />
        )}

        {currentPage === 'faq' && (
          <FAQPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Quote Tracker Modal with Strict Privacy Verification & Masking */}
      <QuoteTrackerModal
        isOpen={trackerOpen}
        onClose={() => setTrackerOpen(false)}
        savedQuotes={savedQuotes}
      />

      {/* Instant Estimator Modal */}
      <InstantEstimatorModal
        isOpen={estimatorOpen}
        onClose={() => setEstimatorOpen(false)}
        onApplyToQuote={handleApplyFromEstimator}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
