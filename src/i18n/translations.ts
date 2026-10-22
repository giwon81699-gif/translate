export type Language = 'ko' | 'en' | 'ja' | 'zh' | 'es';

export interface ServiceItemTranslation {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  turnaround: string;
  recommendedFor: string;
  highlights: string[];
  deliverables: string[];
  popularFormats: string[];
}

export interface FAQItemTranslation {
  id: string;
  category: 'General' | 'Services' | 'Pricing' | 'Security';
  question: string;
  answer: string;
}

export interface Translations {
  nav: {
    home: string;
    services: string;
    quote: string;
    faq: string;
    trackQuote: string;
    requestQuote: string;
    isoBadge: string;
    tagline: string;
    slaNotice: string;
    selectLanguage: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleGradient: string;
    subtitle: string;
    description: string;
    ctaQuote: string;
    ctaServices: string;
    quickEstimatorBtn: string;
    statLanguages: string;
    statLanguagesLabel: string;
    statDelivery: string;
    statDeliveryLabel: string;
    statIso: string;
    statIsoLabel: string;
    previewBadge: string;
    previewSourceLabel: string;
    previewSourceText: string;
    previewTargetLabel: string;
    previewTargetText: string;
    nativeReviewBadge: string;
    accuracyLabel: string;
  };
  services: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    learnMore: string;
    requestThis: string;
    turnaround: string;
    formats: string;
    highlights: string;
    recommendedLabel: string;
    overviewTitle: string;
    deliverablesTitle: string;
    quoteNotice: string;
    items: ServiceItemTranslation[];
  };
  whyUs: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    features: {
      title: string;
      desc: string;
    }[];
  };
  workflow: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  homeCta: {
    title: string;
    desc: string;
    ctaQuote: string;
    ctaFaq: string;
  };
  sampleDemo: {
    tag: string;
    title: string;
    originalLabel: string;
    literalLabel: string;
    literalWarning: string;
    trixLabel: string;
    trixBadge: string;
    insightLabel: string;
  };
  tracker: {
    modalTitle: string;
    modalSubtitle: string;
    securityBadge: string;
    searchPlaceholder: string;
    searchBtn: string;
    searchHelpText: string;
    searchExample: string;
    searchEmptyNotice: string;
    searchNotFound: string;
    notFoundDesc: string;
    quoteIdLabel: string;
    submittedAt: string;
    statusLabel: string;
    steps: {
      received: string;
      review: string;
      quoteSent: string;
      inProgress: string;
      completed: string;
    };
    clientInfoTitle: string;
    maskedBadge: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    maskedNotice: string;
    langPairLabel: string;
    deadlineLabel: string;
    purposeLabel: string;
    attachedFilesTitle: string;
    secureStorageBadge: string;
    storedBadge: string;
    noFiles: string;
    projectDetailsTitle: string;
    noDetails: string;
    contactPmTitle: string;
    contactPmPlaceholder: string;
    sendNoteBtn: string;
    noteSentSuccess: string;
    responseTimeNotice: string;
    closeBtn: string;
    copyBtn: string;
    copiedBtn: string;
    emptyStateTitle: string;
    emptyStateDesc: string;
  };
  quotePage: {
    badge: string;
    title: string;
    subtitle: string;
    trustIso: string;
    trustNda: string;
    trustSla: string;
    step1Title: string;
    sourceLang: string;
    targetLang: string;
    step2Title: string;
    serviceType: string;
    purpose: string;
    preferredDeadline: string;
    step3Title: string;
    fileUploadTitle: string;
    fileUploadHint: string;
    fileSlotLabel: string;
    clickToSelect: string;
    attachedBadge: string;
    projectDetailsLabel: string;
    projectDetailsPlaceholder: string;
    step4Title: string;
    clientName: string;
    namePlaceholder: string;
    clientEmail: string;
    emailPlaceholder: string;
    clientPhone: string;
    phonePlaceholder: string;
    privacyNotice: string;
    submitBtn: string;
    submittingBtn: string;
    submitNotice: string;
    submittedTitle: string;
    submittedDesc: string;
    yourQuoteId: string;
    checkStatusBtn: string;
    newQuoteBtn: string;
    emailDispatchTitle: string;
    emailPrepared: string;
    emailSentSuccess: string;
    emailFallback: string;
    openEmailApp: string;
    summaryTitle: string;
    summaryApplicant: string;
    summaryLanguage: string;
    summaryScope: string;
    summaryFiles: string;
    summaryNoFiles: string;
    trackerNotice: string;
    purposeOptions: { value: string; label: string }[];
    deadlineOptions: { value: string; label: string }[];
    validation: {
      name: string;
      phone: string;
      email: string;
      sourceLang: string;
      targetLang: string;
      privacy: string;
    };
  };
  estimator: {
    modalTitle: string;
    modalSubtitle: string;
    textModeTab: string;
    wordCountModeTab: string;
    pasteLabel: string;
    wordsDetected: string;
    pastePlaceholder: string;
    wordCountInputLabel: string;
    serviceType: string;
    deadlineLabel: string;
    standardUrgency: string;
    expressUrgency: string;
    calculatedEstimate: string;
    estimatedCost: string;
    estimatedTime: string;
    businessDaysNote: string;
    applyBtn: string;
    closeBtn: string;
    notice: string;
    serviceOptions: {
      translation: string;
      proofreading: string;
      localization: string;
      productDetail: string;
      businessMarketing: string;
    };
    turnaroundOptions: {
      under24h: string;
      fast6to12h: string;
      days1to2: string;
      days2: string;
      days3to4: string;
      customProject: string;
    };
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    categories: {
      all: string;
      General: string;
      Services: string;
      Pricing: string;
      Security: string;
    };
    noResultsTitle: string;
    noResultsBtn: string;
    needMoreHelp: string;
    needMoreHelpDesc: string;
    contactUsCta: string;
    items: FAQItemTranslation[];
  };
  footer: {
    tagline: string;
    description: string;
    isoTitle: string;
    isoDesc: string;
    ndaBadge: string;
    globalLangBadge: string;
    quickLinks: string;
    servicesTitle: string;
    rights: string;
    privacy: string;
    terms: string;
    security: string;
  };
}

