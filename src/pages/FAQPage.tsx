import React, { useState } from 'react';
import { PageType } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: PageType) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const categoryKeys: (keyof typeof t.faq.categories)[] = ['all', 'General', 'Services', 'Pricing', 'Security'];

  const filteredFaqs = t.faq.items.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-slate-900 bg-transparent">
      
      {/* Title */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.faq.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.faq.title}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {t.faq.subtitle}
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={t.faq.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-xs"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categoryKeys.map((catKey) => {
            const label = t.faq.categories[catKey];
            return (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === catKey
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Collapsible FAQ List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-sm font-bold text-slate-800">{t.faq.noResultsTitle}</p>
            <button
              onClick={() => onNavigate('quote')}
              className="px-4 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl inline-block mt-2 cursor-pointer shadow-xs hover:bg-blue-700"
            >
              {t.faq.noResultsBtn}
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-200/90 rounded-xl overflow-hidden transition-all shadow-xs hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-blue-50 border border-blue-200 text-blue-600 text-xs font-extrabold flex items-center justify-center shrink-0">
                      Q
                    </span>
                    <span className="font-bold text-sm text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                    <p className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* CTA Box */}
      <div className="p-6 bg-[#F8FAFF] border border-blue-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
        <div>
          <h4 className="text-sm font-bold text-slate-900">{t.faq.needMoreHelp}</h4>
          <p className="text-xs text-slate-600 mt-0.5">{t.faq.needMoreHelpDesc}</p>
        </div>
        <button
          onClick={() => onNavigate('quote')}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer shrink-0 active:scale-[0.98]"
        >
          <span>{t.faq.contactUsCta}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
