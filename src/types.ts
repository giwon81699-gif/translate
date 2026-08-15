export type PageType = 'home' | 'services' | 'quote' | 'faq';

export interface AttachedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadDate: string;
}

export interface QuoteRequest {
  id: string;
  createdAt: string;
  name: string;
  contactNumber: string;
  email: string;
  sourceLanguage: string;
  targetLanguage: string;
  preferredDeadline: string;
  translationPurpose: string;
  files: AttachedFile[];
  projectDetails: string;
  privacyAgreed: boolean;
  status: 'Received' | 'Under Review' | 'Quotation Sent' | 'In Progress' | 'Completed';
  estimatedWords?: number;
  estimatedTurnaround?: string;
}

export interface ServiceInfo {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
  deliverables: string[];
  turnaround: string;
  popularFormats: string[];
  recommendedFor: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Pricing' | 'Security';
}

export interface Testimonial {
  id: string;
  clientName: string;
  companyRole: string;
  companyName: string;
  industry: string;
  rating: number;
  comment: string;
  languagePair: string;
  avatarBg: string;
}

export interface TranslationSample {
  id: string;
  industry: string;
  sourceLang: string;
  targetLang: string;
  originalText: string;
  literalTranslation: string;
  trixLocalizedTranslation: string;
  culturalNote: string;
}
