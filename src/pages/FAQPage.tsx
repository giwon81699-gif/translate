import React, { useState } from 'react';
import { PageType } from '../types';
import { FAQ_ITEMS } from '../data/mockData';
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  MessageCircle, 
  ArrowRight
} from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: PageType) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('전체');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const categories = ['전체', 'General', 'Services', 'Pricing', 'Security'];

  const categoryLabels: { [key: string]: string } = {
    '전체': '전체 보기',
    'General': '일반 문의',
    'Services': '서비스 & 문서',
    'Pricing': '견적 & 납기',
    'Security': '보안 & 기밀유지'
  };

  const filteredFaqs = FAQ_ITEMS.filter((faq) => {
    const matchesCategory = activeCategory === '전체' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Title */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
          자주 묻는 질문
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          FAQ (자주 묻는 질문)
        </h1>
        <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
          언어 조합, 번역 분야, 견적 산출, 작업 일정, 보안 정책 등에 관한 궁금증을 확인해 보세요.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="검색어를 입력해보세요 (예: 지원 언어, 견적, 긴급, NDA, 감수)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 shadow-xs"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </div>
      </div>

      {/* Collapsible FAQ List */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
            <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-sm font-bold text-slate-700">검색 조건에 일치하는 질문을 찾을 수 없습니다.</p>
            <p className="text-xs text-slate-500">다른 키워드로 검색하시거나 무료 견적 페이지에서 직접 문의해 보세요.</p>
            <button
              onClick={() => onNavigate('quote')}
              className="px-5 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl inline-block mt-2 cursor-pointer"
            >
              담당자에게 직접 질문하기
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all hover:border-blue-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-extrabold text-blue-600 text-base shrink-0">Q.</span>
                    <h3 className="font-bold text-slate-900 text-base leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`p-1.5 rounded-lg transition-transform shrink-0 ${isOpen ? 'bg-blue-50 text-blue-600 rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-700 text-sm leading-relaxed border-t border-slate-100/80 bg-slate-50/50 flex items-start gap-3 animate-fadeIn">
                    <span className="font-extrabold text-emerald-600 text-base shrink-0">A.</span>
                    <p className="font-medium text-slate-800">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions Box */}
      <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto">
          <MessageCircle className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold">특수 분야 또는 대형 프로젝트 문의가 필요하신가요?</h3>
        <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
          원문 파일이나 요청 사항을 남겨주시면, 비밀유지계약(NDA) 체결 후 1:1 맞춤 상담을 제공해 드립니다.
        </p>
        <button
          onClick={() => onNavigate('quote')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <span>지금 무료 견적 신청하기</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
