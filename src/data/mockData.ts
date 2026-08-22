import { ServiceInfo, FAQItem, Testimonial, TranslationSample } from '../types';

export const LANGUAGES_LIST = [
  '한국어 (Korean)',
  '영어 (US / UK)',
  '일본어 (Japanese)',
  '중국어 간체 (Chinese Simplified)',
  '중국어 번체 (Chinese Traditional - 번체/대만)',
  '스페인어 (Spain / Latin America)',
  '프랑스어 (France / Canada)',
  '독일어 (German)',
  '베트남어 (Vietnamese)',
  '태국어 (Thai)',
  '인도네시아어 (Indonesian)',
  '아랍어 (Arabic)',
  '포르투갈어 (Brazil / Europe)',
  '이탈리아어 (Italian)',
  '러시아어 (Russian)',
  '네덜란드어 (Dutch)',
  '힌디어 (Hindi)',
  '터키어 (Turkish)',
  '폴란드어 (Polish)',
  '스웨덴어 (Swedish)',
  '덴마크어 (Danish)',
  '노르웨이어 (Norwegian)',
  '핀란드어 (Finnish)'
];

export const SERVICES_DATA: ServiceInfo[] = [
  {
    id: 'translation',
    title: '전문 번역 (Translation)',
    shortDesc: '다양한 언어 및 분야의 고품질 원어민 전문 번역 서비스를 제공합니다.',
    fullDesc: '50개 이상의 세계 주요 언어에 대해 해당 분야 전문 원어민 번역가가 직접 수행하는 고정밀 번역 서비스입니다. 비즈니스 문서, 계약서, 기술 문서 및 학술 논문의 전문 용어와 맥락을 정확하게 반영합니다.',
    iconName: 'Languages',
    highlights: [
      '산업 분야별 전문 지식을 보유한 원어민 번역가 배치',
      '전문 용어집(Glossary) 및 스타일 가이드 엄격 준수',
      '문맥과 업계 표준을 반영한 맞춤형 용어 관리',
      '오류 제로를 위한 2단계 교정 검수 프로세스'
    ],
    deliverables: ['최종 번역 완료 본문 문서', '대역 대조 보고서(선택 사항)', '용어집(Glossary) 업데이트 파일'],
    turnaround: '기본 24~48시간 이내 (긴급 당일 번역 가능)',
    popularFormats: ['DOCX', 'PDF', 'XLSX', 'PPTX', 'TXT'],
    recommendedFor: '계약서, 기술 매뉴얼, 기업 보고서, 연구 논문, 규정 및 일반 비즈니스 문서'
  },
  {
    id: 'proofreading',
    title: '감수 및 교정 (Proofreading)',
    shortDesc: '원문 대조, 문법, 용어 일치 및 자연스러운 표현을 위한 원어민 감수 서비스입니다.',
    fullDesc: '기존 번역본의 완성도를 최고 수준으로 끌어올리는 감수 및 원어민 에디팅 서비스입니다. 원문과의 대조 검수, 문법 오류 수정, 문맥의 매끄러움 및 브랜딩 톤앤매너 감수를 한 번에 진행합니다.',
    iconName: 'FileCheck2',
    highlights: [
      '원문 대 타겟문 1:1 대조 정밀 검수',
      '문법, 맞춤법, 띄어쓰기 및 구문 오류 완벽 교정',
      '브랜드 톤앤매너 및 용어 통일성 감사',
      '현지 문화적 어색함 및 오역 사전 차단'
    ],
    deliverables: ['변경 내용 추적(Track Changes) 검수 문서', '최종 수정본', '언어 품질 평가 보고서'],
    turnaround: '3,000단어 기준 12~24시간',
    popularFormats: ['DOCX', 'PDF', 'Google Docs', 'Markdown'],
    recommendedFor: '출판 예정 자료, 백서(Whitepaper), 투자자 발표 자료(IR), 기존 번역 검수'
  },
  {
    id: 'localization',
    title: '현지화 (Localization)',
    shortDesc: '단순 직역을 넘어 타겟 국가의 문화, 시장, 고객에 맞춘 브랜드 현지화입니다.',
    fullDesc: '소프트웨어, 웹사이트, 모바일 앱, 디지털 콘텐츠를 글로벌 시장의 문화와 관습에 맞게 재창조합니다. 글로벌 브랜드 정체성을 유지하면서 현지 고객의 공감을 이끌어냅니다.',
    iconName: 'Globe2',
    highlights: [
      '현지 관용구, 미디어, 문화적 맥락 맞춤 적응',
      '날짜, 통화, 단위, 숫자 표기법 현지화',
      'UI/UX 문자열 길이 최적화 및 레이아웃 피팅',
      '실제 앱/웹 인맥락(In-Context) L10n 테스트'
    ],
    deliverables: ['현지화 완료 코드 스트링 / JSON 파일', 'UI 스크린샷 검수 보고서', '문화 적합성 가이드'],
    turnaround: '앱 규모에 따라 영업일 기준 2~5일',
    popularFormats: ['JSON', 'XLIFF', 'PO', 'Figma', 'YAML'],
    recommendedFor: '모바일 애플리케이션, SaaS 플랫폼, 글로벌 게임, 크로스보더 커머스'
  },
  {
    id: 'product-detail',
    title: '상품/상세페이지 번역 (Commerce)',
    shortDesc: '이커머스 상품 설명, 상세페이지, 브로슈어, 해외 카탈로그 맞춤 번역입니다.',
    fullDesc: '아마존, 쇼피, 라쿠텐, 자사몰 등 해외 글로벌 마켓플레이스 출품을 위한 구매 전환율 중심 번역입니다. 현지 검색 키워드(SEO)와 현지 소비자의 심리를 반영하여 매출을 끌어올립니다.',
    iconName: 'ShoppingBag',
    highlights: [
      '해외 이커머스 SEO 검색 키워드 자연스러운 녹여내기',
      '구매 욕구를 자극하는 타겟팅 카피라이팅',
      '마켓플레이스 글자 수 및 글자 규격 준수',
      '현지 소비자 구매 심리에 맞춘 혜택 강조 표현'
    ],
    deliverables: ['포맷팅 완료 상품 등록 시트', '현지화 메타데이터 & 제목', '이미지 텍스트 번역본'],
    turnaround: '10개 SKU 기준 당일 ~ 24시간',
    popularFormats: ['CSV', 'XLSX', 'Shopify XML', 'PDF'],
    recommendedFor: '이커머스 브랜드, 글로벌 셀러, 해외 수출 기업, D2C 브랜드'
  },
  {
    id: 'business-marketing',
    title: '비즈니스 & 마케팅 번역',
    shortDesc: '웹사이트, 광고, SNS, 피치덱, 홍보물 등 브랜드 마케팅 번역입니다.',
    fullDesc: '브랜드의 목소리와 감성적 임팩트를 살리는 트랜스크리에이션(Transcreation) 번역입니다. SNS 마케팅, IR 피치덱, 홍보 영상 및 캠페인 카피를 타겟 시장의 감성에 맞춰 매력적으로 재구성합니다.',
    iconName: 'Megaphone',
    highlights: [
      '슬로건, 헤드라인, 광고 카피 트랜스크리에이션',
      '글로벌 시장별 브랜드 톤앤매너 일관성 유지',
      'SNS 콘텐츠 및 해시태그 현지화',
      '투자자 제안서 및 회사소개서 현지화'
    ],
    deliverables: ['트랜스크리에이션 광고 카피 시안', '현지화된 발표 자료', '기획 의도 해설서'],
    turnaround: '24~48시간',
    popularFormats: ['PPTX', 'Figma', 'Keynote', 'DOCX', 'HTML'],
    recommendedFor: '마케팅 대행사, PR 기업, 글로벌 진출 스타트업, 기업 마케팅팀'
  },
  {
    id: 'multilingual-content',
    title: '다국어 통합 파이프라인',
    shortDesc: '글로벌 동시 진출 기업을 위한 통합 다국어 번역 솔루션입니다.',
    fullDesc: '여러 국가에 동시에 진출하는 기업을 위한 엔드투엔드 다국어 번역 시스템입니다. 전담 번역 자산(Translation Memory)과 용어집을 구축하여 지속적인 비용 절감과 품질 통일을 도모합니다.',
    iconName: 'Layers',
    highlights: [
      '다국어 동시 번역 및 통합 프로젝트 관리',
      '번역 메모리(TM) 구축을 통한 누적 비용 절감',
      '전담 매니저(PM) 1:1 실시간 밀착 소통',
      'API 연동 및 지속적 현지화 지원'
    ],
    deliverables: ['다국어 동시 번역 완료본', '통합 번역 자산(TM) 및 용어집 파일', '월간 작업량 대시보드'],
    turnaround: '엔터프라이즈 맞춤형 SLA 제공',
    popularFormats: ['XLIFF', 'REST API', 'Git Sync', 'Batch DOCX'],
    recommendedFor: '다국적 기업, 글로벌 뉴스/미디어, 5개국 이상 동시 진출 SaaS 기업'
  }
];