export const translations: Record<Language, Translations> = {
  // ==========================================
  // KOREAN (한국어)
  // ==========================================
  ko: {
    nav: {
      home: '홈',
      services: '전문 서비스',
      quote: '무료 견적 문의',
      faq: '자주 묻는 질문',
      trackQuote: '신청 내역 조회',
      requestQuote: '무료 견적 신청',
      isoBadge: 'ISO 17100 국제 인증',
      tagline: '글로벌 다국어 전문 번역 & 현지화 파트너',
      slaNotice: '영업시간 내 2시간 이내 견적 회신',
      selectLanguage: '언어 선택'
    },
    hero: {
      badge: '전 세계 50개국+ 다국어 전문 번역 & 현지화',
      titleLine1: '언어를 넘어,',
      titleGradient: '세계로 연결합니다.',
      subtitle: '글로벌 비즈니스의 성공을 이끄는 프리미엄 현지화 파트너',
      description: '기업 계약서, IT/앱 현지화, 해외 이커머스 상세페이지부터 마케팅 홍보물까지 50개국 이상의 공인 원어민 전문가가 정밀하게 번역합니다.',
      ctaQuote: '무료 견적 문의하기',
      ctaServices: '서비스 안내 보기',
      quickEstimatorBtn: '실시간 간이 견적',
      statLanguages: '50개국+',
      statLanguagesLabel: '글로벌 지원 언어',
      statDelivery: '99.8%',
      statDeliveryLabel: '정시 납기 준수율',
      statIso: 'ISO 17100',
      statIsoLabel: '국제 품질 인증',
      previewBadge: '50개국 실시간 원어민 검수',
      previewSourceLabel: '원문 (English Source):',
      previewSourceText: '"Expand your brand globally with confidence and authentic local appeal."',
      previewTargetLabel: '타겟: 전 세계 50개국+ 다국어 지원',
      previewTargetText: '확고한 신뢰와 현지 문화에 울림을 주는 언어로 귀사 브랜드의 성공적인 세계 진출을 지원합니다.',
      nativeReviewBadge: '100% 원어민 검수',
      accuracyLabel: '정확도: 99.8%'
    },
    services: {
      sectionBadge: '전문 번역 및 현지화 솔루션',
      sectionTitle: '비즈니스에 최적화된 다국어 서비스',
      sectionSubtitle: '정확도와 속도, 전문 용어 데이터베이스를 기반으로 완벽한 번역 품질을 제공합니다.',
      learnMore: '자세히 보기',
      requestThis: '이 서비스 견적 신청',
      turnaround: '표준 납기',
      formats: '지원 포맷',
      highlights: '핵심 강점',
      recommendedLabel: '추천 활용 분야',
      overviewTitle: '서비스 개요 및 세부 사항',
      deliverablesTitle: '최종 납품 산출물',
      quoteNotice: '문서 첨부 시 2시간 이내 견적서 발행',
      items: [
        {
          id: 'translation',
          title: '전문 문서 번역 (Translation)',
          shortDesc: '계약서, 금융, 법률, 기술 문서 등 분야별 전문 원어민 번역',
          fullDesc: '50개 이상의 세계 주요 언어에 대해 해당 분야 전문 원어민 번역가가 직접 수행하는 고정밀 번역 서비스입니다. 비즈니스 문서, 계약서, 기술 문서 및 학술 논문의 전문 용어와 맥락을 정확하게 반영합니다.',
          turnaround: '기본 24~48시간 이내 (당일 긴급 가능)',
          recommendedFor: '계약서, 기술 매뉴얼, 기업 보고서, 연구 논문, 규정 및 일반 비즈니스 문서',
          highlights: [
            '산업 분야별 전문 지식을 보유한 원어민 번역가 배치',
            '전문 용어집(Glossary) 및 스타일 가이드 엄격 준수',
            '문맥과 업계 표준을 반영한 맞춤형 용어 관리',
            '오류 제로를 위한 2단계 교정 검수 프로세스'
          ],
          deliverables: ['최종 번역 완료 본문 문서', '대역 대조 보고서(선택 사항)', '용어집(Glossary) 업데이트 파일'],
          popularFormats: ['DOCX', 'PDF', 'XLSX', 'PPTX', 'TXT']
        },
        {
          id: 'proofreading',
          title: '감수 및 교정 (Proofreading)',
          shortDesc: '원문 대조, 문법, 용어 일치 및 자연스러운 표현을 위한 원어민 감수',
          fullDesc: '기존 번역본의 완성도를 최고 수준으로 끌어올리는 감수 및 원어민 에디팅 서비스입니다. 원문과의 대조 검수, 문법 오류 수정, 문맥의 매끄러움 및 브랜딩 톤앤매너 감수를 한 번에 진행합니다.',
          turnaround: '3,000단어 기준 12~24시간',
          recommendedFor: '출판 예정 자료, 백서(Whitepaper), 투자자 발표 자료(IR), 기존 번역 검수',
          highlights: [
            '원문 대 타겟문 1:1 대조 정밀 검수',
            '문법, 맞춤법, 띄어쓰기 및 구문 오류 완벽 교정',
            '브랜드 톤앤매너 및 용어 통일성 감사',
            '현지 문화적 어색함 및 오역 사전 차단'
          ],
          deliverables: ['변경 내용 추적(Track Changes) 검수 문서', '최종 수정본', '언어 품질 평가 보고서'],
          popularFormats: ['DOCX', 'PDF', 'Google Docs', 'Markdown']
        },
        {
          id: 'localization',
          title: '소프트웨어 & 앱 현지화 (Localization)',
          shortDesc: '웹사이트, 모바일 앱, SaaS UI/UX 문자열 및 문화적 최적화',
          fullDesc: '소프트웨어, 웹사이트, 모바일 앱, 디지털 콘텐츠를 글로벌 시장의 문화와 관습에 맞게 재창조합니다. 글로벌 브랜드 정체성을 유지하면서 현지 고객의 공감을 이끌어냅니다.',
          turnaround: '앱 규모에 따라 영업일 기준 2~5일',
          recommendedFor: '모바일 애플리케이션, SaaS 플랫폼, 글로벌 게임, 크로스보더 커머스',
          highlights: [
            '현지 관용구, 미디어, 문화적 맥락 맞춤 적응',
            '날짜, 통화, 단위, 숫자 표기법 현지화',
            'UI/UX 문자열 길이 최적화 및 레이아웃 피팅',
            '실제 앱/웹 인맥락(In-Context) L10n 테스트'
          ],
          deliverables: ['현지화 완료 코드 스트링 / JSON 파일', 'UI 스크린샷 검수 보고서', '문화 적합성 가이드'],
          popularFormats: ['JSON', 'XLIFF', 'PO', 'Figma', 'YAML']
        },
        {
          id: 'product-detail',
          title: '상품/상세페이지 번역 (Commerce)',
          shortDesc: '이커머스 상품 설명, 상세페이지, 해외 마켓플레이스 맞춤 번역',
          fullDesc: '아마존, 쇼피, 라쿠텐, 자사몰 등 해외 글로벌 마켓플레이스 출품을 위한 구매 전환율 중심 번역입니다. 현지 검색 키워드(SEO)와 현지 소비자의 심리를 반영하여 매출을 끌어올립니다.',
          turnaround: '10개 SKU 기준 당일 ~ 24시간',
          recommendedFor: '이커머스 브랜드, 글로벌 셀러, 해외 수출 기업, D2C 브랜드',
          highlights: [
            '해외 이커머스 SEO 검색 키워드 자연스러운 녹여내기',
            '구매 욕구를 자극하는 타겟팅 카피라이팅',
            '마켓플레이스 글자 수 및 글자 규격 준수',
            '현지 소비자 구매 심리에 맞춘 혜택 강조 표현'
          ],
          deliverables: ['포맷팅 완료 상품 등록 시트', '현지화 메타데이터 & 제목', '이미지 텍스트 번역본'],
          popularFormats: ['CSV', 'XLSX', 'Shopify XML', 'PDF']
        },
        {
          id: 'business-marketing',
          title: '비즈니스 & 마케팅 번역',
          shortDesc: '웹사이트, 광고, SNS, 피치덱, 브랜드 카피라이팅',
          fullDesc: '브랜드의 목소리와 감성적 임팩트를 살리는 트랜스크리에이션(Transcreation) 번역입니다. SNS 마케팅, IR 피치덱, 홍보 영상 및 캠페인 카피를 타겟 시장의 감성에 맞춰 매력적으로 재구성합니다.',
          turnaround: '24~48시간',
          recommendedFor: '마케팅 대행사, PR 기업, 글로벌 진출 스타트업, 기업 마케팅팀',
          highlights: [
            '슬로건, 헤드라인, 광고 카피 트랜스크리에이션',
            '글로벌 시장별 브랜드 톤앤매너 일관성 유지',
            'SNS 콘텐츠 및 해시태그 현지화',
            '투자자 제안서 및 회사소개서 현지화'
          ],
          deliverables: ['트랜스크리에이션 광고 카피 시안', '현지화된 발표 자료', '기획 의도 해설서'],
          popularFormats: ['PPTX', 'Figma', 'Keynote', 'DOCX', 'HTML']
        },
        {
          id: 'multilingual-content',
          title: '다국어 통합 파이프라인',
          shortDesc: '글로벌 동시 진출 기업을 위한 원스톱 다국어 번역 시스템',
          fullDesc: '여러 국가에 동시에 진출하는 기업을 위한 엔드투엔드 다국어 번역 시스템입니다. 전담 번역 자산(Translation Memory)과 용어집을 구축하여 지속적인 비용 절감과 품질 통일을 도모합니다.',
          turnaround: '엔터프라이즈 맞춤형 SLA 제공',
          recommendedFor: '다국적 기업, 글로벌 뉴스/미디어, 5개국 이상 동시 진출 SaaS 기업',
          highlights: [
            '다국어 동시 번역 및 통합 프로젝트 관리',
            '번역 메모리(TM) 구축을 통한 누적 비용 절감',
            '전담 매니저(PM) 1:1 실시간 밀착 소통',
            'API 연동 및 지속적 현지화 지원'
          ],
          deliverables: ['다국어 동시 번역 완료본', '통합 번역 자산(TM) 및 용어집 파일', '월간 작업량 대시보드'],
          popularFormats: ['XLIFF', 'REST API', 'Git Sync', 'Batch DOCX']
        }
      ]
    },
    whyUs: {
      sectionBadge: '신뢰할 수 있는 품질 기준',
      sectionTitle: 'TRIX Translate를 선택하는 이유',
      sectionSubtitle: '철저한 품질 관리와 원어민 전문가 팀이 비즈니스의 성공적인 글로벌 확장을 보장합니다.',
      features: [
        {
          title: '50+ 다국어 지원',
          desc: '세계 주요 50여 개 언어 및 지역별 방언을 검증된 현지 원어민 번역가가 직접 담당합니다.'
        },
        {
          title: '철저한 품질 관리 (QC)',
          desc: 'ISO 17100 국제 표준 준수. 원어민 전문 번역 후 감수자의 2차 검수를 거쳐 완벽함을 기합니다.'
        },
        {
          title: '산업 분야별 매칭',
          desc: 'IT, 의료, 법률, 금융, 이커머스 등 해당 분야의 실무 및 학술 전문성을 지닌 언어학자를 배치합니다.'
        },
        {
          title: '자연스러운 현지화',
          desc: '단순한 문자 직역이 아닌, 현지 문화와 관용적 표현을 반영하여 부드럽고 설득력 있게 번역합니다.'
        }
      ]
    },
    workflow: {
      sectionBadge: '투명하고 신속한 프로세스',
      sectionTitle: '4단계 원스톱 진행 절차',
      sectionSubtitle: '신청부터 최종 납품까지 체계적이고 신뢰할 수 있는 단계를 거칩니다.',
      step1Title: 'STEP 01. 무료 견적 접수',
      step1Desc: '문서 첨부 및 언어/납기 희망사항을 제출하시면 전담 매니저가 즉시 검토합니다.',
      step2Title: 'STEP 02. 전담 PM & 전문 번역가 배정',
      step2Desc: '해당 산업 분야 실무 경험을 보유한 공인 원어민 번역가를 1:1 매칭합니다.',
      step3Title: 'STEP 03. 정밀 번역 & 교정 감수',
      step3Desc: '용어집(Glossary) 준수 하에 초역 후 감수자의 철저한 2단계 품질 검증을 수행합니다.',
      step4Title: 'STEP 04. 정시 납품 & 무상 보증',
      step4Desc: '지정 기한 내 완벽한 원본 포맷으로 납품하며 검수 후 수정 요청을 무상 지원합니다.'
    },
    homeCta: {
      title: '글로벌 확장을 준비 중이신가요?',
      desc: '지금 바로 문서를 첨부하고 전문 원어민 번역팀의 신속한 견적서와 세부 일정을 받아보세요.',
      ctaQuote: '무료 견적 문의하기',
      ctaFaq: '자주 묻는 질문 확인'
    },
    sampleDemo: {
      tag: '현지화 품질 비교 체험',
      title: '직역과 원어민 로컬라이제이션의 결정적 차이',
      originalLabel: '원문 (Source Text)',
      literalLabel: '일반 직역 / 단순 기계 번역',
      literalWarning: '맥락과 정서가 반영되지 않아 브랜드 신뢰도를 저하시킬 수 있습니다.',
      trixLabel: 'TRIX 원어민 맞춤 현지화',
      trixBadge: '최고 전환 품질',
      insightLabel: '문화적 뉘앙스 & 컨텍스트 인사이트'
    },
    tracker: {
      modalTitle: '1:1 견적 신청 내역 조회',
      modalSubtitle: '고객님의 고유 접수 번호를 입력하시면 실시간 진행 상태를 안전하게 확인하실 수 있습니다.',
      securityBadge: '보안 조회',
      searchPlaceholder: '접수 번호를 입력하세요 (예: TRIX-2026-8942)',
      searchBtn: '조회하기',
      searchHelpText: '개인정보 보호를 위해 본인의 접수 번호로만 조회가 가능합니다.',
      searchExample: '예: TRIX-2026-8942',
      searchEmptyNotice: '조회하실 접수 번호를 입력해 주세요.',
      searchNotFound: '해당 접수 번호의 견적 신청 내역을 찾을 수 없습니다.',
      notFoundDesc: '견적 신청 시 화면에 표시된 고유 접수 번호를 정확히 입력하셨는지 확인해 주세요.',
      quoteIdLabel: '접수 번호',
      submittedAt: '신청 일시',
      statusLabel: '현재 진행 상태',
      steps: {
        received: '접수 완료',
        review: '검토 중',
        quoteSent: '견적 발송',
        inProgress: '번역 진행',
        completed: '납품 완료'
      },
      clientInfoTitle: '신청자 정보',
      maskedBadge: '마스킹 보호 적용됨',
      nameLabel: '성함 / 기업명',
      emailLabel: '회신 이메일',
      phoneLabel: '연락처',
      maskedNotice: '※ 고객님의 개인정보 보호를 위해 성함, 이메일, 전화번호가 마스킹 처리되어 표시됩니다.',
      langPairLabel: '번역 언어',
      deadlineLabel: '희망 납기',
      purposeLabel: '번역 목적',
      attachedFilesTitle: '첨부 파일 목록',
      secureStorageBadge: '보안 보관',
      storedBadge: '보관 완료',
      noFiles: '첨부된 파일이 없습니다.',
      projectDetailsTitle: '세부 요청사항',
      noDetails: '작성된 세부 요청사항이 없습니다.',
      contactPmTitle: '전담 PM에게 추가 문의 / 요청사항 전달',
      contactPmPlaceholder: '일정 변경, 추가 파일 전달, 긴급 요청 등 메모를 남겨주시면 담당 PM이 확인합니다...',
      sendNoteBtn: '메모 전달',
      noteSentSuccess: '전담 PM에게 메모가 안전하게 전달되었습니다.',
      responseTimeNotice: '영업시간 내 2시간 이내에 기재하신 연락처로 회신드립니다.',
      closeBtn: '닫기',
      copyBtn: '복사',
      copiedBtn: '복사됨',
      emptyStateTitle: '접수 번호를 입력하여 견적 진행 상황을 확인하세요',
      emptyStateDesc: 'TRIX Translate는 고객님의 소중한 기밀 문서와 개인정보를 보호하기 위해, 브라우저에 과거 이력을 일괄 노출하지 않고 고유 접수 번호 단일 검증 방식을 엄격히 적용하고 있습니다.'
    },
    quotePage: {
      badge: '비즈니스 무료 견적',
      title: '빠르고 정확한 다국어 번역 견적 신청',
      subtitle: '번역하실 문서를 첨부해 주시면, 전담 PM이 영업시간 기준 2시간 이내에 세부 견적서와 최적의 납기를 제안해 드립니다.',
      trustIso: 'ISO 17100 국제 번역 품질 표준 준수',
      trustNda: '100% 비밀유지(NDA) 및 암호화 파일 취급',
      trustSla: '영업시간 2시간 이내 견적서 회신',
      step1Title: '신청자 기본 정보',
      sourceLang: '출발 언어 (Source)',
      targetLang: '도착 언어 (Target)',
      step2Title: '언어 조합 선택',
      serviceType: '서비스 종류',
      purpose: '번역 분야 및 목적',
      preferredDeadline: '희망 납기 일정',
      step3Title: '서비스 분야 및 납기 선택',
      fileUploadTitle: '번역 대상 문서 첨부 (최대 3개)',
      fileUploadHint: 'DOCX, PDF, XLSX, PPTX, HWP, TXT, ZIP, 이미지 등 모든 포맷을 지원합니다. (슬롯당 최대 25MB)',
      fileSlotLabel: '파일 추가',
      clickToSelect: '클릭하여 선택',
      attachedBadge: '첨부됨',
      projectDetailsLabel: '프로젝트 세부 요청사항 (선택 사항)',
      projectDetailsPlaceholder: '문서 배경 설명, 특정 전문 용어 선호사항, 타겟 독자층, 서식 유지 요구사항 등을 자유롭게 기재해 주세요...',
      step4Title: '문서 첨부 및 요청사항',
      clientName: '성함 또는 기업명',
      namePlaceholder: '예: 홍길동 / (주)글로벌트레이딩',
      clientEmail: '회신 받으실 이메일',
      emailPlaceholder: 'quote@yourdomain.com',
      clientPhone: '연락처 (휴대전화)',
      phonePlaceholder: '예: 010-1234-5678',
      privacyNotice: '개인정보 수집 및 이용, 번역 견적 산출 목적의 문서 취급 및 기밀유지(NDA) 조항에 동의합니다.',
      submitBtn: '무료 견적 신청서 제출하기',
      submittingBtn: '견적서 및 이메일 전송 중...',
      submitNotice: '신청 시 사업용 메일(contact@trixtranslate.com)로 즉시 전달됩니다.',
      submittedTitle: '견적 신청이 성공적으로 접수되었습니다!',
      submittedDesc: '제출하신 내용이 안전하게 저장되었으며, 전담 PM이 검토 후 영업시간 기준 2시간 이내에 기재해주신 이메일로 정식 견적서를 발송해 드립니다.',
      yourQuoteId: '고객님의 고유 접수 번호 (Reference ID)',
      checkStatusBtn: '신청 내역 및 진행 상태 조회',
      newQuoteBtn: '추가 견적 작성',
      emailDispatchTitle: '사업용 이메일 발송 현황',
      emailPrepared: '견적 문의 내용이 전송 준비되었으며 contact@trixtranslate.com으로 전달됩니다.',
      emailSentSuccess: '사업용 이메일(contact@trixtranslate.com)로 견적 내용이 EmailJS를 통해 정상 발송되었습니다.',
      emailFallback: '시스템에 정상 접수되었습니다. 아래 버튼으로 이메일 앱에서 즉시 추가 전송하실 수 있습니다.',
      openEmailApp: '내 이메일 앱에서 열기 (백업 발송)',
      summaryTitle: '접수 요약:',
      summaryApplicant: '신청인',
      summaryLanguage: '언어',
      summaryScope: '납기/분야',
      summaryFiles: '첨부파일',
      summaryNoFiles: '없음',
      trackerNotice: '발급된 고유 접수 번호를 상단 메뉴의 [신청 내역 조회]에 입력하시면 실시간 진행 상황을 언제든 안전하게 확인하실 수 있습니다.',
      purposeOptions: [
        { value: '전문 문서 번역 (계약서 / 비즈니스 / 기술)', label: '전문 문서 번역 (계약서 / 비즈니스 / 기술)' },
        { value: '상품 상세페이지 / 이커머스 (아마존, 쇼피, 라쿠텐)', label: '상품 상세페이지 / 이커머스 (아마존, 쇼피, 라쿠텐)' },
        { value: '소프트웨어 및 모바일 앱 / 웹 현지화 (UI/UX)', label: '소프트웨어 및 모바일 앱 / 웹 현지화 (UI/UX)' },
        { value: '원어민 감수 및 교정 (Proofreading)', label: '원어민 감수 및 교정 (Proofreading)' },
        { value: '마케팅 및 브랜드 트랜스크리에이션', label: '마케팅 및 브랜드 트랜스크리에이션' },
        { value: '법률 / 특허 / 규제 준수 문서', label: '법률 / 특허 / 규제 준수 문서' },
        { value: '기타 맞춤형 프로젝트', label: '기타 맞춤형 프로젝트' }
      ],
      deadlineOptions: [
        { value: '일반 납기 (영업일 기준 3~5일)', label: '일반 납기 (영업일 기준 3~5일)' },
        { value: '빠른 납기 (영업일 기준 1~2일)', label: '빠른 납기 (영업일 기준 1~2일)' },
        { value: '긴급 당일 번역 (협의 필요)', label: '긴급 당일 번역 (협의 필요)' },
        { value: '장기 엔터프라이즈 정기 프로젝트', label: '장기 엔터프라이즈 정기 프로젝트' }
      ],
      validation: {
        name: '성함 또는 기업명을 입력해 주세요.',
        phone: '연락처를 입력해 주세요.',
        email: '올바른 이메일 주소를 입력해 주세요.',
        sourceLang: '출발 언어를 선택해 주세요.',
        targetLang: '도착 언어를 선택해 주세요.',
        privacy: '개인정보 처리 및 비밀유지 서약에 동의해 주세요.'
      }
    },
    estimator: {
      modalTitle: '실시간 간이 견적 계산기',
      modalSubtitle: '원문 텍스트를 붙여넣거나 단어 수를 입력하시면 예상 견적과 표준 납기를 즉시 산출해 드립니다.',
      textModeTab: '텍스트 붙여넣기 (자동 단어 수 계산)',
      wordCountModeTab: '단어 수 직접 입력',
      pasteLabel: '원문 텍스트 붙여넣기:',
      wordsDetected: '단어 감지됨',
      pastePlaceholder: '단어 수를 측정할 원문 문서를 여기에 붙여넣으세요...',
      wordCountInputLabel: '예상 단어 수 (Word Count):',
      serviceType: '서비스 종류',
      deadlineLabel: '납기 옵션:',
      standardUrgency: '표준 납기 (Standard)',
      expressUrgency: '긴급 특급 (Express)',
      calculatedEstimate: '예상 산출 견적',
      estimatedCost: '예상 번역료',
      estimatedTime: '예상 소요 시간',
      businessDaysNote: '영업일 기준',
      applyBtn: '이 견적으로 무료 신청서 작성',
      closeBtn: '닫기',
      notice: '※ 본 견적은 단어 수 기준의 간이 추정치이며, 원문의 전문성, 난이도 및 서식에 따라 정식 견적 시 일부 차이가 있을 수 있습니다.',
      serviceOptions: {
        translation: '전문 문서 번역 (Standard)',
        proofreading: '원어민 감수 및 교정 (Proofreading)',
        localization: '웹 / 앱 현지화 (Localization)',
        productDetail: '상품 상세페이지 번역 (Commerce)',
        businessMarketing: '마케팅 & 브랜딩 번역'
      },
      turnaroundOptions: {
        under24h: '24시간 이내',
        fast6to12h: '6~12시간 이내',
        days1to2: '1~2일 소요',
        days2: '2일 소요',
        days3to4: '3~4일 소요',
        customProject: '프로젝트 별도 협의'
      }
    },
    faq: {
      badge: '도움이 필요하신가요?',
      title: '자주 묻는 질문 (FAQ)',
      subtitle: '번역 의뢰, 지원 언어, 납기, 보안 및 비용 산정에 관해 고객님들께서 자주 문의하시는 내용을 정리했습니다.',
      searchPlaceholder: '궁금하신 키워드를 입력해 보세요 (예: 지원 언어, 납기, NDA, 파일 형식)',
      categories: {
        all: '전체 보기',
        General: '일반 문의',
        Services: '서비스 & 문서',
        Pricing: '견적 & 납기',
        Security: '보안 & 기밀유지'
      },
      noResultsTitle: '검색 조건에 일치하는 질문을 찾을 수 없습니다.',
      noResultsBtn: '1:1 맞춤 문의하기',
      needMoreHelp: '원하시는 답변을 찾지 못하셨나요?',
      needMoreHelpDesc: '전담 PM이 2시간 이내에 세부 견적과 상담을 도와드립니다.',
      contactUsCta: '1:1 맞춤 견적 문의',
      items: [
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
      ]
    },
    footer: {
      tagline: '글로벌 다국어 전문 번역 & 현지화 파트너',
      description: '기업 비즈니스, 해외 이커머스, IT 플랫폼의 성공적인 글로벌 시장 확장을 위한 최고 품질의 다국어 번역과 현지화 서비스를 제공합니다.',
      isoTitle: 'ISO 17100 국제 번역 서비스 인증',
      isoDesc: '엄격한 품질 보증 시스템을 통해 정확하고 신뢰할 수 있는 결과물을 제공합니다.',
      ndaBadge: '100% 비밀유지(NDA) 보장',
      globalLangBadge: '50개국+ 다국어 지원',
      quickLinks: '빠른 메뉴',
      servicesTitle: '전문 서비스',
      rights: '© 2026 TRIX Translate. All rights reserved.',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      security: '보안 정책'
    }
  },

  // ==========================================
  // ENGLISH (English)
  // ==========================================
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      quote: 'Free Quote',
      faq: 'FAQ',
      trackQuote: 'Track Quote',
      requestQuote: 'Get a Free Quote',
      isoBadge: 'ISO 17100 Certified',
      tagline: 'Global Multilingual Translation & Localization Partner',
      slaNotice: 'Quote response within 2 hours during business hours',
      selectLanguage: 'Select Language'
    },
    hero: {
      badge: '50+ Global Languages & Professional Localization',
      titleLine1: 'Beyond Language,',
      titleGradient: 'Connecting You to the World.',
      subtitle: 'Your Premium Localization Partner for Global Business Growth',
      description: 'From corporate contracts, IT and mobile app localization, overseas e-commerce product pages to high-impact marketing, accredited native specialists translate with uncompromising precision.',
      ctaQuote: 'Request Free Quote',
      ctaServices: 'Explore Services',
      quickEstimatorBtn: 'Instant Quick Estimator',
      statLanguages: '50+ Langs',
      statLanguagesLabel: 'Global Languages Supported',
      statDelivery: '99.8%',
      statDeliveryLabel: 'On-Time Delivery Rate',
      statIso: 'ISO 17100',
      statIsoLabel: 'International Quality Certified',
      previewBadge: '50+ Countries Native Review',
      previewSourceLabel: 'Source Text (English):',
      previewSourceText: '"Expand your brand globally with confidence and authentic local appeal."',
      previewTargetLabel: 'Target: 50+ Global Languages Supported',
      previewTargetText: 'Empower your global expansion with authoritative credibility and messaging crafted to resonate deeply with local audiences.',
      nativeReviewBadge: '100% Native Review',
      accuracyLabel: 'Accuracy: 99.8%'
    },
    services: {
      sectionBadge: 'Professional Translation & Localization',
      sectionTitle: 'Tailored Multilingual Services for Enterprise',
      sectionSubtitle: 'Delivering unmatched accuracy, speed, and terminology consistency powered by native domain specialists.',
      learnMore: 'Learn More',
      requestThis: 'Request Quote for This',
      turnaround: 'Standard Turnaround',
      formats: 'Supported Formats',
      highlights: 'Core Highlights',
      recommendedLabel: 'Recommended For',
      overviewTitle: 'Service Overview & Specifications',
      deliverablesTitle: 'Final Deliverables',
      quoteNotice: 'Quote issued within 2 hours with file attachment',
      items: [
        {
          id: 'translation',
          title: 'Professional Document Translation',
          shortDesc: 'Contracts, financial, legal, technical, and academic native translations',
          fullDesc: 'High-precision translation performed exclusively by subject-matter expert native linguists covering over 50 global language pairs. We preserve nuanced terminology and contextual integrity across business agreements, technical manuals, and research publications.',
          turnaround: 'Within 24-48 hours (Same-day rush available)',
          recommendedFor: 'Contracts, technical manuals, corporate reports, research papers, compliance regulations',
          highlights: [
            'Native linguists vetted by industry domain expertise',
            'Strict adherence to custom glossaries and brand style guides',
            'Context-aware terminology alignment with international standards',
            'Rigorous two-tier proofreading workflow for zero-defect output'
          ],
          deliverables: ['Final translated document', 'Side-by-side comparison report (Optional)', 'Updated terminology glossary file'],
          popularFormats: ['DOCX', 'PDF', 'XLSX', 'PPTX', 'TXT']
        },
        {
          id: 'proofreading',
          title: 'Proofreading & Editing',
          shortDesc: 'Bilingual comparison, grammar, terminology alignment, and natural polish',
          fullDesc: 'Elevates existing translations to publication-grade excellence. Our native editors conduct comprehensive source-to-target cross-checks, syntax corrections, contextual smoothing, and brand tone calibration in one unified review.',
          turnaround: '12-24 hours per 3,000 words',
          recommendedFor: 'Pre-print publications, whitepapers, investor pitch decks (IR), audit of existing translations',
          highlights: [
            '1:1 line-by-line bilingual cross-examination',
            'Comprehensive grammatical, typographical, and syntactic corrections',
            'Tone of voice and terminology consistency audit',
            'Elimination of unnatural phrasing and cultural dissonance'
          ],
          deliverables: ['Track Changes marked-up manuscript', 'Clean final edited document', 'Linguistic quality evaluation report'],
          popularFormats: ['DOCX', 'PDF', 'Google Docs', 'Markdown']
        },
        {
          id: 'localization',
          title: 'Software & App Localization (L10n)',
          shortDesc: 'UI/UX string adaptation, format localization, and in-context testing',
          fullDesc: 'Transforms software, websites, mobile applications, and digital platforms to feel natively built for target markets. We maintain brand coherence while ensuring complete cultural relevance and seamless user interface layout integration.',
          turnaround: '2-5 business days depending on string volume',
          recommendedFor: 'Mobile apps, enterprise SaaS, global games, cross-border e-commerce platforms',
          highlights: [
            'Cultural adaptation of idioms, regional conventions, and media',
            'Localization of date, currency, numbering, and measurement units',
            'UI/UX string expansion/contraction layout optimization',
            'In-context staging verification and QA testing'
          ],
          deliverables: ['Localized resource string files (JSON, PO, etc.)', 'UI screenshot audit report', 'Cultural adaptation guide'],
          popularFormats: ['JSON', 'XLIFF', 'PO', 'Figma', 'YAML']
        },
        {
          id: 'product-detail',
          title: 'E-Commerce & Product Listing',
          shortDesc: 'Amazon, Shopee, Rakuten listings, product descriptions, and catalogs',
          fullDesc: 'Conversion-focused copywriting and product detail translations designed to maximize sales across global marketplaces. We integrate high-performing local SEO search keywords while appealing to local buyer psychology.',
          turnaround: 'Same day to 24 hours per 10 SKUs',
          recommendedFor: 'E-commerce brands, Amazon FBA sellers, cross-border exporters, D2C merchants',
          highlights: [
            'Seamless integration of marketplace SEO search keywords',
            'Persuasive local consumer-targeted copywriting',
            'Strict adherence to marketplace character counts and style constraints',
            'Value propositions tailored to local purchasing drivers'
          ],
          deliverables: ['Ready-to-upload product listing sheet', 'Localized meta titles and bullet points', 'Image text translation pack'],
          popularFormats: ['CSV', 'XLSX', 'Shopify XML', 'PDF']
        },
        {
          id: 'business-marketing',
          title: 'Business & Marketing Transcreation',
          shortDesc: 'Websites, advertising campaigns, pitch decks, and brand slogans',
          fullDesc: 'Creative transcreation that preserves the emotional resonance, wit, and distinctive voice of your brand. From social campaigns to investor decks and commercial copy, we recreate messaging that commands attention in target regions.',
          turnaround: '24-48 hours',
          recommendedFor: 'Marketing agencies, PR firms, global scale-ups, enterprise brand marketing teams',
          highlights: [
            'Creative transcreation of slogans, headlines, and ad copy',
            'Unified brand tone of voice across international markets',
            'Social media messaging, hashtags, and cultural resonance',
            'Investor pitch deck and corporate credentials localization'
          ],
          deliverables: ['Multi-option transcreation copy alternatives', 'Localized presentation files', 'Creative intent commentary'],
          popularFormats: ['PPTX', 'Figma', 'Keynote', 'DOCX', 'HTML']
        },
        {
          id: 'multilingual-content',
          title: 'Integrated Multilingual Pipeline',
          shortDesc: 'Continuous translation management for concurrent multi-market expansion',
          fullDesc: 'An enterprise-grade, end-to-end continuous translation pipeline for companies launching into multiple international markets simultaneously. We construct central Translation Memories (TM) and unified terminology databases to reduce costs and maintain uniformity.',
          turnaround: 'Custom Enterprise SLA',
          recommendedFor: 'Multinational corporations, international media, global multi-region SaaS',
          highlights: [
            'Simultaneous multi-locale translation and project management',
            'Centralized Translation Memory (TM) to compound cost savings over time',
            'Dedicated Project Manager (PM) with real-time responsive communication',
            'Automated API integration and continuous localization workflows'
          ],
          deliverables: ['Simultaneous multilingual delivery packs', 'Central TM & Glossary repositories', 'Monthly volume & savings analytics'],
          popularFormats: ['XLIFF', 'REST API', 'Git Sync', 'Batch DOCX']
        }
      ]
    },
    whyUs: {
      sectionBadge: 'Uncompromising Quality Standards',
      sectionTitle: 'Why Global Leaders Choose TRIX',
      sectionSubtitle: 'Meticulous quality control and vetted native subject-matter experts empower your international growth.',
      features: [
        {
          title: '50+ Global Languages',
          desc: 'Targeted dialect and cultural accuracy managed directly by accredited native linguists worldwide.'
        },
        {
          title: 'Rigorous Quality Assurance',
          desc: 'Certified to ISO 17100. Every project undergoes a two-step native translation and senior editor audit.'
        },
        {
          title: 'Subject-Matter Specialists',
          desc: 'Translators matched specifically for domain depth across IT, legal, finance, medical, and e-commerce.'
        },
        {
          title: 'Authentic Local Nuance',
          desc: 'Beyond literal word-for-word rendering—crafted to reflect cultural subtleties and idiomatic naturalness.'
        }
      ]
    },
    workflow: {
      sectionBadge: 'Transparent & Rapid Process',
      sectionTitle: '4-Step Streamlined Workflow',
      sectionSubtitle: 'A structured, dependable journey from initial inquiry through final delivery.',
      step1Title: 'STEP 01. Free Quote Submission',
      step1Desc: 'Upload your documents and specify language pairs; our dedicated PM reviews your scope immediately.',
      step2Title: 'STEP 02. PM & Linguist Assignment',
      step2Desc: 'We pair your project 1:1 with an accredited native translator experienced in your specific domain.',
      step3Title: 'STEP 03. Precision Translation & Review',
      step3Desc: 'Translated according to your glossary followed by a secondary independent editorial quality check.',
      step4Title: 'STEP 04. On-Time Delivery & Warranty',
      step4Desc: 'Delivered in your original file layout with complimentary post-delivery revisions guaranteed.'
    },
    homeCta: {
      title: 'Ready to Expand Your Global Reach?',
      desc: 'Attach your documents today to receive a comprehensive quote and exact turnaround timeline from our native specialists.',
      ctaQuote: 'Get Your Free Quote',
      ctaFaq: 'View Frequently Asked Questions'
    },
    sampleDemo: {
      tag: 'Live Localization Benchmark',
      title: 'Literal Translation vs. Native Localization',
      originalLabel: 'Source Text',
      literalLabel: 'Literal / Raw Machine Output',
      literalWarning: 'Lacks cultural context and idiomatic flow, impacting brand credibility.',
      trixLabel: 'TRIX Native Localization',
      trixBadge: 'High-Impact Quality',
      insightLabel: 'Cultural Nuance & Strategic Context'
    },
    tracker: {
      modalTitle: '1:1 Quote Request Tracker',
      modalSubtitle: 'Enter your unique Reference ID to securely check your project progress and status.',
      securityBadge: 'Secure Search',
      searchPlaceholder: 'Enter your Reference ID (e.g., TRIX-2026-8942)',
      searchBtn: 'Track Quote',
      searchHelpText: 'To protect your privacy, inquiries are strictly accessible only via Reference ID.',
      searchExample: 'e.g. TRIX-2026-8942',
      searchEmptyNotice: 'Please enter your Reference ID to look up your quote.',
      searchNotFound: 'No quote request was found matching this Reference ID.',
      notFoundDesc: 'Please verify that you entered the exact unique Reference ID displayed upon submission.',
      quoteIdLabel: 'Reference ID',
      submittedAt: 'Submitted At',
      statusLabel: 'Current Status',
      steps: {
        received: 'Received',
        review: 'Under Review',
        quoteSent: 'Quote Sent',
        inProgress: 'In Progress',
        completed: 'Completed'
      },
      clientInfoTitle: 'Applicant Details',
      maskedBadge: 'Masking Protection Active',
      nameLabel: 'Name / Organization',
      emailLabel: 'Contact Email',
      phoneLabel: 'Contact Phone',
      maskedNotice: '※ For your security, personal contact details are masked to prevent unauthorized exposure.',
      langPairLabel: 'Language Pair',
      deadlineLabel: 'Target Deadline',
      purposeLabel: 'Purpose / Scope',
      attachedFilesTitle: 'Attached Files',
      secureStorageBadge: 'Secure Storage',
      storedBadge: 'Stored',
      noFiles: 'No files attached.',
      projectDetailsTitle: 'Project Details & Instructions',
      noDetails: 'No additional instructions provided.',
      contactPmTitle: 'Send a Note to Your Project Manager',
      contactPmPlaceholder: 'Provide additional context, updated files, or timeline adjustments here...',
      sendNoteBtn: 'Send Note',
      noteSentSuccess: 'Your note has been securely forwarded to your dedicated PM.',
      responseTimeNotice: 'We typically respond to inquiries within 2 hours during normal business hours.',
      closeBtn: 'Close',
      copyBtn: 'Copy',
      copiedBtn: 'Copied',
      emptyStateTitle: 'Enter your Reference ID to check quote progress',
      emptyStateDesc: 'To uphold strict privacy and NDA safeguards, TRIX Translate never exposes general browser history and requires individual Reference ID validation.'
    },
    quotePage: {
      badge: 'B2B Free Quote',
      title: 'Fast & Accurate Multilingual Translation Quote',
      subtitle: 'Attach your project files and our dedicated PM will deliver a comprehensive proposal and optimized schedule within 2 business hours.',
      trustIso: 'Certified to ISO 17100 International Translation Standard',
      trustNda: '100% Non-Disclosure (NDA) and Encrypted File Handling',
      trustSla: 'Official quote response within 2 business hours',
      step1Title: 'Applicant Information',
      sourceLang: 'Source Language',
      targetLang: 'Target Language',
      step2Title: 'Language Pair Selection',
      serviceType: 'Service Type',
      purpose: 'Document Purpose & Field',
      preferredDeadline: 'Preferred Turnaround',
      step3Title: 'Scope & Turnaround Preferences',
      fileUploadTitle: 'Attach Documents (Up to 3 files)',
      fileUploadHint: 'Supports DOCX, PDF, XLSX, PPTX, HWP, TXT, ZIP, Images, etc. (Max 25MB per slot)',
      fileSlotLabel: 'Add File',
      clickToSelect: 'Click to browse',
      attachedBadge: 'Attached',
      projectDetailsLabel: 'Project Notes & Specific Instructions (Optional)',
      projectDetailsPlaceholder: 'Include target audience context, preferred terminology, formatting guidelines, or special delivery notes...',
      step4Title: 'Document Upload & Details',
      clientName: 'Name or Organization',
      namePlaceholder: 'e.g. John Doe / Acme Global Corp',
      clientEmail: 'Response Email',
      emailPlaceholder: 'quote@yourcompany.com',
      clientPhone: 'Contact Phone Number',
      phonePlaceholder: 'e.g. +1 555-019-2834',
      privacyNotice: 'I agree to the collection and handling of documents for quote calculation under strict NDA and privacy protocols.',
      submitBtn: 'Submit Free Quote Request',
      submittingBtn: 'Submitting and dispatching notification...',
      submitNotice: 'Transmitted directly to our business inbox (contact@trixtranslate.com).',
      submittedTitle: 'Your Quote Request Has Been Received!',
      submittedDesc: 'Your request has been securely archived. A dedicated Project Manager will review your files and provide a customized quote within 2 business hours.',
      yourQuoteId: 'Your Unique Reference ID',
      checkStatusBtn: 'Track Quote Status',
      newQuoteBtn: 'Submit Another Quote',
      emailDispatchTitle: 'Business Email Notification Status',
      emailPrepared: 'Quote details have been formatted and dispatched to contact@trixtranslate.com.',
      emailSentSuccess: 'Quote notification successfully transmitted to contact@trixtranslate.com via EmailJS.',
      emailFallback: 'Request recorded in system. You may also trigger a direct transmission from your email client below.',
      openEmailApp: 'Open in Email Client (Backup Dispatch)',
      summaryTitle: 'Submission Summary:',
      summaryApplicant: 'Applicant',
      summaryLanguage: 'Languages',
      summaryScope: 'Turnaround/Purpose',
      summaryFiles: 'Files',
      summaryNoFiles: 'None',
      trackerNotice: 'Save this Reference ID. You can enter it in the top [Track Quote] tool at any time to monitor real-time project progress.',
      purposeOptions: [
        { value: '전문 문서 번역 (계약서 / 비즈니스 / 기술)', label: 'Professional Document (Contracts / Business / Technical)' },
        { value: '상품 상세페이지 / 이커머스 (아마존, 쇼피, 라쿠텐)', label: 'E-Commerce & Listings (Amazon, Shopee, Rakuten)' },
        { value: '소프트웨어 및 모바일 앱 / 웹 현지화 (UI/UX)', label: 'Software, App & Web UI/UX Localization' },
        { value: '원어민 감수 및 교정 (Proofreading)', label: 'Native Proofreading & Editing' },
        { value: '마케팅 및 브랜드 트랜스크리에이션', label: 'Marketing & Brand Transcreation' },
        { value: '법률 / 특허 / 규제 준수 문서', label: 'Legal, Patent & Compliance Documentation' },
        { value: '기타 맞춤형 프로젝트', label: 'Custom Specialized Project' }
      ],
      deadlineOptions: [
        { value: '일반 납기 (영업일 기준 3~5일)', label: 'Standard Delivery (3-5 business days)' },
        { value: '빠른 납기 (영업일 기준 1~2일)', label: 'Express Delivery (1-2 business days)' },
        { value: '긴급 당일 번역 (협의 필요)', label: 'Urgent Same-Day (Subject to schedule)' },
        { value: '장기 엔터프라이즈 정기 프로젝트', label: 'Long-term Enterprise Ongoing Project' }
      ],
      validation: {
        name: 'Please enter your name or company name.',
        phone: 'Please enter your contact phone number.',
        email: 'Please provide a valid email address.',
        sourceLang: 'Please select a source language.',
        targetLang: 'Please select a target language.',
        privacy: 'You must agree to the privacy policy and NDA terms.'
      }
    },
    estimator: {
      modalTitle: 'Instant Price & Turnaround Estimator',
      modalSubtitle: 'Paste your sample text or enter an estimated word count to calculate approximate pricing and standard delivery.',
      textModeTab: 'Paste Text (Auto Word Count)',
      wordCountModeTab: 'Manual Word Count Entry',
      pasteLabel: 'Paste Source Text Here:',
      wordsDetected: 'words detected',
      pastePlaceholder: 'Paste your source text here to analyze word count...',
      wordCountInputLabel: 'Estimated Word Count:',
      serviceType: 'Service Type',
      deadlineLabel: 'Urgency Option:',
      standardUrgency: 'Standard Turnaround',
      expressUrgency: 'Express Rush',
      calculatedEstimate: 'Calculated Cost & Timeline',
      estimatedCost: 'Estimated Translation Cost',
      estimatedTime: 'Estimated Turnaround',
      businessDaysNote: 'Business Days',
      applyBtn: 'Apply This to Free Quote',
      closeBtn: 'Close',
      notice: '※ This estimate provides an approximate baseline based on word count. Final pricing may vary slightly based on document complexity, technical terminology, and layout formatting.',
      serviceOptions: {
        translation: 'Professional Translation (Standard)',
        proofreading: 'Native Proofreading & Editing',
        localization: 'Web / App Localization (L10n)',
        productDetail: 'E-Commerce Product Listing',
        businessMarketing: 'Marketing & Brand Transcreation'
      },
      turnaroundOptions: {
        under24h: 'Within 24 Hours',
        fast6to12h: 'Within 6-12 Hours',
        days1to2: '1-2 Days',
        days2: '2 Days',
        days3to4: '3-4 Days',
        customProject: 'Custom Consultation'
      }
    },
    faq: {
      badge: 'Need Clarification?',
      title: 'Frequently Asked Questions (FAQ)',
      subtitle: 'Find answers regarding supported languages, project workflows, delivery timelines, confidentiality, and pricing estimates.',
      searchPlaceholder: 'Search by keyword (e.g., supported languages, turnaround, NDA, formats)',
      categories: {
        all: 'All Categories',
        General: 'General',
        Services: 'Services & Formats',
        Pricing: 'Pricing & Turnaround',
        Security: 'Security & NDA'
      },
      noResultsTitle: 'No questions matched your search criteria.',
      noResultsBtn: 'Ask a Dedicated PM',
      needMoreHelp: 'Still have unanswered questions?',
      needMoreHelpDesc: 'Our dedicated Project Managers are standing by to assist with tailored consultations within 2 hours.',
      contactUsCta: 'Contact PM for 1:1 Quote',
      items: [
        {
          id: 'faq-1',
          category: 'General',
          question: 'Which languages do you support?',
          answer: 'We support over 50 global languages, including English, Japanese, Chinese (Simplified & Traditional), Spanish, French, German, Vietnamese, Thai, Indonesian, and Arabic. Contact us for any custom or rare language combinations.'
        },
        {
          id: 'faq-2',
          category: 'Services',
          question: 'What document and file formats can you handle?',
          answer: 'We accept almost all common file formats, including Microsoft Office (Word, Excel, PowerPoint), PDF, Google Docs, JSON, XLIFF, PO, Figma, Markdown, HTML, and high-resolution scanned documents.'
        },
        {
          id: 'faq-3',
          category: 'Services',
          question: 'Can you proofread or edit existing translations?',
          answer: 'Yes. Our native proofreading and editing service conducts line-by-line bilingual comparisons, corrects grammatical discrepancies, checks terminology uniformity, and refines prose for native fluidity.'
        },
        {
          id: 'faq-4',
          category: 'Services',
          question: 'What is the difference between localization and translation?',
          answer: 'While translation focuses on linguistic equivalence, localization adapts the content to the culture, market expectations, regulatory standards, UI constraints, and purchasing behaviors of the target territory.'
        },
        {
          id: 'faq-5',
          category: 'Pricing',
          question: 'How are translation quotes calculated?',
          answer: 'Pricing is evaluated based on source word count, language combination, technical difficulty, requested delivery turnaround, and required service scope (translation, proofreading, desktop publishing). Attach your files to receive an itemized quote.'
        },
        {
          id: 'faq-6',
          category: 'Pricing',
          question: 'Is urgent same-day translation available?',
          answer: 'Yes. For time-critical projects, we mobilize dedicated rush teams to deliver within hours or overnight. Please specify your target completion time when submitting your quote request.'
        },
        {
          id: 'faq-7',
          category: 'Security',
          question: 'How are client files and confidential data protected?',
          answer: 'All submitted files and correspondence are governed by stringent confidentiality protocols, encrypted during transfer and storage, and accessed exclusively by assigned linguists for project execution.'
        },
        {
          id: 'faq-8',
          category: 'Security',
          question: 'Can you sign a Non-Disclosure Agreement (NDA)?',
          answer: 'Absolutely. Prior to project kick-off, we can execute our standard bilateral NDA or sign your organization’s proprietary confidentiality agreement for corporate peace of mind.'
        },
        {
          id: 'faq-9',
          category: 'General',
          question: 'How does the free quote process work?',
          answer: 'Simply upload your project files via our Free Quote page. A dedicated PM reviews your specifications and sends an itemized cost and schedule proposal to your email within 2 business hours.'
        }
      ]
    },
    footer: {
      tagline: 'Global Multilingual Translation & Localization Partner',
      description: 'Delivering world-class native translation and localization to power corporate enterprise, cross-border e-commerce, and high-growth digital platforms worldwide.',
      isoTitle: 'ISO 17100 International Translation Certification',
      isoDesc: 'Operating under an accredited quality management framework ensuring unwavering precision.',
      ndaBadge: '100% Non-Disclosure Guaranteed',
      globalLangBadge: '50+ Global Languages',
      quickLinks: 'Quick Links',
      servicesTitle: 'Specialized Services',
      rights: '© 2026 TRIX Translate. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      security: 'Security Guidelines'
    }
  },

  // ==========================================
  // JAPANESE (日本語)
  // ==========================================
  ja: {
    nav: {
      home: 'ホーム',
      services: '専門サービス',
      quote: '無料お見積り',
      faq: 'よくある質問',
      trackQuote: '申請状況の確認',
      requestQuote: '無料見積りを依頼',
      isoBadge: 'ISO 17100 国際認証',
      tagline: 'グローバル多言語翻訳＆ローカリゼーションパートナー',
      slaNotice: '営業時間内なら2時間以内に見積り返信',
      selectLanguage: '言語の選択'
    },
    hero: {
      badge: '世界50カ国以上の多言語専門翻訳＆ローカリゼーション',
      titleLine1: '言葉の壁を越え、',
      titleGradient: '世界と確実につながる。',
      subtitle: 'グローバルビジネスの成長を牽引する最高品質のローカリゼーションパートナー',
      description: '企業契約書、IT/アプリのローカライズ、海外EC商品ページからマーケティング広告まで、50カ国以上の認定ネイティブ専門家が精密に翻訳いたします。',
      ctaQuote: '無料見積りを依頼する',
      ctaServices: 'サービス一覧を見る',
      quickEstimatorBtn: 'リアルタイム簡易見積り',
      statLanguages: '50カ国語+',
      statLanguagesLabel: '対応グローバル言語',
      statDelivery: '99.8%',
      statDeliveryLabel: '納期遵守率',
      statIso: 'ISO 17100',
      statIsoLabel: '国際品質認証',
      previewBadge: '50カ国リアルタイムネイティブ校閲',
      previewSourceLabel: '原文 (English Source):',
      previewSourceText: '"Expand your brand globally with confidence and authentic local appeal."',
      previewTargetLabel: '対象：世界50カ国以上の言語対応',
      previewTargetText: '確固たる信頼と現地文化に深く響く自然な表現で、貴社ブランドの世界進出を強力に後押しします。',
      nativeReviewBadge: '100% ネイティブ校閲',
      accuracyLabel: '正確度: 99.8%'
    },
    services: {
      sectionBadge: '専門翻訳＆ローカリゼーション',
      sectionTitle: 'ビジネス成果を最大化する多言語ソリューション',
      sectionSubtitle: '正確性、納期スピード、専門用語データベースを基盤に、完璧な翻訳品質をお届けします。',
      learnMore: '詳細を見る',
      requestThis: 'このサービスで見積りを依頼',
      turnaround: '標準納期',
      formats: '対応形式',
      highlights: '主な強み',
      recommendedLabel: '推奨される用途',
      overviewTitle: 'サービスの概要と詳細',
      deliverablesTitle: '最終納品成果物',
      quoteNotice: 'ファイル添付で2時間以内に正式見積り発行',
      items: [
        {
          id: 'translation',
          title: '専門文書翻訳 (Translation)',
          shortDesc: '契約書、金融、法務、技術文書など各分野の専門ネイティブ翻訳',
          fullDesc: '50以上の主要言語を網羅し、各専門分野の実務知見を持つネイティブ翻訳者が担当する高精度翻訳サービスです。ビジネス文書、契約書、技術マニュアル、学術論文の文脈と専門用語を厳密に反映します。',
          turnaround: '基本24〜48時間以内 (特急当日対応可)',
          recommendedFor: '契約書、技術マニュアル、企業レポート、研究論文、コンプライアンス規程',
          highlights: [
            '産業分野ごとの実務専門知識を持つネイティブ翻訳者を配置',
            '専門用語集(Glossary)およびスタイルガイドの厳格な順守',
            '文脈と業界標準を反映した的確な用語マネジメント',
            'エラーゼロを実現する2段階の校正・査読プロセス'
          ],
          deliverables: ['翻訳完了原稿ファイル', '原文対訳比較レポート (任意)', '更新済み用語集(Glossary)ファイル'],
          popularFormats: ['DOCX', 'PDF', 'XLSX', 'PPTX', 'TXT']
        },
        {
          id: 'proofreading',
          title: 'ネイティブ校正・推敲 (Proofreading)',
          shortDesc: '原文照合、文法、用語統一、自然なネイティブ表現へのリライト',
          fullDesc: '既存の翻訳原稿の完成度を最高水準へと引き上げるネイティブエディティングです。原文との綿密な突き合わせ、誤訳や構文エラーの修正、自然な言い回し、ブランドトーンの統一を一括して実施します。',
          turnaround: '3,000単語につき12〜24時間',
          recommendedFor: '出版予定物、ホワイトペーパー、投資家向け説明資料(IR)、既存翻訳の監査',
          highlights: [
            '原文と翻訳文の1対1精密対照チェック',
            '文法、スペル、表記揺れ、構文エラーの完全修正',
            'ブランドトーンおよび業界用語の整合性監査',
            '文化的違和感や直訳調の不自然さを徹底排除'
          ],
          deliverables: ['変更履歴(Track Changes)付き校正原稿', 'クリーン最終修正版', '言語品質評価レポート'],
          popularFormats: ['DOCX', 'PDF', 'Google Docs', 'Markdown']
        },
        {
          id: 'localization',
          title: 'ソフトウェア＆アプリローカライズ (L10n)',
          shortDesc: 'Webサイト、アプリ、SaaS UI/UXテキストの文化的最適化',
          fullDesc: 'ソフトウェア、Webサイト、モバイルアプリ、デジタルコンテンツを対象国の文化や商慣習に自然に溶け込むよう再構成します。グローバルなブランド統一感を維持しながら現地の共感を獲得します。',
          turnaround: 'アプリ規模に応じて2〜5営業日',
          recommendedFor: 'モバイルアプリ、SaaSプラットフォーム、ゲーム、越境ECサイト',
          highlights: [
            '現地固有の慣用句、メディア、文化的背景に合わせた最適化',
            '日付、通貨、単位、数値表記の現地フォーマット化',
            'UI文字列の文字数調整およびレイアウト破綻防止',
            '実機・Web環境でのインコンテキスト(In-Context)テスト'
          ],
          deliverables: ['ローカライズ完了リソースファイル (JSON, XLIFF等)', 'UI画面キャプチャ検証レポート', '文化適合性ガイド'],
          popularFormats: ['JSON', 'XLIFF', 'PO', 'Figma', 'YAML']
        },
        {
          id: 'product-detail',
          title: 'EC商品詳細ページ翻訳 (Commerce)',
          shortDesc: 'Amazon、Shopee、楽天市場、海外モール向けCVR向上翻訳',
          fullDesc: '海外主要マーケットプレイスでの購買転換率を最大化するためのセールスコピー翻訳です。現地の購買心理とSEO検索キーワードを自然に盛り込み、海外売上アップに直結させます。',
          turnaround: '10商品あたり当日〜24時間',
          recommendedFor: 'ECブランド、海外セラー、越境EC輸出事業者、D2Cメーカー',
          highlights: [
            '海外EC検索で上位表示を狙うSEOキーワードの自然な反映',
            '購買意欲を喚起するターゲット特化型コピーライティング',
            '主要モールの文字数制限および出品ガイドラインの厳守',
            '現地の消費者が重視するメリットを的確にアピール'
          ],
          deliverables: ['登録用整形済み商品シート', 'ローカライズ版メタタイトル・説明文', '画像内テキスト翻訳リスト'],
          popularFormats: ['CSV', 'XLSX', 'Shopify XML', 'PDF']
        },
        {
          id: 'business-marketing',
          title: 'マーケティング＆トランスクリエーション',
          shortDesc: 'ブランドスローガン、広告、SNS、ピッチデッキの創造的翻訳',
          fullDesc: 'ブランドの想いや感情的インパクトを忠実に伝えるトランスクリエーション翻訳です。SNS施策、IRピッチデッキ、プロモーション動画、キャンペーンコピーを対象国の感性に響くよう魅力的に創出します。',
          turnaround: '24〜48時間',
          recommendedFor: '広告代理店、PR会社、グローバル進出スタートアップ、企業マーケティング部門',
          highlights: [
            'スローガン、見出し、広告コピーの創造的トランスクリエーション',
            'グローバル各市場におけるブランドトーンの統一',
            'SNS投稿テキストおよびハッシュタグの現地最適化',
            '投資家向けプレゼン資料および会社案内のローカライズ'
          ],
          deliverables: ['複数パターンのキャッチコピー案', 'ローカライズ済みプレゼン資料', '企画意図解説メモ'],
          popularFormats: ['PPTX', 'Figma', 'Keynote', 'DOCX', 'HTML']
        },
        {
          id: 'multilingual-content',
          title: '多言語統合パイプライン',
          shortDesc: '複数国へ同時進出する企業のためのワンストップ多言語翻訳',
          fullDesc: '複数国へ同時に展開する企業のためのエンドツーエンド多言語翻訳システムです。専用の翻訳メモリ(TM)と用語集を構築・運用し、継続的なコスト削減と高品質なブランド統一を実現します。',
          turnaround: 'エンタープライズ専用SLAを提供',
          recommendedFor: '多国籍企業、国際メディア、5カ国以上同時展開SaaS企業',
          highlights: [
            '多言語同時翻訳および統合プロジェクトマネジメント',
            '翻訳メモリ(TM)の蓄積による継続的な費用削減',
            '専任プロジェクトマネージャー(PM)による1対1の密着サポート',
            'API連携および継続的ローカリゼーション対応'
          ],
          deliverables: ['多言語同時翻訳成果物', '統合翻訳資産(TM)・用語集ファイル', '月間作業レポート'],
          popularFormats: ['XLIFF', 'REST API', 'Git Sync', 'Batch DOCX']
        }
      ]
    },
    whyUs: {
      sectionBadge: '信頼の品質基準',
      sectionTitle: 'TRIX Translateが選ばれる理由',
      sectionSubtitle: '徹底した品質管理と厳選されたネイティブ専門チームが、貴社の海外ビジネスを成功へ導きます。',
      features: [
        {
          title: '50以上の多言語対応',
          desc: '世界の主要50言語および各地域の文化的背景を、現地ネイティブ翻訳者が的確に翻訳します。'
        },
        {
          title: '厳格な品質管理 (QC)',
          desc: 'ISO 17100国際規格に準拠。専門翻訳後のネイティブ校正者による2次検証で万全を期します。'
        },
        {
          title: '業界専門分野とのマッチング',
          desc: 'IT、法務、金融、医療、ECなど、各業界の実務と専門知識に精通した言語スペシャリストをアサイン。'
        },
        {
          title: '自然なローカリゼーション',
          desc: '単なる直訳ではなく、現地の商習慣や文化的ニュアンスを取り入れた説得力のある文章に仕上げます。'
        }
      ]
    },
    workflow: {
      sectionBadge: '透明で迅速な進行フロー',
      sectionTitle: '4ステップのワンストップ手続き',
      sectionSubtitle: 'お問い合わせから最終納品まで、確実で安心できるステップで進行します。',
      step1Title: 'STEP 01. 無料見積りのご依頼',
      step1Desc: '原稿ファイルと言語・納期のご希望を送信いただくと、専任PMが即座に内容を確認します。',
      step2Title: 'STEP 02. 専任PMと最適翻訳者のアサイン',
      step2Desc: '該当業界の実務経験を持つ認定ネイティブ翻訳者を1対1でマッチングします。',
      step3Title: 'STEP 03. 精密翻訳と2段階校閲',
      step3Desc: '用語集を遵守して翻訳後、シニアエディターによる厳格な品質チェックを実施します。',
      step4Title: 'STEP 04. 納期内の納品と無償アフターサポート',
      step4Desc: '元のレイアウトを維持した状態で納品。納品後の修正要望にも無償で迅速に対応いたします。'
    },
    homeCta: {
      title: '海外展開への一歩を踏み出しませんか？',
      desc: '今すぐ原稿を添付して、専門ネイティブチームによる迅速なお見積りと最適スケジュールをご確認ください。',
      ctaQuote: '無料でお見積りを依頼する',
      ctaFaq: 'よくある質問を確認する'
    },
    sampleDemo: {
      tag: 'ローカリゼーション品質の比較体験',
      title: '直訳とネイティブ最適化の決定的な違い',
      originalLabel: '原文 (Source Text)',
      literalLabel: '機械的な直訳 / 単純翻訳',
      literalWarning: '文脈や商慣習が反映されず、ブランドの信頼性を損なうリスクがあります。',
      trixLabel: 'TRIX ネイティブ最適化翻訳',
      trixBadge: '最高コンバージョン品質',
      insightLabel: '文化的ニュアンス & 専門的コンテキスト'
    },
    tracker: {
      modalTitle: '1:1 お見積り申請状況の確認',
      modalSubtitle: '発行された専用受付番号を入力すると、現在の進行ステータスを安全にご確認いただけます。',
      securityBadge: '安全照会',
      searchPlaceholder: '受付番号を入力してください (例: TRIX-2026-8942)',
      searchBtn: '照会する',
      searchHelpText: '個人情報保護のため、お客様ご自身の受付番号でのみ照会が可能です。',
      searchExample: '例: TRIX-2026-8942',
      searchEmptyNotice: '照会する受付番号を入力してください。',
      searchNotFound: '入力された受付番号に該当するお見積り申請が見つかりませんでした。',
      notFoundDesc: '申請完了時に画面に表示された受付番号が正しく入力されているかご確認ください。',
      quoteIdLabel: '受付番号',
      submittedAt: '申請日時',
      statusLabel: '現在の進行状況',
      steps: {
        received: '受付完了',
        review: '内容確認中',
        quoteSent: '見積り提示',
        inProgress: '翻訳作業中',
        completed: '納品完了'
      },
      clientInfoTitle: '申請者情報',
      maskedBadge: 'マスキング保護適用中',
      nameLabel: 'お名前 / 企業名',
      emailLabel: '返信用メール',
      phoneLabel: 'ご連絡先電話番号',
      maskedNotice: '※ お客様の個人情報保護のため、お名前・メールアドレス・電話番号は一部マスキングされて表示されます。',
      langPairLabel: '翻訳言語',
      deadlineLabel: '希望納期',
      purposeLabel: '翻訳目的',
      attachedFilesTitle: '添付ファイル一覧',
      secureStorageBadge: '暗号化保管',
      storedBadge: '保管済み',
      noFiles: '添付ファイルはありません。',
      projectDetailsTitle: 'ご要望・備考',
      noDetails: '個別の追加ご要望はありません。',
      contactPmTitle: '専任PMへの追加メッセージ・ファイル送信',
      contactPmPlaceholder: 'スケジュールの変更、追加指示、急ぎのご要望などがあればご記入ください...',
      sendNoteBtn: 'メモを送信',
      noteSentSuccess: '専任PMへメッセージが安全に送信されました。',
      responseTimeNotice: '営業時間内であれば2時間以内にご登録先へご連絡いたします。',
      closeBtn: '閉じる',
      copyBtn: 'コピー',
      copiedBtn: '完了',
      emptyStateTitle: '受付番号を入力して見積り進行状況を確認してください',
      emptyStateDesc: 'TRIX Translateではお客様の大切な機密文書および個人情報を保護するため、ブラウザに過去の履歴を一括表示せず、個別受付番号による単一認証方式を徹底しています。'
    },
    quotePage: {
      badge: '法人・個人向け無料見積り',
      title: '迅速・高精度な多言語翻訳のお見積り申請',
      subtitle: '原稿ファイルを添付していただければ、専任PMが営業時間内2時間以内に詳細なお見積り書と最適納期をご提案いたします。',
      trustIso: 'ISO 17100 国際翻訳品質基準を厳格に遵守',
      trustNda: '100% 機密保持契約(NDA)および暗号化ファイルの安全管理',
      trustSla: '営業時間内なら2時間以内に正式見積りを返信',
      step1Title: '申請者様の基本情報',
      sourceLang: '翻訳元言語 (Source)',
      targetLang: '翻訳先言語 (Target)',
      step2Title: '翻訳言語ペアの指定',
      serviceType: 'サービス種別',
      purpose: '文書の分野・用途',
      preferredDeadline: 'ご希望の納期',
      step3Title: 'サービス内容と納期の設定',
      fileUploadTitle: '翻訳対象ファイルの添付 (最大3件)',
      fileUploadHint: 'DOCX, PDF, XLSX, PPTX, HWP, TXT, ZIP, 画像など全形式に対応 (1枠あたり最大25MB)',
      fileSlotLabel: 'ファイル追加',
      clickToSelect: 'クリックして選択',
      attachedBadge: '添付済み',
      projectDetailsLabel: 'プロジェクトの詳細・ご要望 (任意)',
      projectDetailsPlaceholder: '読者層、希望する用語集、スタイル、レイアウト維持の要件などをご自由に入力してください...',
      step4Title: '原稿添付とご要望の入力',
      clientName: 'お名前または貴社名',
      namePlaceholder: '例: 山田 太郎 / グローバルトレーディング株式会社',
      clientEmail: '返信用メールアドレス',
      emailPlaceholder: 'quote@yourcompany.co.jp',
      clientPhone: 'ご連絡先電話番号',
      phonePlaceholder: '例: 090-1234-5678',
      privacyNotice: '個人情報の取り扱い、見積り算出に伴う原稿の守秘管理および機密保持規程に同意します。',
      submitBtn: '無料見積り申請を送信する',
      submittingBtn: '見積り書およびメールを送信中...',
      submitNotice: '送信内容は業務専用アドレス(contact@trixtranslate.com)へ即時配送されます。',
      submittedTitle: 'お見積り申請が正常に受け付けられました！',
      submittedDesc: 'ご送信いただいた原稿は安全に保護されており、専任PMが内容を確認のうえ、営業時間内2時間以内にご登録メールアドレスへ正式なお見積り書をお送りいたします。',
      yourQuoteId: 'お客様の専用受付番号 (Reference ID)',
      checkStatusBtn: '申請状況を確認する',
      newQuoteBtn: '別の見積りを申し込む',
      emailDispatchTitle: '業務メール送信状況',
      emailPrepared: 'お見積り内容が準備完了し、contact@trixtranslate.comへ配信されます。',
      emailSentSuccess: '業務メール(contact@trixtranslate.com)へEmailJSを通じて正常に送信されました。',
      emailFallback: 'システムに正常に登録されました。下のボタンからメールソフトでバックアップ送信も可能です。',
      openEmailApp: 'メールアプリで開く (予備送信)',
      summaryTitle: '申請サマリー:',
      summaryApplicant: '申請者',
      summaryLanguage: '言語ペア',
      summaryScope: '納期・分野',
      summaryFiles: '添付ファイル',
      summaryNoFiles: 'なし',
      trackerNotice: '表示された専用受付番号を控えておくと、画面上部の［申請状況の確認］からリアルタイムに進捗を確認できます。',
      purposeOptions: [
        { value: '전문 문서 번역 (계약서 / 비즈니스 / 기술)', label: '専門文書翻訳 (契約書 / ビジネス / 技術)' },
        { value: '상품 상세페이지 / 이커머스 (아마존, 쇼피, 라쿠텐)', label: '商品詳細ページ / EC (Amazon, 楽天, Shopee)' },
        { value: '소프트웨어 및 모바일 앱 / 웹 현지화 (UI/UX)', label: 'ソフトウェア＆アプリ / Web UIローカライズ' },
        { value: '원어민 감수 및 교정 (Proofreading)', label: 'ネイティブ校正・推敲 (Proofreading)' },
        { value: '마케팅 및 브랜드 트랜스크리에이션', label: 'マーケティング＆トランスクリエーション' },
        { value: '법률 / 특허 / 규제 준수 문서', label: '法務・特許・コンプライアンス関連文書' },
        { value: '기타 맞춤형 프로젝트', label: 'その他個別カスタム案件' }
      ],
      deadlineOptions: [
        { value: '일반 납기 (영업일 기준 3~5일)', label: '標準納期 (営業日基準 3〜5日)' },
        { value: '빠른 납기 (영업일 기준 1~2일)', label: 'お急ぎ納期 (営業日基準 1〜2日)' },
        { value: '긴급 당일 번역 (협의 필요)', label: '特急当日翻訳 (要相談)' },
        { value: '장기 엔터프라이즈 정기 프로젝트', label: '長期エンタープライズ定期案件' }
      ],
      validation: {
        name: 'お名前または貴社名をご入力ください。',
        phone: 'ご連絡先電話番号をご入力ください。',
        email: '正しいメールアドレスをご入力ください。',
        sourceLang: '翻訳元言語を選択してください。',
        targetLang: '翻訳先言語を選択してください。',
        privacy: '個人情報の取り扱いおよび機密保持条項に同意してください。'
      }
    },
    estimator: {
      modalTitle: 'リアルタイム簡易見積り計算機',
      modalSubtitle: '原文テキストを貼り付けるか推定単語数を入力すると、目安の概算料金と標準納期を瞬時に算出します。',
      textModeTab: 'テキスト貼り付け (自動単語カウント)',
      wordCountModeTab: '単語数を直接入力',
      pasteLabel: '原文テキストを貼り付け:',
      wordsDetected: '単語を検出',
      pastePlaceholder: '単語数を測定したい原文テキストをここに貼り付けてください...',
      wordCountInputLabel: '推定単語数 (Word Count):',
      serviceType: 'サービス種別',
      deadlineLabel: '納期プラン:',
      standardUrgency: '標準納期 (Standard)',
      expressUrgency: '特急特約 (Express)',
      calculatedEstimate: '算出されたお見積り目安',
      estimatedCost: '推定翻訳料金',
      estimatedTime: '推定所要期間',
      businessDaysNote: '営業日基準',
      applyBtn: 'この見積り内容で申請フォームへ進む',
      closeBtn: '閉じる',
      notice: '※ 本計算機による算出結果は単語数に基づく目安です。原文の専門性、難易度、図表のレイアウト保持要件等により正式見積りと若干異なる場合があります。',
      serviceOptions: {
        translation: '専門文書翻訳 (Standard)',
        proofreading: 'ネイティブ校正・推敲 (Proofreading)',
        localization: 'Web / アプリローカライズ (L10n)',
        productDetail: 'EC商品詳細ページ翻訳 (Commerce)',
        businessMarketing: 'マーケティング＆ブランディング翻訳'
      },
      turnaroundOptions: {
        under24h: '24時間以内',
        fast6to12h: '6〜12時間以内',
        days1to2: '1〜2日程度',
        days2: '2日程度',
        days3to4: '3〜4日程度',
        customProject: '別途個別相談'
      }
    },
    faq: {
      badge: 'ご不明な点はございませんか？',
      title: 'よくあるご質問 (FAQ)',
      subtitle: 'ご依頼の流れ、対応言語、納期、セキュリティ、お見積り基準について多く寄せられる質問をまとめました。',
      searchPlaceholder: 'キーワードで検索 (例: 対応言語、納期、秘密保持、ファイル形式)',
      categories: {
        all: 'すべて',
        General: '一般事項',
        Services: 'サービス＆文書',
        Pricing: '料金＆納期',
        Security: 'セキュリティ＆機密'
      },
      noResultsTitle: '検索条件に一致する質問が見つかりませんでした。',
      noResultsBtn: '専任PMに個別に相談する',
      needMoreHelp: 'お探しの回答は見つかりましたか？',
      needMoreHelpDesc: '専任プロジェクトマネージャーが2時間以内に詳細なお見積りとご案内を差し上げます。',
      contactUsCta: '1:1 お見積り・お問い合わせ',
      items: [
        {
          id: 'faq-1',
          category: 'General',
          question: '対応している言語にはどのようなものがありますか？',
          answer: '英語、日本語、中国語(簡体字・繁体字)、スペイン語、フランス語、ドイツ語、ベトナム語、タイ語など、世界主要50言語に対応しています。特殊な言語ペアについても柔軟に対応可能ですのでお気軽にお問い合わせください。'
        },
        {
          id: 'faq-2',
          category: 'Services',
          question: 'どのような形式の文書を翻訳できますか？',
          answer: 'ビジネス契約書、技術マニュアル、Webサイト、商品詳細ページ、会社案内、マーケティング宣伝物、アプリ・ソフトウェアUI文字列、学術論文など、Word、PDF、Excel、PowerPoint、JSON等あらゆる形式に対応しています。'
        },
        {
          id: 'faq-3',
          category: 'Services',
          question: 'すでに翻訳済みの文章に対するネイティブ校正も依頼できますか？',
          answer: 'はい、可能です。原文と照らし合わせながら、誤訳の有無、文法、表記統一、現地文化に即した自然な表現へのブラッシュアップを行うネイティブ校正(Proofreading)をご提供しています。'
        },
        {
          id: 'faq-4',
          category: 'Services',
          question: 'ローカリゼーションと通常の翻訳は何が違いますか？',
          answer: '通常の翻訳が意味の正確な伝達に重きを置くのに対し、ローカリゼーションは対象国の文化、商習慣、法規制、UIレイアウト等に合わせてコンテンツ全体を再構成し、現地サービスと見分けがつかない体験を創出するプロセスです。'
        },
        {
          id: 'faq-5',
          category: 'Pricing',
          question: 'お見積り金額はどのように算出されますか？',
          answer: '原文の単語数・文字数、言語ペア、専門性の難易度、ご希望納期、必要なサービス内容(翻訳、校正、DTP等)を総合的に考慮して算出されます。無料見積りページからファイルを添付いただくと、正確な見積書を即日発行いたします。'
        },
        {
          id: 'faq-6',
          category: 'Pricing',
          question: '急ぎの当日・特急翻訳にも対応してもらえますか？',
          answer: '分量や言語の組み合わせに応じて特急専門チームを編成し、当日または翌朝納品が可能です。お見積り依頼時にご希望の日時を明記してください。'
        },
        {
          id: 'faq-7',
          category: 'Security',
          question: '提出した原稿や個人情報は安全に保護されますか？',
          answer: 'はい。お預かりしたすべてのファイルと情報は厳格な機密保持基準に基づいて暗号化管理され、お見積り算出および翻訳目的以外に使用されることは一切ございません。'
        },
        {
          id: 'faq-8',
          category: 'Security',
          question: '法人向けに機密保持契約(NDA)を事前に締結できますか？',
          answer: 'もちろんです。未公開製品資料や機密契約書などを含むプロジェクトの場合、案件着手前に当社の標準NDA、または貴社所定の機密保持契約書を締結して進行いたします。'
        },
        {
          id: 'faq-9',
          category: 'General',
          question: '無料見積りの流れはどのようになっていますか？',
          answer: '無料見積りフォームに必要事項をご入力の上、原稿ファイル(最大3件)を添付して送信してください。担当PMが確認後、営業時間内2時間以内に詳細な見積書とお届け可能納期をメールでご案内します。'
        }
      ]
    },
    footer: {
      tagline: 'グローバル多言語専門翻訳＆ローカリゼーションパートナー',
      description: '企業の海外進出、越境EC、ITプラットフォームの成功を後押しする、最高品質の多言語翻訳とローカリゼーションを提供します。',
      isoTitle: 'ISO 17100 国際翻訳サービス品質認証',
      isoDesc: '国際基準に準拠した厳格な品質マネジメントシステムにより、確かな翻訳成果物をお届けします。',
      ndaBadge: '100% 機密保持(NDA)保証',
      globalLangBadge: '世界50言語以上に対応',
      quickLinks: 'クイックリンク',
      servicesTitle: '専門サービス一覧',
      rights: '© 2026 TRIX Translate. All rights reserved.',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      security: 'セキュリティ方針'
    }
  },

  // ==========================================
  // CHINESE SIMPLIFIED (中文)
  // ==========================================
  zh: {
    nav: {
      home: '首页',
      services: '专业服务',
      quote: '免费报价',
      faq: '常见问题',
      trackQuote: '查询申请进度',
      requestQuote: '申请免费报价',
      isoBadge: 'ISO 17100 国际认证',
      tagline: '全球多语言专业翻译与本地化合作伙伴',
      slaNotice: '工作时间内2小时内极速回复报价',
      selectLanguage: '选择语言'
    },
    hero: {
      badge: '覆盖全球50+国家语言的专业翻译与本地化',
      titleLine1: '跨越语言鸿沟，',
      titleGradient: '精准连接全球商业。',
      subtitle: '助力企业全球化布局的高端本地化服务伙伴',
      description: '涵盖企业商务合同、软件/APP本地化、跨境电商商品详情页及品牌营销文案，由50多个国家的母语认证专家为您提供精密翻译。',
      ctaQuote: '立即获取免费报价',
      ctaServices: '浏览服务方案',
      quickEstimatorBtn: '实时简易估价',
      statLanguages: '50+ 语种',
      statLanguagesLabel: '支持全球主要语种',
      statDelivery: '99.8%',
      statDeliveryLabel: '准时交付达标率',
      statIso: 'ISO 17100',
      statIsoLabel: '国际翻译质量认证',
      previewBadge: '50国母语译员实时审校',
      previewSourceLabel: '原文 (English Source):',
      previewSourceText: '"Expand your brand globally with confidence and authentic local appeal."',
      previewTargetLabel: '目标语种：支持全球50+语言',
      previewTargetText: '以极具权威公信力且直击当地文化痛点的语言，赋能您的品牌成功开拓国际市场。',
      nativeReviewBadge: '100% 母语专家审校',
      accuracyLabel: '准确率: 99.8%'
    },
    services: {
      sectionBadge: '专业翻译与本地化解决方案',
      sectionTitle: '专为商业成功打造的多语言服务',
      sectionSubtitle: '依托高精准度、敏捷交付以及专业术语数据库，保障卓越的翻译品质。',
      learnMore: '了解详情',
      requestThis: '申请此项服务报价',
      turnaround: '标准交付周期',
      formats: '支持格式',
      highlights: '核心优势',
      recommendedLabel: '推荐适用场景',
      overviewTitle: '服务概览与技术规格',
      deliverablesTitle: '最终交付成果',
      quoteNotice: '上传文档后2小时内出具详细报价单',
      items: [
        {
          id: 'translation',
          title: '专业文档翻译 (Translation)',
          shortDesc: '法律合同、金融财报、工程技术及学术文献的专业母语笔译',
          fullDesc: '涵盖全球50多种主流语言，由具备行业专业背景的母语译员亲自执笔。精确还原商业协议、技术规范、年度报告和学术论文中的专业术语与逻辑语境。',
          turnaround: '常规24~48小时内 (支持当日加急)',
          recommendedFor: '商务合同、技术手册、企业白皮书、研究论文、合规准则',
          highlights: [
            '按行业精准匹配具备对应专业背景的资深母语译员',
            '严格执行客户专有术语库(Glossary)与品牌风格指引',
            '兼顾上下文语境与国际行业标准术语规范',
            '实施双重校对审核流程，确保零差错交付'
          ],
          deliverables: ['翻译定稿文档', '双语对照报告 (可选)', '更新后的术语库文件'],
          popularFormats: ['DOCX', 'PDF', 'XLSX', 'PPTX', 'TXT']
        },
        {
          id: 'proofreading',
          title: '母语审校与精修 (Proofreading)',
          shortDesc: '双语比对、语法纠错、术语统一及地道母语润色',
          fullDesc: '将现有译文品质提升至出版级水准的高端审校服务。由母语资深编辑进行原文与译文的逐句比对、语法与拼写订正、语流润色及品牌基调核查。',
          turnaround: '每3,000字约12~24小时',
          recommendedFor: '待出版书刊、白皮书、路演募资材料(IR)、现有翻译品质复审',
          highlights: [
            '原译文1对1逐行精细比对审查',
            '全面修正拼写、语法、标点及句式逻辑瑕疵',
            '核查品牌调性一致性及全篇术语规范',
            '杜绝直译生硬感及文化违和表述'
          ],
          deliverables: ['带修订痕迹(Track Changes)的审校文档', '整洁定稿版文档', '语言质量评估报告'],
          popularFormats: ['DOCX', 'PDF', 'Google Docs', 'Markdown']
        },
        {
          id: 'localization',
          title: '软件与移动应用本地化 (Localization)',
          shortDesc: '网站、移动APP、SaaS系统UI/UX字符与文化深度适配',
          fullDesc: '将软件系统、移动应用和数字化平台无缝融入目标市场的文化习惯与法规标准。在保持全球品牌形象统一的同时，赢得当地用户的高度认同。',
          turnaround: '视项目字符量约2~5个工作日',
          recommendedFor: '移动应用、SaaS云平台、全球化游戏、跨国电商平台',
          highlights: [
            '深度适配当地俚语、度量衡、货币、日期和文化规范',
            '优化UI字符串长度，防止界面换行破版与布局溢出',
            '真机环境与Web视窗的上下文(In-Context)功能测试',
            '提供全面的文化合规性与敏感度评估'
          ],
          deliverables: ['已本地化的多语言字符代码文件 (JSON, XLIFF等)', 'UI界面截图审核报告', '文化适应性规范'],
          popularFormats: ['JSON', 'XLIFF', 'PO', 'Figma', 'YAML']
        },
        {
          id: 'product-detail',
          title: '跨境电商与Listing翻译 (Commerce)',
          shortDesc: '亚马逊、Shopee、乐天等海外电商详情页转化型翻译',
          fullDesc: '专为海外主流电商平台打造的高转化率Listing翻译。融入当地高搜索量SEO关键词，贴合当地消费者的购买决策心理，直接赋能海外销量增长。',
          turnaround: '每10个SKU当天至24小时内交付',
          recommendedFor: '跨境电商品牌、亚马逊卖家、出口外贸企业、独立站D2C品牌',
          highlights: [
            '自然融入海外电商平台高转化SEO搜索关键词',
            '直击海外消费者痛点的本地化营销文案构撰',
            '严格遵守平台字符限制与上架排版规则',
            '强化产品差异化优势，提升加购转化率'
          ],
          deliverables: ['格式化上架表格', '本地化元数据(标题/五点描述/关键词)', '图片内嵌文本翻译清单'],
          popularFormats: ['CSV', 'XLSX', 'Shopify XML', 'PDF']
        },
        {
          id: 'business-marketing',
          title: '商业营销与创译 (Transcreation)',
          shortDesc: '企业官网、广告宣传片、社交媒体、路演PPT与品牌口号',
          fullDesc: '保留品牌灵魂与情感冲击力的创造性翻译(Transcreation)。重新构思品牌口号、社交媒体营销文案、宣传片旁白和投资计划书，使其在目标市场更具感染力。',
          turnaround: '24~48小时',
          recommendedFor: '广告传媒公关、出海创业公司、企业市场营销部',
          highlights: [
            '品牌Slogan、大标题及广告语的创意本土化再创造',
            '保障品牌在跨国多渠道宣传中风格高度统一',
            '海外社交媒体帖文及流行标签(Hashtag)本地化',
            '高水准商业路演演讲稿与企业宣传画册精译'
          ],
          deliverables: ['多套广告创意创译文案备选', '格式化排版演讲文件', '创意设计说明与文化背景注释'],
          popularFormats: ['PPTX', 'Figma', 'Keynote', 'DOCX', 'HTML']
        },
        {
          id: 'multilingual-content',
          title: '多语种集成翻译管道',
          shortDesc: '专为全球多区域同步上线企业打造的一站式翻译系统',
          fullDesc: '面向同时进军多个海外市场的集团企业构建的端到端持续翻译体系。建立专属翻译记忆库(TM)与统一术语管理中心，持续降低边际成本并统一交付水准。',
          turnaround: '按企业级SLA专属定制',
          recommendedFor: '跨国集团公司、国际传媒机构、同时开拓5国以上市场的SaaS企业',
          highlights: [
            '多国语言并行翻译与全流程数字化项目管理',
            '沉淀专属翻译记忆库(TM)，大幅节省后续版本迭代费用',
            '配备专属项目经理(PM)，提供一对一即时响应',
            '开放API接口，支持持续集成与敏捷本地化'
          ],
          deliverables: ['多语言同步交付包', '集成翻译资产(TM)及术语库', '月度项目数据统计面板'],
          popularFormats: ['XLIFF', 'REST API', 'Git Sync', 'Batch DOCX']
        }
      ]
    },
    whyUs: {
      sectionBadge: '恪守国际品质准则',
      sectionTitle: '选择 TRIX Translate 的理由',
      sectionSubtitle: '严苛的品控流程与全球资深母语专家团队，为您的国际化战略保驾护航。',
      features: [
        {
          title: '50+ 全球语种支持',
          desc: '覆盖世界50多种主流语种及细分地区方言，均由当地资深母语译员亲自操刀。'
        },
        {
          title: '严苛质量控制 (QC)',
          desc: '严格遵循ISO 17100国际标准。专业译员初译后由高级审校进行二次验证，确保精准。'
        },
        {
          title: '细分行业领域匹配',
          desc: '在IT、法律、金融、医疗、跨境电商等垂直领域，精准指派具备从业经验的翻译专家。'
        },
        {
          title: '地道文化本地化',
          desc: '拒绝生硬直译，深度融合当地文化习俗与商业语言习惯，赋予内容自然说服力。'
        }
      ]
    },
    workflow: {
      sectionBadge: '透明高效的作业流',
      sectionTitle: '标准4步一站式服务流程',
      sectionSubtitle: '从需求提交到最终交付，全流程条理清晰、安全可溯。',
      step1Title: 'STEP 01. 提交免费报价需求',
      step1Desc: '上传待翻译文件并选择目标语种与期望周期，专属PM将立即审核。',
      step2Title: 'STEP 02. 指派专属PM与匹配母语译员',
      step2Desc: '按行业背景严格匹配拥有相应实战经验的认证母语译员。',
      step3Title: 'STEP 03. 严谨翻译与双重审校',
      step3Desc: '严格依循术语库规范进行专业笔译，并由独立资深编辑把控质量。',
      step4Title: 'STEP 04. 按时交付与终身无忧售后',
      step4Desc: '在约定时间内交付并完美保持原始文档排版，支持后续免费修改微调。'
    },
    homeCta: {
      title: '正在筹备海外业务扩张？',
      desc: '立即上传您的业务文档，获取专业母语团队出具的详尽报价方案与精准排期。',
      ctaQuote: '立即申请免费报价',
      ctaFaq: '查看常见问题解答'
    },
    sampleDemo: {
      tag: '本地化质量直观对比',
      title: '生硬直译与地道母语本地化的本质区别',
      originalLabel: '原文 (Source Text)',
      literalLabel: '机械直译 / 简单机翻输出',
      literalWarning: '缺失语境与情感共鸣，极易损害品牌在海外市场的专业可信度。',
      trixLabel: 'TRIX 母语深度本地化',
      trixBadge: '最高转化品质',
      insightLabel: '文化微语境与专业洞察'
    },
    tracker: {
      modalTitle: '1:1 报价申请进度实时查询',
      modalSubtitle: '输入您专属的项目受理编号，即可安全查询翻译进度与状态详情。',
      securityBadge: '安全查询',
      searchPlaceholder: '请输入您的受理编号 (例如: TRIX-2026-8942)',
      searchBtn: '查询进度',
      searchHelpText: '为保护客户隐私，系统严格仅凭唯一受理编号进行单条验证查询。',
      searchExample: '例: TRIX-2026-8942',
      searchEmptyNotice: '请输入您要查询的受理编号。',
      searchNotFound: '未找到与该受理编号相匹配的报价申请记录。',
      notFoundDesc: '请确认您输入的受理编号是否与提交成功时页面显示的代码一致。',
      quoteIdLabel: '受理编号',
      submittedAt: '申请时间',
      statusLabel: '当前进度状态',
      steps: {
        received: '已受理',
        review: '审核评估中',
        quoteSent: '报价已发送',
        inProgress: '翻译执行中',
        completed: '已交付完成'
      },
      clientInfoTitle: '申请人信息',
      maskedBadge: '信息脱敏保护中',
      nameLabel: '姓名 / 企业名称',
      emailLabel: '联系邮箱',
      phoneLabel: '联系电话',
      maskedNotice: '※ 为保护您的隐私与商业机密，系统对姓名、邮箱及电话号码进行了脱敏遮蔽处理。',
      langPairLabel: '翻译语言对',
      deadlineLabel: '期望交付期',
      purposeLabel: '翻译用途',
      attachedFilesTitle: '已上传文档列表',
      secureStorageBadge: '加密存储',
      storedBadge: '已归档',
      noFiles: '未上传任何文档。',
      projectDetailsTitle: '具体要求与说明',
      noDetails: '未填写额外特殊要求。',
      contactPmTitle: '向专属项目经理(PM)留言或补充需求',
      contactPmPlaceholder: '如需调整排期、补充新文件或告知加急需求，请在此留言...',
      sendNoteBtn: '发送留言',
      noteSentSuccess: '您的留言已安全同步送达专属项目经理。',
      responseTimeNotice: '我们将在工作时间内2小时内通过预留联系方式给您答复。',
      closeBtn: '关闭',
      copyBtn: '复制',
      copiedBtn: '已复制',
      emptyStateTitle: '请输入受理编号查询报价与进度',
      emptyStateDesc: '为严格保护客户的商业机密与个人隐私，TRIX Translate 不在浏览器端暴露任何历史列表，全面采取受理编号单次鉴权验证机制。'
    },
    quotePage: {
      badge: '企业级免费报价',
      title: '高效精准的多语言翻译报价申请',
      subtitle: '上传待翻译文件，专属项目经理将在工作时间2小时内为您出具详尽报价单及最优排期建议。',
      trustIso: '严格遵循 ISO 17100 国际翻译服务质量标准',
      trustNda: '100% 签署保密协议(NDA)与文档加密安全流转',
      trustSla: '工作时间内2小时极速回传正式报价单',
      step1Title: '申请人基本信息',
      sourceLang: '源语言 (Source)',
      targetLang: '目标语言 (Target)',
      step2Title: '语言对配置',
      serviceType: '服务类型',
      purpose: '文档专业领域与用途',
      preferredDeadline: '期望交付时间',
      step3Title: '服务范围与交付排期',
      fileUploadTitle: '上传翻译文档 (最多3个)',
      fileUploadHint: '支持 DOCX, PDF, XLSX, PPTX, HWP, TXT, ZIP, 图片等全格式 (单个文件限25MB)',
      fileSlotLabel: '添加文件',
      clickToSelect: '点击浏览选择',
      attachedBadge: '已上传',
      projectDetailsLabel: '项目背景与特殊要求 (选填)',
      projectDetailsPlaceholder: '可注明目标读者群体、特定术语表要求、排版保留规范或特殊加急说明...',
      step4Title: '文档上传与项目说明',
      clientName: '姓名或企业名称',
      namePlaceholder: '例如: 张先生 / 环球进出口有限公司',
      clientEmail: '接收报价的电子邮箱',
      emailPlaceholder: 'quote@yourcompany.com',
      clientPhone: '联系电话',
      phonePlaceholder: '例如: +86 138-0000-0000',
      privacyNotice: '我同意个人信息收集及用于报价评估的文档安全处理与保密(NDA)协议条款。',
      submitBtn: '提交免费报价申请',
      submittingBtn: '正在安全提交并发送通知...',
      submitNotice: '申请内容将即时同步至业务邮箱(contact@trixtranslate.com)。',
      submittedTitle: '您的报价申请已成功提交！',
      submittedDesc: '您的文档已进入安全加密流转通道，专属PM正在进行核算，将在2小时内将正式报价单发送至您的邮箱。',
      yourQuoteId: '您的专属受理编号 (Reference ID)',
      checkStatusBtn: '查询申请进度',
      newQuoteBtn: '提交其他报价申请',
      emailDispatchTitle: '业务通知邮件发送状态',
      emailPrepared: '报价详情已就绪，正在投递至 contact@trixtranslate.com。',
      emailSentSuccess: '报价需求已通过 EmailJS 成功投递至业务邮箱 (contact@trixtranslate.com)。',
      emailFallback: '系统已成功登记。您也可以通过下方按钮唤起邮件客户端进行备用发送。',
      openEmailApp: '在邮件应用中打开 (备用发送)',
      summaryTitle: '申请摘要:',
      summaryApplicant: '申请人',
      summaryLanguage: '语言对',
      summaryScope: '周期/领域',
      summaryFiles: '上传附件',
      summaryNoFiles: '无',
      trackerNotice: '请妥善保存此受理编号。您可以随时在顶部导航栏的【查询申请进度】中实时追踪项目状态。',
      purposeOptions: [
        { value: '전문 문서 번역 (계약서 / 비즈니스 / 기술)', label: '专业文档翻译 (商务合同 / 技术手册 / 金融)' },
        { value: '상품 상세페이지 / 이커머스 (아마존, 쇼피, 라쿠텐)', label: '跨境电商与Listing (亚马逊 / Shopee / 乐天)' },
        { value: '소프트웨어 및 모바일 앱 / 웹 현지화 (UI/UX)', label: '软件与移动应用 / 网站UI/UX本地化' },
        { value: '원어민 감수 및 교정 (Proofreading)', label: '外籍母语审校与精修 (Proofreading)' },
        { value: '마케팅 및 브랜드 트랜스크리에이션', label: '市场营销与品牌创译 (Transcreation)' },
        { value: '법률 / 특허 / 규제 준수 문서', label: '法律法规 / 专利申请 / 合规资质文档' },
        { value: '기타 맞춤형 프로젝트', label: '其他定制化专项翻译' }
      ],
      deadlineOptions: [
        { value: '일반 납기 (영업일 기준 3~5일)', label: '标准交付 (3~5个工作日)' },
        { value: '빠른 납기 (영업일 기준 1~2일)', label: '敏捷交付 (1~2个工作日)' },
        { value: '긴급 당일 번역 (협의 필요)', label: '特急加急当日交付 (需专案协商)' },
        { value: '장기 엔터프라이즈 정기 프로젝트', label: '长期企业级定期项目' }
      ],
      validation: {
        name: '请输入您的姓名或企业名称。',
        phone: '请输入您的联系电话。',
        email: '请输入有效的电子邮箱地址。',
        sourceLang: '请选择源语言。',
        targetLang: '请选择目标语言。',
        privacy: '请勾选同意隐私保密协议。'
      }
    },
    estimator: {
      modalTitle: '实时简易报价与工期计算器',
      modalSubtitle: '粘贴待翻译文本或输入预估字符数，系统将即刻估算大致费用与标准交付时间。',
      textModeTab: '粘贴文本 (自动字数统计)',
      wordCountModeTab: '手动输入字数',
      pasteLabel: '在此粘贴原文内容:',
      wordsDetected: '字已检测',
      pastePlaceholder: '将需要测算字数的原文内容粘贴在此处...',
      wordCountInputLabel: '预估词数/字数 (Word Count):',
      serviceType: '服务类型',
      deadlineLabel: '加急选项:',
      standardUrgency: '标准交付 (Standard)',
      expressUrgency: '特急加急 (Express)',
      calculatedEstimate: '测算预估结果',
      estimatedCost: '预估翻译费用',
      estimatedTime: '预估交付周期',
      businessDaysNote: '工作日为准',
      applyBtn: '使用此预估数据填写报价表',
      closeBtn: '关闭',
      notice: '※ 本计算结果仅为基于字数的参考估算。正式报价将结合文档专业难度、图表排版及术语复杂度等综合评定。',
      serviceOptions: {
        translation: '专业文档翻译 (Standard)',
        proofreading: '母语审校与精修 (Proofreading)',
        localization: '网站/APP本地化 (Localization)',
        productDetail: '跨境电商Listing翻译 (Commerce)',
        businessMarketing: '营销文案与创译'
      },
      turnaroundOptions: {
        under24h: '24小时以内',
        fast6to12h: '6~12小时以内',
        days1to2: '约1~2天',
        days2: '约2天',
        days3to4: '约3~4天',
        customProject: '专案沟通协商'
      }
    },
    faq: {
      badge: '有疑问？为您解答',
      title: '常见问题解答 (FAQ)',
      subtitle: '整理了客户在翻译委托、支持语种、交付排期、商业保密及费用核算方面最关心的核心问题。',
      searchPlaceholder: '输入关键词搜索 (例如: 支持语种、交付时间、保密协议、格式)',
      categories: {
        all: '全部问题',
        General: '常规咨询',
        Services: '服务与文档格式',
        Pricing: '费用与排期',
        Security: '安全与保密'
      },
      noResultsTitle: '未找到符合条件的解答。',
      noResultsBtn: '向专属PM进行1对1咨询',
      needMoreHelp: '没找到您需要的答案？',
      needMoreHelpDesc: '专属项目经理将在工作时间内2小时内为您提供详尽解答与方案建议。',
      contactUsCta: '提交1:1 定制需求',
      items: [
        {
          id: 'faq-1',
          category: 'General',
          question: '贵司支持哪些语种的翻译？',
          answer: '我们支持英语、日语、中文(简体/繁体)、西班牙语、法语、德语、越南语、泰语、印尼语、阿拉伯语等全球50多种主流语种。如需小语种或特殊语言对，请随时与我们联系。'
        },
        {
          id: 'faq-2',
          category: 'Services',
          question: '可以处理哪些格式的文档？',
          answer: '几乎支持所有主流格式，包括 Word、PDF、Excel、PowerPoint、JSON、XLIFF、PO、Figma、Markdown、HTML、高清扫描件等，并支持译后格式还原。'
        },
        {
          id: 'faq-3',
          category: 'Services',
          question: '是否可以为已有的翻译稿件提供母语审校和润色？',
          answer: '完全可以。我们的外籍母语审校(Proofreading)服务会对照原文逐句审查，订正语法错漏、统一术语，并润色为地道自然的母语表达。'
        },
        {
          id: 'faq-4',
          category: 'Services',
          question: '本地化(Localization)与普通翻译的区别是什么？',
          answer: '普通翻译侧重于字面意思的准确传达；而本地化则针对目标市场的文化习俗、法规要求、UI界面排版和用户消费心理进行全方位重塑，让产品如同当地本土制造一样自然。'
        },
        {
          id: 'faq-5',
          category: 'Pricing',
          question: '翻译报价是如何核算的？',
          answer: '根据原文词数/字数、目标语言对、行业专业难度、交付加急程度以及排版需求综合评定。在免费报价页面上传文件即可获取精准透明的明细核算单。'
        },
        {
          id: 'faq-6',
          category: 'Pricing',
          question: '是否承接急件或当天交付的加急翻译？',
          answer: '可以。针对时间极其紧迫的项目，我们能调动专项加急团队协同作业，实现当天或隔夜交付。请在提交需求时注明期望的时间节点。'
        },
        {
          id: 'faq-7',
          category: 'Security',
          question: '上传的文件和客户个人信息如何确保安全？',
          answer: '客户提交的所有文件和沟通记录均受严格的保密制度约束，全程采用加密存储，仅供核算报价与指派译员执行项目，绝无外泄可能。'
        },
        {
          id: 'faq-8',
          category: 'Security',
          question: '是否可以提前与企业签署保密协议(NDA)？',
          answer: '当然可以。对于涉及未公开商业机密、战略方案或专利技术的项目，我们在正式开展前可签署我司标准NDA或贵司提供的保密合同。'
        },
        {
          id: 'faq-9',
          category: 'General',
          question: '免费报价的具体流程是怎样的？',
          answer: '只需在免费报价页面填写基本信息并上传文档(最多3件)，专属项目经理审核后将在2小时内通过邮件发送详尽的报价方案与排期表。'
        }
      ]
    },
    footer: {
      tagline: '全球多语言专业翻译与本地化合作伙伴',
      description: '为跨国企业出海、跨境电商及高成长数字平台提供高水准的专业多语言翻译与本地化服务。',
      isoTitle: 'ISO 17100 国际翻译服务质量认证',
      isoDesc: '依托国际认证的严苛质量管理体系，保证每一份译作精准卓越。',
      ndaBadge: '100% 保密协议(NDA)保障',
      globalLangBadge: '支持全球50+语种',
      quickLinks: '快捷链接',
      servicesTitle: '专业服务矩阵',
      rights: '© 2026 TRIX Translate. All rights reserved.',
      privacy: '隐私政策',
      terms: '服务条款',
      security: '安全合规声明'
    }
  },

  // ==========================================
  // SPANISH (Español)
  // ==========================================
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      quote: 'Cotización Gratis',
      faq: 'Preguntas Frecuentes',
      trackQuote: 'Consultar Estado',
      requestQuote: 'Pedir Cotización',
      isoBadge: 'Certificado ISO 17100',
      tagline: 'Socio Global de Traducción y Localización Multilingüe',
      slaNotice: 'Respuesta con cotización en menos de 2 horas laborables',
      selectLanguage: 'Seleccionar Idioma'
    },
    hero: {
      badge: 'Más de 50 Idiomas Globales y Localización Profesional',
      titleLine1: 'Más Allá del Idioma,',
      titleGradient: 'Conectando su Marca con el Mundo.',
      subtitle: 'Su Socio Estratégico de Localización para la Expansión Empresarial Global',
      description: 'Desde contratos corporativos, localización de software y apps, fichas de producto para e-commerce internacional hasta marketing de alto impacto: especialistas nativos acreditados traducen con máxima precisión.',
      ctaQuote: 'Solicitar Cotización Gratis',
      ctaServices: 'Explorar Servicios',
      quickEstimatorBtn: 'Calculadora Rápida',
      statLanguages: '50+ Idiomas',
      statLanguagesLabel: 'Idiomas Globales Soportados',
      statDelivery: '99.8%',
      statDeliveryLabel: 'Tasa de Entrega Puntual',
      statIso: 'ISO 17100',
      statIsoLabel: 'Certificación Internacional de Calidad',
      previewBadge: 'Revisión Nativa en 50+ Países',
      previewSourceLabel: 'Texto Original (English Source):',
      previewSourceText: '"Expand your brand globally with confidence and authentic local appeal."',
      previewTargetLabel: 'Objetivo: Soporte en más de 50 idiomas',
      previewTargetText: 'Impulse su expansión internacional con una credibilidad sólida y un lenguaje diseñado para conectar profundamente con las audiencias locales.',
      nativeReviewBadge: '100% Revisión Nativa',
      accuracyLabel: 'Precisión: 99.8%'
    },
    services: {
      sectionBadge: 'Soluciones Profesionales de Traducción y Localización',
      sectionTitle: 'Servicios Multilingües Optimizados para Negocios',
      sectionSubtitle: 'Garantizamos la máxima precisión, rapidez y coherencia terminológica con especialistas nativos por sector.',
      learnMore: 'Más información',
      requestThis: 'Cotizar este servicio',
      turnaround: 'Plazo estándar',
      formats: 'Formatos admitidos',
      highlights: 'Ventajas clave',
      recommendedLabel: 'Recomendado para',
      overviewTitle: 'Resumen y especificaciones del servicio',
      deliverablesTitle: 'Entregables finales',
      quoteNotice: 'Cotización formal en 2 horas al adjuntar su documento',
      items: [
        {
          id: 'translation',
          title: 'Traducción Profesional de Documentos',
          shortDesc: 'Contratos legales, finanzas, documentación técnica y académica por nativos',
          fullDesc: 'Servicio de traducción de alta precisión ejecutado por lingüistas nativos especializados en más de 50 pares de idiomas. Reflejamos fielmente la terminología técnica y el contexto de contratos, manuales y publicaciones de investigación.',
          turnaround: '24 a 48 horas habituales (Opción exprés el mismo día)',
          recommendedFor: 'Contratos comerciales, manuales técnicos, informes anuales, artículos científicos, normativas',
          highlights: [
            'Asignación de traductores nativos con experiencia probada en el sector',
            'Cumplimiento estricto de glosarios y guías de estilo corporativas',
            'Gestión terminológica alineada con estándares internacionales',
            'Proceso de control de calidad en dos fases para cero errores'
          ],
          deliverables: ['Documento traducido finalizado', 'Informe de cotejo bilingüe (Opcional)', 'Archivo de glosario terminológico actualizado'],
          popularFormats: ['DOCX', 'PDF', 'XLSX', 'PPTX', 'TXT']
        },
        {
          id: 'proofreading',
          title: 'Corrección y Edición Nativa (Proofreading)',
          shortDesc: 'Cotejo con el original, gramática, unificación de términos y fluidez nativa',
          fullDesc: 'Eleva el nivel de textos ya traducidos a un estándar editorial de excelencia. Nuestros editores nativos realizan una revisión exhaustiva cruzada, corrección sintáctica, pulido estilístico y alineación con el tono de voz de su marca.',
          turnaround: '12 a 24 horas por cada 3.000 palabras',
          recommendedFor: 'Materiales para publicación, whitepapers, presentaciones para inversores (IR), auditoría de traducciones',
          highlights: [
            'Cotejo minucioso línea por línea entre texto original y destino',
            'Corrección integral de ortografía, sintaxis y puntuación',
            'Auditoría de consistencia en el tono de marca y terminología',
            'Eliminación de calcos y expresiones poco naturales'
          ],
          deliverables: ['Manuscrito con control de cambios (Track Changes)', 'Versión final limpia', 'Informe de evaluación de calidad lingüística'],
          popularFormats: ['DOCX', 'PDF', 'Google Docs', 'Markdown']
        },
        {
          id: 'localization',
          title: 'Localización de Software y Apps (L10n)',
          shortDesc: 'Adaptación cultural y técnica de interfaces UI/UX web y móviles',
          fullDesc: 'Adaptamos software, sitios web y aplicaciones para que se sientan creados de forma nativa en cada mercado meta. Mantenemos la identidad global de su marca asegurando la perfecta integración visual y cultural.',
          turnaround: '2 a 5 días laborables según el volumen de cadenas',
          recommendedFor: 'Aplicaciones móviles, plataformas SaaS, videojuegos, e-commerce transfronterizo',
          highlights: [
            'Adaptación de modismos, unidades, fechas y moneda al mercado de destino',
            'Optimización de longitud de texto para evitar roturas de diseño UI',
            'Pruebas y control de calidad en contexto real (In-Context testing)',
            'Guía completa de idoneidad y sensibilidad cultural'
          ],
          deliverables: ['Archivos de recursos traducidos (JSON, XLIFF, etc.)', 'Informe de validación de capturas de pantalla UI', 'Guía de adaptación cultural'],
          popularFormats: ['JSON', 'XLIFF', 'PO', 'Figma', 'YAML']
        },
        {
          id: 'product-detail',
          title: 'E-Commerce y Fichas de Producto (Commerce)',
          shortDesc: 'Traducción orientada a ventas para Amazon, Shopee, Mercado Libre y tiendas online',
          fullDesc: 'Traducciones persuasivas diseñadas para maximizar la tasa de conversión en marketplaces globales. Incorporamos palabras clave de búsqueda SEO local y apelamos a la psicología del comprador de cada país.',
          turnaround: 'En el día o hasta 24 horas por cada 10 SKUs',
          recommendedFor: 'Marcas de e-commerce, vendedores en Amazon, exportadores, marcas D2C',
          highlights: [
            'Integración natural de palabras clave SEO locales para marketplaces',
            'Copywriting publicitario enfocado en la decisión de compra',
            'Cumplimiento riguroso de límites de caracteres y formatos',
            'Enfoque en los beneficios más valorados por el consumidor local'
          ],
          deliverables: ['Hoja de carga de productos formateada', 'Títulos meta y viñetas optimizadas', 'Traducción de textos de imágenes'],
          popularFormats: ['CSV', 'XLSX', 'Shopify XML', 'PDF']
        },
        {
          id: 'business-marketing',
          title: 'Marketing y Transcreación de Marca',
          shortDesc: 'Slogans, campañas publicitarias, redes sociales y presentaciones de negocio',
          fullDesc: 'Transcreación creativa que preserva la chispa, el impacto emocional y la personalidad de su marca. Adaptamos campañas en redes sociales, pitch decks para inversores y guiones promocionales para cautivar al mercado objetivo.',
          turnaround: '24 a 48 horas',
          recommendedFor: 'Agencias de publicidad, relaciones públicas, startups globales, departamentos de marketing',
          highlights: [
            'Transcreación creativa de eslóganes, titulares y anuncios',
            'Consistencia del tono de voz de marca en diversos mercados',
            'Adaptación de publicaciones en redes sociales y hashtags locales',
            'Localización de propuestas de inversión y presentaciones corporativas'
          ],
          deliverables: ['Diversas opciones creativas de copy con notas de intención', 'Presentaciones formateadas', 'Comentarios estratégicos culturales'],
          popularFormats: ['PPTX', 'Figma', 'Keynote', 'DOCX', 'HTML']
        },
        {
          id: 'multilingual-content',
          title: 'Pipeline Multilingüe Integrado',
          shortDesc: 'Solución continua de traducción simultánea para expansión internacional masiva',
          fullDesc: 'Sistema integral de traducción continua para empresas que abordan múltiples países a la vez. Construimos y mantenemos Memorias de Traducción (TM) centralizadas y glosarios para reducir costes acumulados y asegurar la homogeneidad.',
          turnaround: 'Acuerdo de Nivel de Servicio (SLA) para empresas',
          recommendedFor: 'Multinacionales, medios globales de comunicación, empresas SaaS multirregión',
          highlights: [
            'Traducción simultánea a múltiples idiomas con gestión unificada',
            'Ahorro progresivo de costes mediante Memorias de Traducción (TM)',
            'Gestor de Proyectos (PM) dedicado con comunicación directa e inmediata',
            'Integración mediante API para flujos de localización ágil'
          ],
          deliverables: ['Paquete de entrega multilingüe simultánea', 'Archivos de memorias de traducción y glosarios', 'Panel de métricas mensuales'],
          popularFormats: ['XLIFF', 'REST API', 'Git Sync', 'Batch DOCX']
        }
      ]
    },
    whyUs: {
      sectionBadge: 'Estándares de Calidad sin Concesiones',
      sectionTitle: 'Por Qué Elegir TRIX Translate',
      sectionSubtitle: 'Control riguroso de calidad y un equipo internacional de lingüistas nativos para acelerar su expansión.',
      features: [
        {
          title: 'Más de 50 Idiomas',
          desc: 'Precisión dialectal y contextual gestionada directamente por traductores nativos evaluados en todo el mundo.'
        },
        {
          title: 'Control de Calidad Riguroso',
          desc: 'Certificación ISO 17100. Traducción nativa inicial seguida de una segunda revisión exhaustiva independiente.'
        },
        {
          title: 'Especialistas por Sector',
          desc: 'Asignamos traductores con experiencia técnica en TI, legal, finanzas, medicina y comercio electrónico.'
        },
        {
          title: 'Localización Auténtica',
          desc: 'Evitamos traducciones literales; adaptamos matices idiomáticos y costumbres para un impacto persuasivo.'
        }
      ]
    },
    workflow: {
      sectionBadge: 'Proceso Transparente y Rápido',
      sectionTitle: 'Flujo de Trabajo en 4 Pasos',
      sectionSubtitle: 'Un procedimiento claro, confiable y estructurado desde la solicitud hasta la entrega final.',
      step1Title: 'PASO 01. Solicitud de Cotización Gratuita',
      step1Desc: 'Adjunte sus archivos y elija idiomas y plazo; su PM asignado evaluará su proyecto de inmediato.',
      step2Title: 'PASO 02. Asignación de PM y Traductor Nativo',
      step2Desc: 'Emparejamos su encargo con un traductor nativo con sólida experiencia en su sector específico.',
      step3Title: 'PASO 03. Traducción y Revisión de Calidad',
      step3Desc: 'Traducción conforme a sus glosarios seguida de una segunda revisión editorial minuciosa.',
      step4Title: 'PASO 04. Entrega Puntual y Garantía Post-Venta',
      step4Desc: 'Entrega en el formato y diseño original dentro del plazo acordado, con ajustes gratuitos garantizados.'
    },
    homeCta: {
      title: '¿Listo para Expandir su Negocio Internacionalmente?',
      desc: 'Adjunte sus documentos hoy mismo y reciba una cotización detallada y cronograma exacto de nuestro equipo nativo.',
      ctaQuote: 'Solicitar Cotización Gratuita',
      ctaFaq: 'Ver Preguntas Frecuentes'
    },
    sampleDemo: {
      tag: 'Comparativa en Directo de Calidad',
      title: 'Traducción Literal vs. Localización Nativa',
      originalLabel: 'Texto Original',
      literalLabel: 'Salida Literal / Traducción Automática',
      literalWarning: 'Carece de contexto y fluidez natural, lo cual perjudica la credibilidad de su marca.',
      trixLabel: 'Localización Nativa TRIX',
      trixBadge: 'Máxima Calidad de Conversión',
      insightLabel: 'Matices Culturales y Contexto Estratégico'
    },
    tracker: {
      modalTitle: 'Consulta de Solicitud de Cotización 1:1',
      modalSubtitle: 'Ingrese su código de referencia exclusivo para verificar el estado de su proyecto en tiempo real.',
      securityBadge: 'Consulta Segura',
      searchPlaceholder: 'Ingrese su código de referencia (ej: TRIX-2026-8942)',
      searchBtn: 'Consultar',
      searchHelpText: 'Por motivos de privacidad, la información solo se muestra mediante su código de referencia individual.',
      searchExample: 'ej: TRIX-2026-8942',
      searchEmptyNotice: 'Por favor, ingrese el código de referencia que desea consultar.',
      searchNotFound: 'No se encontró ninguna solicitud asociada a este código de referencia.',
      notFoundDesc: 'Asegúrese de haber escrito correctamente el código asignado al enviar su solicitud.',
      quoteIdLabel: 'Código de Referencia',
      submittedAt: 'Fecha de Solicitud',
      statusLabel: 'Estado Actual',
      steps: {
        received: 'Recibido',
        review: 'En Evaluación',
        quoteSent: 'Cotización Enviada',
        inProgress: 'En Traducción',
        completed: 'Finalizado'
      },
      clientInfoTitle: 'Datos del Solicitante',
      maskedBadge: 'Protección con Máscara Activa',
      nameLabel: 'Nombre / Empresa',
      emailLabel: 'Correo de Contacto',
      phoneLabel: 'Teléfono',
      maskedNotice: '※ Por motivos de confidencialidad, sus datos personales se muestran parcialmente enmascarados.',
      langPairLabel: 'Par de Idiomas',
      deadlineLabel: 'Plazo Deseado',
      purposeLabel: 'Finalidad / Sector',
      attachedFilesTitle: 'Archivos Adjuntos',
      secureStorageBadge: 'Custodia Segura',
      storedBadge: 'Almacenado',
      noFiles: 'No hay archivos adjuntos.',
      projectDetailsTitle: 'Instrucciones y Detalles del Proyecto',
      noDetails: 'No se indicaron notas adicionales.',
      contactPmTitle: 'Enviar Mensaje a su Gestor de Proyecto (PM)',
      contactPmPlaceholder: 'Indique ajustes de plazo, archivos adicionales o instrucciones urgentes...',
      sendNoteBtn: 'Enviar Mensaje',
      noteSentSuccess: 'Su mensaje ha sido remitido de forma segura a su PM asignado.',
      responseTimeNotice: 'Le responderemos en menos de 2 horas en horario laboral.',
      closeBtn: 'Cerrar',
      copyBtn: 'Copiar',
      copiedBtn: 'Copiado',
      emptyStateTitle: 'Ingrese su código de referencia para conocer el avance',
      emptyStateDesc: 'Para salvaguardar la estricta privacidad de sus documentos y datos, TRIX Translate no muestra listas globales en el navegador y exige la verificación individual por código.'
    },
    quotePage: {
      badge: 'Cotización Gratuita para Empresas',
      title: 'Cotización Rápida y Precisa de Traducción Multilingüe',
      subtitle: 'Adjunte sus documentos y nuestro PM asignado le enviará una propuesta detallada y el plazo idóneo en menos de 2 horas hábiles.',
      trustIso: 'Certificado bajo la norma internacional de traducción ISO 17100',
      trustNda: '100% Confidencialidad (NDA) y gestión segura de archivos encriptados',
      trustSla: 'Cotización formal remitida en menos de 2 horas laborables',
      step1Title: 'Datos de Contacto del Solicitante',
      sourceLang: 'Idioma de Origen (Source)',
      targetLang: 'Idioma de Destino (Target)',
      step2Title: 'Selección del Par de Idiomas',
      serviceType: 'Tipo de Servicio',
      purpose: 'Ámbito y Propósito del Documento',
      preferredDeadline: 'Plazo de Entrega Preferido',
      step3Title: 'Alcance del Servicio y Plazo',
      fileUploadTitle: 'Adjuntar Documentos a Traducir (Hasta 3 archivos)',
      fileUploadHint: 'Admite DOCX, PDF, XLSX, PPTX, HWP, TXT, ZIP, imágenes, etc. (Máx. 25MB por archivo)',
      fileSlotLabel: 'Añadir Archivo',
      clickToSelect: 'Haga clic para buscar',
      attachedBadge: 'Adjuntado',
      projectDetailsLabel: 'Notas e Instrucciones Específicas (Opcional)',
      projectDetailsPlaceholder: 'Describa el público objetivo, glosarios preferidos, requisitos de diseño o fechas límite concretas...',
      step4Title: 'Adjuntos y Especificaciones',
      clientName: 'Nombre o Razón Social',
      namePlaceholder: 'Ej: Carlos García / Global Commerce S.L.',
      clientEmail: 'Correo para Recibir la Cotización',
      emailPlaceholder: 'cotizacion@suempresa.com',
      clientPhone: 'Teléfono de Contacto',
      phonePlaceholder: 'Ej: +34 612 345 678',
      privacyNotice: 'Acepto la recopilación y tratamiento confidencial de documentos con fines de cotización bajo estrictos protocolos de privacidad (NDA).',
      submitBtn: 'Enviar Solicitud de Cotización Gratuita',
      submittingBtn: 'Enviando y notificando al equipo...',
      submitNotice: 'Se enviará de inmediato a nuestra casilla corporativa (contact@trixtranslate.com).',
      submittedTitle: '¡Su Solicitud de Cotización Ha Sido Recibida!',
      submittedDesc: 'Sus archivos han sido resguardados con cifrado seguro. Un Gestor de Proyecto evaluará el proyecto y le enviará la cotización oficial a su correo en menos de 2 horas laborables.',
      yourQuoteId: 'Su Código Exclusivo de Referencia (Reference ID)',
      checkStatusBtn: 'Consultar Estado de la Solicitud',
      newQuoteBtn: 'Solicitar Otra Cotización',
      emailDispatchTitle: 'Estado del Envío al Correo Corporativo',
      emailPrepared: 'Los detalles de la cotización están listos para ser enviados a contact@trixtranslate.com.',
      emailSentSuccess: 'Notificación enviada con éxito a contact@trixtranslate.com mediante EmailJS.',
      emailFallback: 'Registrado en el sistema. Puede utilizar el botón inferior para un reenvío manual desde su cliente de correo.',
      openEmailApp: 'Abrir en cliente de correo (Envío de respaldo)',
      summaryTitle: 'Resumen de la Solicitud:',
      summaryApplicant: 'Solicitante',
      summaryLanguage: 'Idiomas',
      summaryScope: 'Plazo/Propósito',
      summaryFiles: 'Adjuntos',
      summaryNoFiles: 'Ninguno',
      trackerNotice: 'Guarde este código. Podrá ingresarlo en la opción superior [Consultar Estado] en cualquier momento para seguir el progreso de su proyecto.',
      purposeOptions: [
        { value: '전문 문서 번역 (계약서 / 비즈니스 / 기술)', label: 'Documentos Profesionales (Contratos / Negocios / Técnica)' },
        { value: '상품 상세페이지 / 이커머스 (아마존, 쇼피, 라쿠텐)', label: 'E-Commerce y Fichas de Producto (Amazon, Mercado Libre)' },
        { value: '소프트웨어 및 모바일 앱 / 웹 현지화 (UI/UX)', label: 'Localización de Software, Apps y Web (UI/UX)' },
        { value: '원어민 감수 및 교정 (Proofreading)', label: 'Corrección y Edición Nativa (Proofreading)' },
        { value: '마케팅 및 브랜드 트랜스크리에이션', label: 'Marketing y Transcreación de Marca' },
        { value: '법률 / 특허 / 규제 준수 문서', label: 'Documentación Legal, Patentes y Regulatoria' },
        { value: '기타 맞춤형 프로젝트', label: 'Proyecto Especial Personalizado' }
      ],
      deadlineOptions: [
        { value: '일반 납기 (영업일 기준 3~5일)', label: 'Plazo Estándar (3 a 5 días laborables)' },
        { value: '빠른 납기 (영업일 기준 1~2일)', label: 'Plazo Rápido (1 a 2 días laborables)' },
        { value: '긴급 당일 번역 (협의 필요)', label: 'Urgente en el Día (Sujeto a confirmación)' },
        { value: '장기 엔터프라이즈 정기 프로젝트', label: 'Proyecto Periódico para Empresas' }
      ],
      validation: {
        name: 'Por favor, ingrese su nombre o empresa.',
        phone: 'Por favor, ingrese un número de teléfono de contacto.',
        email: 'Por favor, ingrese un correo electrónico válido.',
        sourceLang: 'Por favor, seleccione el idioma de origen.',
        targetLang: 'Por favor, seleccione el idioma de destino.',
        privacy: 'Debe aceptar los términos de privacidad y confidencialidad.'
      }
    },
    estimator: {
      modalTitle: 'Calculadora de Estimación Rápida de Coste y Plazo',
      modalSubtitle: 'Pegue un fragmento de texto o ingrese el número estimado de palabras para conocer un presupuesto orientativo y plazo de entrega.',
      textModeTab: 'Pegar Texto (Conteo Automático)',
      wordCountModeTab: 'Ingresar Palabras Manualmente',
      pasteLabel: 'Pegue el texto original aquí:',
      wordsDetected: 'palabras detectadas',
      pastePlaceholder: 'Pegue el texto original que desea analizar...',
      wordCountInputLabel: 'Número estimado de palabras (Word Count):',
      serviceType: 'Tipo de Servicio',
      deadlineLabel: 'Modalidad de Plazo:',
      standardUrgency: 'Plazo Estándar (Standard)',
      expressUrgency: 'Plazo Urgente (Express)',
      calculatedEstimate: 'Presupuesto y Plazo Estimados',
      estimatedCost: 'Coste Estimado de Traducción',
      estimatedTime: 'Tiempo Estimado de Entrega',
      businessDaysNote: 'Días laborables',
      applyBtn: 'Aplicar esta estimación al formulario',
      closeBtn: 'Cerrar',
      notice: '※ Esta estimación es orientativa y se basa en el recuento de palabras. El presupuesto final puede variar ligeramente según la complejidad técnica y el formato de maquetación.',
      serviceOptions: {
        translation: 'Traducción Profesional (Standard)',
        proofreading: 'Corrección y Edición Nativa (Proofreading)',
        localization: 'Localización Web / Apps (L10n)',
        productDetail: 'Fichas de Producto E-Commerce',
        businessMarketing: 'Marketing y Transcreación de Marca'
      },
      turnaroundOptions: {
        under24h: 'En 24 horas',
        fast6to12h: 'En 6 a 12 horas',
        days1to2: '1 a 2 días',
        days2: '2 días',
        days3to4: '3 a 4 días',
        customProject: 'Consultar según proyecto'
      }
    },
    faq: {
      badge: '¿Tiene Dudas?',
      title: 'Preguntas Frecuentes (FAQ)',
      subtitle: 'Encuentre respuestas rápidas sobre idiomas soportados, plazos de entrega, seguridad confidencial y cálculo de tarifas.',
      searchPlaceholder: 'Buscar por palabra clave (ej: idiomas, plazo, confidencialidad, formatos)',
      categories: {
        all: 'Todas las Categorías',
        General: 'Consultas Generales',
        Services: 'Servicios y Formatos',
        Pricing: 'Tarifas y Plazos',
        Security: 'Seguridad y Privacidad'
      },
      noResultsTitle: 'No se encontraron preguntas que coincidan con su búsqueda.',
      noResultsBtn: 'Hacer una consulta a un PM dedicado',
      needMoreHelp: '¿No encontró la respuesta que buscaba?',
      needMoreHelpDesc: 'Nuestros gestores de proyecto están a su disposición para asesorarle en menos de 2 horas.',
      contactUsCta: 'Solicitar Asesoría y Cotización 1:1',
      items: [
        {
          id: 'faq-1',
          category: 'General',
          question: '¿Qué idiomas admiten en sus servicios?',
          answer: 'Ofrecemos cobertura en más de 50 idiomas globales, incluidos inglés, japonés, chino (simplificado y tradicional), español, francés, alemán, vietnamita, tailandés, indonesio y árabe. Consúltenos para combinaciones especializadas.'
        },
        {
          id: 'faq-2',
          category: 'Services',
          question: '¿Qué tipos de archivos y formatos pueden procesar?',
          answer: 'Aceptamos prácticamente todos los formatos estándar: Microsoft Office (Word, Excel, PowerPoint), PDF, Google Docs, JSON, XLIFF, PO, Figma, Markdown, HTML y documentos escaneados en alta resolución.'
        },
        {
          id: 'faq-3',
          category: 'Services',
          question: '¿Pueden revisar o corregir traducciones ya existentes?',
          answer: 'Sí. Nuestro servicio de revisión y corrección nativa (Proofreading) compara el texto original frente al traducido, subsana fallos sintácticos, unifica terminología y asegura la fluidez y naturalidad de la redacción.'
        },
        {
          id: 'faq-4',
          category: 'Services',
          question: '¿Cuál es la diferencia entre traducción y localización?',
          answer: 'Mientras que la traducción busca la equivalencia literal del mensaje, la localización adapta el contenido a la cultura, modismos, moneda, marco normativo y patrones de consumo del mercado destinatario para que se sienta como un producto autóctono.'
        },
        {
          id: 'faq-5',
          category: 'Pricing',
          question: '¿Cómo se calcula el importe de una cotización?',
          answer: 'Se evalúa según el número de palabras del texto original, la combinación de idiomas, el grado de especialización técnica, el plazo solicitado y los servicios adicionales (maquetación, revisión). Adjunte su archivo para recibir un desglose exacto.'
        },
        {
          id: 'faq-6',
          category: 'Pricing',
          question: '¿Tienen servicio de traducción urgente en el mismo día?',
          answer: 'Sí. Según el volumen y los idiomas, podemos activar equipos de urgencia dedicados para realizar entregas en el mismo día o al inicio de la jornada siguiente. Indique su plazo objetivo al cotizar.'
        },
        {
          id: 'faq-7',
          category: 'Security',
          question: '¿Cómo se protegen los documentos y datos personales enviados?',
          answer: 'Todos los documentos e información remitidos se gestionan bajo rigurosas normas de confidencialidad y cifrado. Solo tienen acceso a ellos los lingüistas asignados al encargo y jamás se emplean para otros fines.'
        },
        {
          id: 'faq-8',
          category: 'Security',
          question: '¿Es posible formalizar un acuerdo de confidencialidad (NDA)?',
          answer: 'Por supuesto. Para documentos confidenciales, planes de lanzamiento o contratos reservados, podemos suscribir nuestro acuerdo estándar de confidencialidad o firmar el modelo corporativo de su empresa antes de iniciar.'
        },
        {
          id: 'faq-9',
          category: 'General',
          question: '¿Cómo funciona el proceso para pedir una cotización gratuita?',
          answer: 'Basta con completar los datos básicos en la página de cotización y adjuntar hasta 3 documentos. Su gestor asignado revisará los requisitos y le enviará la cotización y el calendario en menos de 2 horas hábiles.'
        }
      ]
    },
    footer: {
      tagline: 'Socio Global de Traducción y Localización Multilingüe',
      description: 'Ofrecemos servicios de traducción profesional y localización del más alto nivel para impulsar empresas, comercio transfronterizo y plataformas digitales hacia el éxito global.',
      isoTitle: 'Certificación Internacional de Traducción ISO 17100',
      isoDesc: 'Operamos bajo un sistema de gestión de calidad riguroso que garantiza resultados de precisión impecable.',
      ndaBadge: '100% Confidencialidad (NDA) Garantizada',
      globalLangBadge: 'Más de 50 Idiomas Globales',
      quickLinks: 'Enlaces Rápidos',
      servicesTitle: 'Servicios Especializados',
      rights: '© 2026 TRIX Translate. Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      security: 'Políticas de Seguridad'
    }
  }
};
