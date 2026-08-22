import React, { useState, useEffect } from 'react';
import { PageType, QuoteRequest } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteTrackerModal } from './components/QuoteTrackerModal';
import { InstantEstimatorModal } from './components/InstantEstimatorModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { FreeQuotePage } from './pages/FreeQuotePage';
import { FAQPage } from './pages/FAQPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [servicePreselect, setServicePreselect] = useState<string | undefined>();
  const [wordCountPrefill, setWordCountPrefill] = useState<number | undefined>();

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
      // Seed initial sample submitted quote so tracker demo is immediately viewable
      {
        id: 'TRIX-2026-8942',
        createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
        name: 'Alexander Wright',
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
            uploadDate: new Date().toISOString()
          }
        ],
        projectDetails: 'Please translate our e-commerce product listings with native Japanese nuance, localized character limits, and high-converting retail terminology.',
        privacyAgreed: true,
        status: 'Under Review'
      }
    ];
  });

  // Modal visibility states
  const [trackerOpen, setTrackerOpen] = useState(false);
  const [estimatorOpen, setEstimatorOpen] = useState(false);

  // Sync savedQuotes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('trix_saved_quotes', JSON.stringify(savedQuotes));
    } catch (err) {
      console.error('Failed to save quotes to localStorage', err);
    }
  }, [savedQuotes]);

  const handleNavigate = (page: PageType, preselectService?: string) => {
    if (preselectService) {
      setServicePreselect(preselectService);
    } else {
      setServicePreselect(undefined);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuoteSubmitted = (newQuote: QuoteRequest) => {
    setSavedQuotes(prev => [newQuote, ...prev]);
  };

  const handleApplyFromEstimator = (params: { wordCount: number; serviceType: string }) => {
    setWordCountPrefill(params.wordCount);
    setServicePreselect(params.serviceType);
    setCurrentPage('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans">
      
      {/* Top Navbar */}
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

      {/* Quote Tracker Modal */}
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