export const WHY_US_FEATURES = [
  {
    icon: 'Languages',
    title: '50+ 다국어 지원',
    description: '세계 주요 50여 개 언어 및 지역별 방언을 검증된 현지 원어민 번역가가 직접 담당합니다.'
  },
  {
    icon: 'ShieldCheck',
    title: '철저한 품질 관리 (QC)',
    description: 'ISO 17100 국제 표준 준수. 원어민 전문 번역 후 감수자의 2차 검수를 거쳐 완벽함을 기합니다.'
  },
  {
    icon: 'Briefcase',
    title: '산업 분야별 매칭',
    description: 'IT, 의료, 법률, 금융, 이커머스 등 해당 분야의 실무 및 학술 전문성을 지닌 언어학자를 배치합니다.'
  },
  {
    icon: 'Sparkles',
    title: '자연스러운 현지화',
    description: '단순한 문자 직역이 아닌, 현지 문화와 관용적 표현을 반영하여 부드럽고 설득력 있게 번역합니다.'
  },
  {
    icon: 'Zap',
    title: '빠르고 명확한 소통',
    description: '투명한 진행 상황 공유, 전담 PM 지정, 신속한 답변과 정해진 납기일 엄수를 약속합니다.'
  },
  {
    icon: 'Sliders',
    title: '유연한 맞춤형 솔루션',
    description: '고객의 파일 포맷, 긴급 일정, 전용 용어집, 예산에 맞춘 최적의 프로젝트 프로세스를 설계합니다.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: '지원하는 언어는 어떤 것들이 있나요?',
    answer: '영어, 일본어, 중국어(간체/번체), 스페인어, 프랑스어, 독일어, 베트남어, 태국어 등 세계 50여 개 주요 언어를 지원합니다. 희망하시는 언어 조합을 문의해 주시면 즉시 가능 여부를 안내해 드립니다.'
  },
  {
    id: 'faq-2',
    category: 'Services',
    question: '어떤 형태의 문서를 번역할 수 있나요?',
    answer: '비즈니스 계약서, 기술 매뉴얼, 웹사이트, 상품 상세페이지, 회사소개서, 마케팅 홍보물, 앱/소프트웨어 스트링, 논문 등 거의 모든 파일 형식(Word, PDF, Excel, PPT, JSON 등)을 지원합니다.'
  },
  {
    id: 'faq-3',
    category: 'Services',
    question: '기존 번역본에 대한 감수 및 원어민 교정도 가능한가요?',
    answer: '네, 가능합니다. 원문과 대조하여 오역, 맞춤법, 용어 통일성, 현지 표현의 자연스러움을 정밀 검수하는 감수(Proofreading) 서비스를 제공하고 있습니다.'
  },
  {
    id: 'faq-4',
    category: 'Services',
    question: '현지화(Localization)와 일반 번역의 차이는 무엇인가요?',
    answer: '일반 번역이 의미 전달에 집중한다면, 현지화는 타겟 국가의 문화, 관습, 시장 환경, 법적 규제, UI 레이아웃 등에 맞춰 콘텐츠를 재구성하여 현지 서비스처럼 느끼게 만드는 작업입니다.'
  },
  {
    id: 'faq-5',
    category: 'Pricing',
    question: '견적 금액은 어떻게 산정되나요?',
    answer: '원문 단어 수/글자 수, 언어 조합, 문서 분야의 난이도, 요청 납기일, 필요 서비스 종류(번역, 감수, 현지화 등)에 따라 종합적으로 산정됩니다. 무료 견적 문의 페이지에서 파일을 첨부하시면 정확한 산출서를 받으실 수 있습니다.'
  },
  {
    id: 'faq-6',
    category: 'Pricing',
    question: '긴급 당일 번역 신청도 가능한가요?',
    answer: '분량과 언어 조합에 따라 긴급 전담 번역팀을 배치하여 당일 또는 익일 완료가 가능합니다. 견적 문의 시 원하는 납기 일시를 지정해 주시기 바랍니다.'
  },
  {
    id: 'faq-7',
    category: 'Security',
    question: '제출한 파일과 개인정보는 안전하게 보호되나요?',
    answer: '네, 제출해주신 모든 파일과 정보는 엄격한 보안 기밀유지 규정에 따라 관리되며, 견적 산출 및 번역 목적 이외에는 절대 사용되지 않습니다.'
  },
  {
    id: 'faq-8',
    category: 'Security',
    question: '기업 보안을 위한 비밀유지계약(NDA) 체결이 가능한가요?',
    answer: '물론입니다. 미공개 신제품 자료, 기밀 계약서, 보안 문서 등의 경우 프로젝트 시작 전 당사 표준 NDA 체결 또는 고객사의 기밀유지 서식을 사전 체결 후 진행합니다.'
  },
  {
    id: 'faq-9',
    category: 'General',
    question: '무료 견적 요청은 어떻게 진행되나요?',
    answer: '무료 견적 페이지에서 폼 작성과 함께 문서를 첨부(최대 3개)해 주시면 담당 PM이 확인 후 2시간 이내에 세부 견적 및 납기 안내 메일을 발송해 드립니다.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: '김OO 님',
    companyRole: '글로벌 서비스 개발 담당',
    companyName: '',
    industry: 'IT & 소프트웨어',
    rating: 5,
    comment: '유럽 및 아시아 8개국 SaaS 플랫폼과 사용자 매뉴얼 번역을 맡겼는데, UI 글자수 제한과 각 언어별 뉘앙스를 완벽하게 반영해 주셔서 현지 유저 만족도가 매우 높아졌습니다.',
    languagePair: '한국어/영어 → 독일어, 일본어, 프랑스어',
    avatarBg: 'bg-blue-600'
  },
  {
    id: 'test-2',
    clientName: '박OO 님',
    companyRole: '해외 이커머스 운영 총괄',
    companyName: '',
    industry: '이커머스 & 유통',
    rating: 5,
    comment: '아마존과 쇼피 출품용 상세페이지 번역을 진행했는데, 현지 검색 SEO 키워드와 구매전환율 높은 마케팅 카피로 다듬어주신 덕분에 해외 첫 론칭부터 좋은 반응을 얻었습니다.',
    languagePair: '한국어 → 영어, 스페인어, 일본어',
    avatarBg: 'bg-indigo-600'
  },
  {
    id: 'test-3',
    clientName: '최OO 님',
    companyRole: '기업 법률 자문 변호사',
    companyName: '',
    industry: '법률 & 금융',
    rating: 5,
    comment: '크로스보더 계약서와 정관 번역은 오역 하나가 중대한 법적 리스크로 이어집니다. TRIX Translate는 엄밀한 법률 용어 선택과 2차 원어민 감수로 항상 정확한 결과를 제공해 줍니다.',
    languagePair: '영어/독일어 ↔ 한국어',
    avatarBg: 'bg-slate-700'
  },
  {
    id: 'test-4',
    clientName: '정OO 님',
    companyRole: '글로벌 마케팅 기획 담당',
    companyName: '',
    industry: '마케팅 & PR',
    rating: 5,
    comment: '단순 직역이 아니라 브랜드의 감성과 스토리텔링이 살아나도록 트랜스크리에이션을 진행해 주었습니다. 해외 홍보 브로슈어와 캠페인 영상 반응이 기대 이상이었습니다.',
    languagePair: '한국어 → 영어, 일본어, 중국어',
    avatarBg: 'bg-emerald-600'
  }
];

