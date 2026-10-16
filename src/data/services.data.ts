import type { SupportedLang } from './i18n.data.ts';

export interface LocalizedSubService {
  id: string;
  name: string;
  domain: string;
  url: string;
  category: string;
  tagline: string;
  description: string;
  status: 'live' | 'beta' | 'coming_soon';
  badgeText: string;
  accentColor: 'blue' | 'emerald' | 'indigo' | 'slate';
  iconType: 'finance' | 'game' | 'psychology' | 'ai';
}

interface MultiLangSubService {
  id: string;
  name: string;
  domain: string;
  url: string;
  category: { en: string; ko: string };
  tagline: { en: string; ko: string };
  description: { en: string; ko: string };
  status: 'live' | 'beta' | 'coming_soon';
  badgeText: { en: string; ko: string };
  accentColor: 'blue' | 'emerald' | 'indigo' | 'slate';
  iconType: 'finance' | 'game' | 'psychology' | 'ai';
}

export const RAW_SUB_SERVICES: MultiLangSubService[] = [
  {
    id: 'fin-dashboard',
    name: 'FinConi',
    domain: 'fin.coniteck.cc',
    url: 'https://fin.coniteck.cc/',
    category: {
      en: 'FinTech / Asset Dashboard',
      ko: 'FinTech / 자산 대시보드',
    },
    tagline: {
      en: 'Real-time Asset Ledger & Analytics',
      ko: '실시간 자산 현황 & 금융 분석 대시보드',
    },
    description: {
      en: 'A lightweight financial dashboard providing real-time portfolio tracking, multi-asset visibility, and automated cashflow analysis.',
      ko: '분산된 금융 자산 현황, 포트폴리오 변동성 및 현금 흐름을 한눈에 조망할 수 있는 실시간 자산 관리 대시보드입니다.',
    },
    status: 'live',
    badgeText: {
      en: 'ONLINE',
      ko: '운영 중',
    },
    accentColor: 'emerald',
    iconType: 'finance',
  },
  {
    id: 'exo-world',
    name: 'ExoWorld',
    domain: 'exo.coniteck.cc',
    url: 'https://exo.coniteck.cc/',
    category: {
      en: 'Interactive / Web Game',
      ko: '인터랙티브 / 웹 게임',
    },
    tagline: {
      en: 'Modern Browser-Based Sci-Fi Game',
      ko: '웹 표준 기반 인터랙티브 게임',
    },
    description: {
      en: 'An interactive Sci-Fi strategy gaming environment engineered with modern web standards, delivering seamless cross-platform performance.',
      ko: '별도의 설치 없이 모던 브라우저 환경에서 매끄럽게 구동되는 전략형 인터랙티브 웹 게임 프로젝트입니다.',
    },
    status: 'live',
    badgeText: {
      en: 'ONLINE',
      ko: '운영 중',
    },
    accentColor: 'blue',
    iconType: 'game',
  },
  {
    id: 'test-platform',
    name: 'Teto-Egen',
    domain: 'test.coniteck.cc',
    url: 'https://test.coniteck.cc/',
    category: {
      en: 'Psychometrics Platform',
      ko: '심리 성향 분석 플랫폼',
    },
    tagline: {
      en: 'Behavioral Diagnostics Test',
      ko: '심리 성향 분석 테스트',
    },
    description: {
      en: 'An interactive diagnostics platform combining responsive UI with quantitative behavioral data modeling to assess personal profiles.',
      ko: '정량화된 데이터 모델을 기반으로 사용자의 성향과 행동 유형을 진단하는 인터랙티브 설문 플랫폼입니다.',
    },
    status: 'live',
    badgeText: {
      en: 'ONLINE',
      ko: '운영 중',
    },
    accentColor: 'indigo',
    iconType: 'psychology',
  },
  {
    id: 'mbti-matrix',
    name: 'MBTI Matrix',
    domain: 'mbti.coniteck.cc',
    url: 'https://mbti.coniteck.cc/',
    category: {
      en: 'Data Analytics / Research',
      ko: '데이터 분석 / 연구',
    },
    tagline: {
      en: 'Personality Correlation Engine',
      ko: '성격 유형 데이터 분석 엔진',
    },
    description: {
      en: 'An intelligence engine analyzing interaction dynamics and behavioral correlations among personality archetypes.',
      ko: '성격 유형 간의 상호작용 패턴과 상관관계를 정밀 분석하는 데이터 인텔리전스 엔진입니다.',
    },
    status: 'coming_soon',
    badgeText: {
      en: 'COMING SOON',
      ko: '준비 중',
    },
    accentColor: 'slate',
    iconType: 'ai',
  },
];

export function getServices(lang: SupportedLang = 'en'): LocalizedSubService[] {
  return RAW_SUB_SERVICES.map(item => ({
    id: item.id,
    name: item.name,
    domain: item.domain,
    url: item.url,
    category: item.category[lang] || item.category.en,
    tagline: item.tagline[lang] || item.tagline.en,
    description: item.description[lang] || item.description.en,
    status: item.status,
    badgeText: item.badgeText[lang] || item.badgeText.en,
    accentColor: item.accentColor,
    iconType: item.iconType,
  }));
}

export const COMPANY_INFO = {
  name: 'Coni Teck',
  fullName: 'Coni Teck Technologies',
  slogan: 'Empowering the Next-Gen Web Experience',
  domain: 'coniteck.cc',
  foundedYear: 2024,
  location: 'Seoul, Korea',
  metrics: [
    { value: '99.9%', key: 'availability' },
    { value: '< 50ms', key: 'latency' },
    { value: '3+ Nodes', key: 'nodes' },
    { value: 'Zero-Daemon', key: 'architecture' },
  ],
};
