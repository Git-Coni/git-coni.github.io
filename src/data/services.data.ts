export interface SubService {
  id: string;
  name: string;
  domain: string;
  url: string;
  category: string;
  tagline: string;
  description: string;
  status: 'live' | 'beta' | 'coming_soon';
  badgeText: string;
  accentColor: 'cyan' | 'emerald' | 'indigo' | 'violet';
  iconType: 'finance' | 'game' | 'psychology' | 'ai';
}

export const SUB_SERVICES: SubService[] = [
  {
    id: 'fin-dashboard',
    name: 'FinConi',
    domain: 'fin.coniteck.cc',
    url: 'https://fin.coniteck.cc/',
    category: 'FinTech / Asset Dashboard',
    tagline: '실시간 자산 현황 & 금융 분석 대시보드',
    description: '분산된 금융 자산 현황, 포트폴리오 변동성 및 캐시플로우를 한눈에 파악하는 스마트 대시보드.',
    status: 'live',
    badgeText: 'ONLINE',
    accentColor: 'emerald',
    iconType: 'finance',
  },
  {
    id: 'exo-world',
    name: 'ExoWorld',
    domain: 'exo.coniteck.cc',
    url: 'https://exo.coniteck.cc/',
    category: 'Web Game / Interactive',
    tagline: '차세대 사이버네틱 웹 게임',
    description: '웹 표준 기술로 구현된 경량화 고성능 인터랙티브 브라우저 기반 Sci-Fi 웹게임.',
    status: 'live',
    badgeText: 'ONLINE',
    accentColor: 'cyan',
    iconType: 'game',
  },
  {
    id: 'test-platform',
    name: 'Teto-Egen',
    domain: 'test.coniteck.cc',
    url: 'https://test.coniteck.cc/',
    category: 'Psychometrics Platform',
    tagline: '테토-에겐 심리 성향 진단 서비스',
    description: '직관적인 인터페이스와 정량적 알고리즘 기반의 인터랙티브 심리 성향 분석 테스트.',
    status: 'live',
    badgeText: 'ONLINE',
    accentColor: 'indigo',
    iconType: 'psychology',
  },
  {
    id: 'mbti-matrix',
    name: 'MBTI Matrix',
    domain: 'mbti.coniteck.cc',
    url: 'https://mbti.coniteck.cc/',
    category: 'AI Engine / Research',
    tagline: '정밀 성격 유형 분석 엔진',
    description: '심층 데이터 마이닝과 행동 패턴 기반의 차세대 성격 유형 상관관계 엔진 (출시 예정).',
    status: 'coming_soon',
    badgeText: 'COMING SOON',
    accentColor: 'violet',
    iconType: 'ai',
  },
];

export const COMPANY_INFO = {
  name: 'coniteck',
  fullName: 'Coniteck Systems & Technologies',
  slogan: 'Architecting the Intelligent Web Horizon',
  koreanSlogan: '차세대 디지털 인프라 및 지능형 인터랙티브 웹 솔루션',
  description: 'coniteck은 고성능 정적 웹 아키텍처, 분산 자산 시각화 도구, 인터랙티브 웹 게임 엔진을 설계하고 실험하는 가상 IT 테크 랩입니다.',
  foundedYear: 2024,
  location: 'Seoul / Cyber Distributed Nodes',
  techStack: ['TypeScript', 'Vite', 'Tailwind CSS', 'High-Performance Web', 'Edge Architecture'],
};
