export type SupportedLang = 'en' | 'ko';

export interface I18nContent {
  nav: {
    about: string;
    solutions: string;
    services: string;
    familySitesBtn: string;
    liveBadge: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlineGradient: string;
    subCopy: string;
    exploreServicesBtn: string;
    coreSolutionsBtn: string;
    activeNodesLabel: string;
    metrics: {
      availability: { label: string; desc: string };
      latency: { label: string; desc: string };
      nodes: { label: string; desc: string };
      architecture: { label: string; desc: string };
    };
  };
  solutions: {
    badge: string;
    title: string;
    description: string;
    fin: {
      category: string;
      title: string;
      description: string;
      button: string;
    };
    exo: {
      category: string;
      title: string;
      description: string;
      button: string;
    };
    test: {
      category: string;
      title: string;
      description: string;
      button: string;
    };
    principles: {
      badge: string;
      title: string;
      items: { title: string; desc: string }[];
    };
  };
  hub: {
    badge: string;
    title: string;
    description: string;
    totalRegistered: string;
    countUnit: string;
    visitBtn: string;
    comingSoonBadge: string;
    comingSoonDesc: string;
    floating: {
      title: string;
      nodesActive: string;
      domainNote: string;
      triggerLabel: string;
    };
  };
  footer: {
    description: string;
    officialWebsite: string;
    familyTitle: string;
    archTitle: string;
    archItems: string[];
    rights: string;
    hostingNote: string;
    repo: string;
  };
}

