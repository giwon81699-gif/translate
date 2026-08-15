import React from 'react';
import { PageType } from '../types';
import { SERVICES_DATA } from '../data/mockData';
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
  FileText
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageType, servicePreselect?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Languages': return <Languages className="w-7 h-7" />;
      case 'FileCheck2': return <FileCheck2 className="w-7 h-7" />;
      case 'Globe2': return <Globe2 className="w-7 h-7" />;
      case 'ShoppingBag': return <ShoppingBag className="w-7 h-7" />;
      case 'Megaphone': return <Megaphone className="w-7 h-7" />;
      case 'Layers': return <Layers className="w-7 h-7" />;
      default: return <Globe2 className="w-7 h-7" />;
    }
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            전문 언어 솔루션
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            번역 & 현지화 서비스 안내
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            ISO 17100 국제 표준 준수. 각 분야 전문 원어민 번역가가 제공하는 정밀하고 설득력 있는 맞춤형 번역 서비스를 소개합니다.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all hover:border-blue-300 grid grid-cols-1 lg:grid-cols-12 ${
              index % 2 === 1 ? 'lg:bg-slate-50/50' : ''
            }`}
          >
            {/* Left Header Box */}
            <div className="lg:col-span-4 bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
                  {getServiceIcon(service.iconName)}
                </div>

                <div>
                  <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider block mb-1">
                    SERVICE 0{index + 1}
                  </span>
                  <h2 className="text-2xl font-extrabold text-white">
                    {service.title}
                  </h2>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800 pt-3">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-300 font-semibold">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>예상 소요시간: {service.turnaround}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 font-semibold">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>지원 포맷: {service.popularFormats.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Right Specifications Details */}
            <div className="lg:col-span-8 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                    서비스 상세 개요 & 특징
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed font-normal">
                    {service.fullDesc}
                  </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Recommended For Box */}
                <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl text-xs space-y-1">
                  <span className="font-bold text-blue-900 block">추천 문서 및 대상:</span>
                  <span className="text-slate-700">{service.recommendedFor}</span>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 font-medium">
                  최종 제공 산출물: <span className="text-slate-800 font-semibold">{service.deliverables.join(' • ')}</span>
                </div>

                <button
                  onClick={() => onNavigate('quote', service.id)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>{service.title} 무료 견적 문의</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* Bottom Conversion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">어떤 서비스가 적합한지 고민이 되시나요?</h3>
            <p className="text-slate-400 text-sm">원문 파일이나 프로젝트 개요를 전달해주시면, 전문 PM이 분석 후 가장 효율적인 작업 방식을 안내해 드립니다.</p>
          </div>
          <button
            onClick={() => onNavigate('quote')}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all cursor-pointer shrink-0"
          >
            맞춤 상담 요청하기
          </button>
        </div>
      </section>

    </div>
  );
};