export const TRANSLATION_SAMPLES: TranslationSample[] = [
  {
    id: 'sample-1',
    industry: '이커머스 상세페이지 (E-Commerce)',
    sourceLang: '영어 (English)',
    targetLang: '일본어 (Japanese)',
    originalText: 'Experience effortless comfort with our cloud-soft memory foam cushion engineered for all-day focus.',
    literalTranslation: '終日集中するために設計された、私たちのクラウドソフトのメモリーフォームクッションで、努力を要しない快適さを体験してください。',
    trixLocalizedTranslation: '一日中快適な座り心地をサポート。雲のように柔らかい高密度低反発クッションで、毎日のデスクワークをより快適に。',
    culturalNote: '직역 시 일본어 특유의 수동 표현과 어색한 문장이 됩니다. TRIX는 일본 쇼핑몰 최고 수준의 마케팅 톤을 적용하여 일상적인 데스크워크 편의성과 고급스러운 촉감을 강조했습니다.'
  },
  {
    id: 'sample-2',
    industry: 'SaaS 앱 UI / 모바일 애플리케이션',
    sourceLang: '영어 (English)',
    targetLang: '스페인어 (Spanish)',
    originalText: 'Hit your goals faster with instant automated workflow triggers.',
    literalTranslation: 'Golpee sus metas más rápido con disparadores de flujo de trabajo automatizados instantáneos.',
    trixLocalizedTranslation: 'Alcanza tus objetivos en menos tiempo con flujos de trabajo automatizados al instante.',
    culturalNote: '직역어 "Golpee"(물리적으로 때리다)는 어색함을 유발합니다. TRIX는 스페인어권 SaaS 대시보드 표준인 "Alcanza"(달성하다)와 간결한 명령형 형태를 적용했습니다.'
  },
  {
    id: 'sample-3',
    industry: '비즈니스 발표자료 (IR/Pitch Deck)',
    sourceLang: '영어 (English)',
    targetLang: '한국어 (Korean)',
    originalText: 'We bridge the gap between cutting-edge technology and real-world human impact.',
    literalTranslation: '우리는 최첨단 기술과 현실 세계의 인간적 영향 사이의 간격을 다리 놓습니다.',
    trixLocalizedTranslation: '혁신적인 기술을 사람 중심의 실질적인 가치로 이어갑니다.',
    culturalNote: '영어 관용구 "bridge the gap"을 직역하면 딱딱하고 어색합니다. TRIX는 경영진 및 투자자 발표 자료에 어울리도록 "사람 중심의 실질적 가치로 이어갑니다"라는 세련된 한국어 뉘앙스로 재구성했습니다.'
  }
];