export const DICTIONARY: Record<SupportedLang, I18nContent> = {
  en: {
    nav: {
      about: 'About',
      solutions: 'Solutions',
      services: 'Ecosystem',
      familySitesBtn: 'Family Sites',
      liveBadge: 'LIVE',
    },
    hero: {
      badge: 'Digital Infrastructure & Interactive Web Studio',
      headlinePart1: 'Engineering Resilient Infrastructure &',
      headlineGradient: 'Next-Generation Interactive Web',
      subCopy: 'Coni Teck is a modern technology studio dedicated to building high-performance web architectures, financial analytics dashboards, and interactive browser applications.',
      exploreServicesBtn: 'Explore Ecosystem',
      coreSolutionsBtn: 'Core Divisions',
      activeNodesLabel: 'Online Service Nodes:',
      metrics: {
        availability: { label: 'Global Availability', desc: 'Zero-downtime distributed edge network' },
        latency: { label: 'Edge Latency', desc: 'Ultra-low latency static CDN pipeline' },
        nodes: { label: 'Active Ecosystem', desc: 'Autonomous micro-frontend applications' },
        architecture: { label: 'Serverless Design', desc: 'Zero-daemon, highly secure architecture' },
      },
    },
    solutions: {
      badge: 'Core Divisions',
      title: 'Reliable & Purpose-Built Web Solutions',
      description: 'Coni Teck builds specialized digital products across financial asset analytics, browser interaction, and behavioral data models on a resilient edge foundation.',
      fin: {
        category: 'FinTech & Asset Management',
        title: 'Asset Ledger & Analytics',
        description: 'A lightweight financial dashboard providing real-time portfolio tracking, multi-asset visibility, and automated cashflow analysis.',
        button: 'Launch FinConi',
      },
      exo: {
        category: 'Interactive Entertainment',
        title: 'Browser Simulation Game',
        description: 'An interactive Sci-Fi strategy gaming environment engineered with modern web standards, delivering seamless cross-platform performance.',
        button: 'Launch ExoWorld',
      },
      test: {
        category: 'Behavioral Data Analytics',
        title: 'Psychometrics Assessment',
        description: 'An interactive diagnostics platform combining responsive UI with quantitative behavioral data modeling to assess personal profiles.',
        button: 'Launch Teto-Egen',
      },
      principles: {
        badge: 'Engineering Principles',
        title: 'Core Values That Drive Coni Teck',
        items: [
          {
            title: 'Resilient Infrastructure',
            desc: 'Eliminating unnecessary runtime dependencies and delivering through global edge CDNs for maximum uptime and speed.',
          },
          {
            title: 'Data-Centric Visualization',
            desc: 'Refining complex financial and psychological data into clean, intuitive interfaces that empower decision-making.',
          },
          {
            title: 'Lightweight Interactivity',
            desc: 'Crafting high-quality interactive experiences adhering to open web standards across any screen or device.',
          },
        ],
      },
    },
    hub: {
      badge: 'Ecosystem Directory',
      title: 'Coni Teck Family Services & Projects',
      description: 'A centralized directory connecting to all distributed web application nodes within the Coni Teck network.',
      totalRegistered: 'Registered Services',
      countUnit: 'Nodes',
      visitBtn: 'Visit Service',
      comingSoonBadge: 'COMING SOON',
      comingSoonDesc: 'Under Development',
      floating: {
        title: 'Coni Teck Ecosystem',
        nodesActive: 'Online',
        domainNote: 'Official Gateway: coniteck.cc',
        triggerLabel: 'Family Sites',
      },
    },
    footer: {
      description: 'Coni Teck is a modern technology studio developing high-performance web architecture, real-time data visualization tools, and interactive applications.',
      officialWebsite: 'Official Gateway',
      familyTitle: 'Family Services',
      archTitle: 'Architecture',
      archItems: [
        'Pure Static Web Architecture (Vite & TypeScript)',
        'Global Edge CDN with Zero Downtime',
        'Modular SSOT Data Layer Management',
        'Zero-Daemon Serverless Hosting',
      ],
      rights: 'All rights reserved.',
      hostingNote: 'Static Hosting (GitHub Pages)',
      repo: 'GitHub Repository',
    },
  },
  ko: {
    nav: {
      about: '기업 소개',
      solutions: '핵심 솔루션',
      services: '패밀리 서비스',
      familySitesBtn: '패밀리 사이트',
      liveBadge: '운영 중',
    },
    hero: {
      badge: '디지털 인프라 & 인터랙티브 웹 기술 스튜디오',
      headlinePart1: '안정적인 디지털 인프라와',
      headlineGradient: '인터랙티브 웹 솔루션의 미래',
      subCopy: 'Coni Teck은 고성능 정적 웹 아키텍처, 실시간 데이터 시각화 도구, 인터랙티브 웹 애플리케이션을 개발하고 서비스하는 모던 IT 기업입니다.',
      exploreServicesBtn: '패밀리 서비스 둘러보기',
      coreSolutionsBtn: '핵심 사업 영역',
      activeNodesLabel: '현재 운영 중인 서비스 바로가기:',
      metrics: {
        availability: { label: '글로벌 가용성', desc: '엣지 CDN 기반 무중단 분산 서비스' },
        latency: { label: '서비스 레이턴시', desc: '초저지연 정적 에셋 서빙 파이프라인' },
        nodes: { label: '패밀리 서비스', desc: '독립형 마이크로 프론트엔드 생태계' },
        architecture: { label: '아키텍처', desc: '보안과 비용 효율을 극대화한 서버리스 설계' },
      },
    },
    solutions: {
      badge: '핵심 사업 영역',
      title: '전문성과 안정성에 기반한 핵심 서비스',
      description: 'Coni Teck은 고도화된 정적 웹 인프라를 바탕으로 자산 관리, 브라우저 인터랙션, 데이터 분석 영역에서 독자적인 웹 솔루션을 구축하고 있습니다.',
      fin: {
        category: 'FinTech & Asset Management',
        title: '자산 현황 대시보드',
        description: '분산된 개인 금융 자산과 현금 흐름을 시각화하고 안정적으로 모니터링할 수 있는 경량 자산 관리 대시보드 플랫폼입니다.',
        button: 'FinConi 바로가기',
      },
      exo: {
        category: 'Interactive Entertainment',
        title: '인터랙티브 웹 게임',
        description: '웹 표준 기술로 구현되어 크로스 플랫폼에서 지연 없이 부드럽게 작동하는 전략형 브라우저 인터랙티브 게임 환경입니다.',
        button: 'ExoWorld 바로가기',
      },
      test: {
        category: 'Behavioral Data Analytics',
        title: '심리 성향 분석 테스트',
        description: '사용자 반응과 정량적 데이터 모델을 결합하여 개인의 성향과 행동 양식을 명확하게 도출하는 분석 솔루션입니다.',
        button: 'Teto-Egen 바로가기',
      },
      principles: {
        badge: '엔지니어링 가치',
        title: 'Coni Teck이 지향하는 핵심 원칙',
        items: [
          {
            title: '신뢰성 높은 웹 인프라',
            desc: '불필요한 런타임 종속성을 배제하고 글로벌 엣지 CDN을 통해 안정적이고 빠른 웹 환경을 제공합니다.',
          },
          {
            title: '데이터 중심 시각화',
            desc: '복잡한 금융 및 분석 데이터를 직관적인 UI로 정제하여 의사결정을 지원합니다.',
          },
          {
            title: '경량 인터랙티브 경험',
            desc: '웹 표준 기술을 바탕으로 플랫폼에 구애받지 않는 고품질 인터랙티브 콘텐츠를 구축합니다.',
          },
        ],
      },
    },
    hub: {
      badge: '패밀리 서비스 네트워크',
      title: 'Coni Teck 패밀리 서비스 & 서브 프로젝트',
      description: '독자적인 기술 역량과 목적에 맞게 분산 배포된 Coni Teck의 공식 서브 도메인 웹 애플리케이션 모음입니다.',
      totalRegistered: '전체 등록 서비스',
      countUnit: '개',
      visitBtn: '서비스 접속하기',
      comingSoonBadge: '준비 중',
      comingSoonDesc: '개발 진행 중',
      floating: {
        title: 'Coni Teck 패밀리 서비스',
        nodesActive: '개 운영 중',
        domainNote: '공식 도메인: coniteck.cc',
        triggerLabel: '패밀리 사이트',
      },
    },
    footer: {
      description: 'Coni Teck은 고성능 정적 웹 아키텍처, 실시간 데이터 시각화 도구, 인터랙티브 웹 애플리케이션을 개발하고 서비스하는 모던 IT 기업입니다.',
      officialWebsite: '공식 웹사이트',
      familyTitle: '패밀리 서비스',
      archTitle: '기술 아키텍처',
      archItems: [
        '고성능 정적 웹 아키텍처 (Vite & TypeScript)',
        '글로벌 엣지 CDN 무중단 분산 배포',
        '모듈형 SSOT 데이터 레이어 관리',
        '서버리스 Zero-Daemon 환경',
      ],
      rights: 'All rights reserved.',
      hostingNote: '정적 호스팅 (GitHub Pages)',
      repo: 'GitHub 저장소',
    },
  },
};
