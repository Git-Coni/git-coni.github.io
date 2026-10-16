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
  accentColor: 'blue' | 'emerald' | 'indigo' | 'slate';
  iconType: 'finance' | 'game' | 'psychology' | 'ai';
}

export const SUB_SERVICES: SubService[] = [
  {
    id: 'fin-dashboard',
    name: 'FinConi',
    domain: 'fin.coniteck.cc',
    url: 'https://fin.coniteck.cc/',
    category: 'FinTech / Asset Dashboard',
    tagline: '자산 현황 & 금융 분석 대시보드',
    description: '분산된 금융 자산 현황, 포트폴리오 변동성 및 현금 흐름을 한눈에 조망할 수 있는 실시간 자산 관리 대시보드입니다.',
    status: 'live',
    badgeText: '운영 중',
    accentColor: 'emerald',
    iconType: 'finance',
  },
  {
    id: 'exo-world',
    name: 'ExoWorld',
    domain: 'exo.coniteck.cc',
    url: 'https://exo.coniteck.cc/',
    category: 'Interactive / Web Game',
    tagline: '웹 표준 기반 인터랙티브 게임',
    description: '별도의 설치 없이 모던 브라우저 환경에서 매끄럽게 구동되는 전략형 인터랙티브 웹 게임 프로젝트입니다.',
    status: 'live',
    badgeText: '운영 중',
    accentColor: 'blue',
    iconType: 'game',
  },
  {
    id: 'test-platform',
    name: 'Teto-Egen',
    domain: 'test.coniteck.cc',
    url: 'https://test.coniteck.cc/',
    category: 'Psychometrics Platform',
    tagline: '심리 성향 분석 테스트',
    description: '정량화된 데이터 모델을 기반으로 사용자의 성향과 행동 유형을 진단하는 인터랙티브 설문 플랫폼입니다.',
    status: 'live',
    badgeText: '운영 중',
    accentColor: 'indigo',
    iconType: 'psychology',
  },
  {
    id: 'mbti-matrix',
    name: 'MBTI Matrix',
    domain: 'mbti.coniteck.cc',
    url: 'https://mbti.coniteck.cc/',
    category: 'Data Analytics / Research',
    tagline: '성격 유형 데이터 분석 엔진',
    description: '성격 유형 간의 상호작용 패턴과 상관관계를 정밀 분석하는 데이터 인텔리전스 엔진입니다.',
    status: 'coming_soon',
    badgeText: '준비 중',
    accentColor: 'slate',
    iconType: 'ai',
  },
];

export const COMPANY_INFO = {
  name: 'coniteck',
  fullName: 'Coniteck Technologies',
  slogan: 'Empowering the Next-Gen Web Experience',
  koreanSlogan: '디지털 인프라와 인터랙티브 웹 솔루션을 연구하는 기술 스튜디오',
  description: 'coniteck은 고성능 정적 웹 아키텍처, 실시간 데이터 시각화 도구, 인터랙티브 웹 애플리케이션을 개발하고 서비스하는 모던 IT 기업입니다.',
  foundedYear: 2024,
  location: 'Seoul, Korea',
  metrics: [
    { label: '글로벌 가용성', value: '99.9%', description: '엣지 CDN 기반 무중단 분산 서비스' },
    { label: '서비스 레이턴시', value: '< 50ms', description: '초저지연 정적 에셋 서빙 파이프라인' },
    { label: '패밀리 서비스', value: '3+ Nodes', description: '독립형 마이크로 프론트엔드 생태계' },
    { label: '아키텍처', value: 'Zero-Daemon', description: '보안과 비용 효율을 극대화한 서버리스 설계' },
  ],
  principles: [
    {
      title: '신뢰성 높은 웹 인프라',
      description: '불필요한 런타임 종속성을 배제하고 글로벌 엣지 CDN을 통해 안정적이고 빠른 웹 환경을 제공합니다.',
    },
    {
      title: '데이터 중심 시각화',
      description: '복잡한 금융 및 분석 데이터를 직관적인 UI로 정제하여 의사결정을 지원합니다.',
    },
    {
      title: '경량 인터랙티브 경험',
      description: '웹 표준 기술을 바탕으로 플랫폼에 구애받지 않는 고품질 인터랙티브 콘텐츠를 구축합니다.',
    },
  ]
};
