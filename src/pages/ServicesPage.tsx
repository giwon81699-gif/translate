import React from 'react';
import { PageType } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  Languages, 
  FileCheck2, 
  Globe2, 
  ShoppingBag, 
  Megaphone, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileText,
  Sparkles
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageType, servicePreselect?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'translation': return <Languages className="w-5 h-5" />;
      case 'proofreading': return <FileCheck2 className="w-5 h-5" />;
      case 'localization': return <Globe2 className="w-5 h-5" />;
      case 'product-detail': return <ShoppingBag className="w-5 h-5" />;
      case 'business-marketing': return <Megaphone className="w-5 h-5" />;
      case 'multilingual-content': return <Layers className="w-5 h-5" />;
      default: return <Globe2 className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-16 pb-20 text-slate-900 bg-transparent">
      
      {/* Header Banner - Windly Light Style */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-b border-slate-200/80">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-blue-400/10 blur-[100px] pointer-events-none rounded-full" />
        
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.services.sectionBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            {t.services.sectionTitle}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t.services.sectionSubtitle}
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {t.services.items.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-blue-200 transition-all grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
          >
            {/* Left Header Box */}
            <div className="lg:col-span-4 bg-[#F8FAFC] p-6 sm:p-8 flex flex-col justify-between space-y-6 border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shadow-xs">
                  {getServiceIcon(service.id)}
                </div>

                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    SERVICE 0{index + 1}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h2>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed border-t border-slate-200 pt-3">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>{t.services.turnaround}: <strong className="text-slate-900">{service.turnaround}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>{t.services.formats}: <strong className="text-slate-900">{service.popularFormats.join(', ')}</strong></span>
                </div>
              </div>
            </div>

            {/* Right Specifications Details */}
            <div className="lg:col-span-8 p-6 sm:p-8 space-y-6 flex flex-col justify-between bg-white">
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {t.services.overviewTitle}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    {service.fullDesc}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    {t.services.highlights}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables & Recommended */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2 border-t border-slate-100">
                  <div>
                    <span className="font-bold text-slate-700 block mb-1">{t.services.deliverablesTitle}:</span>
                    <ul className="text-slate-600 space-y-1 list-disc list-inside">
                      {service.deliverables.map((d, dIdx) => (
                        <li key={dIdx}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-slate-700 block mb-1">{t.services.recommendedLabel}:</span>
                    <p className="text-slate-600 leading-relaxed">
                      {service.recommendedFor}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quote Button */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  {t.services.quoteNotice}
                </span>
                <button
                  onClick={() => onNavigate('quote', service.id)}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm shadow-blue-600/30 transition-all flex items-center gap-1.5 cursor-pointer active:scale-[0.98]"
                >
                  <span>{t.services.requestThis}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        ))}
      </section>

    </div>
  );
};
