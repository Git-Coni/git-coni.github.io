# 🏛️ Coni Teck 프론트엔드 아키텍처 가이드 (Architecture Guide)

## 1. 시스템 개요
`coniteck.cc`는 모던 IT 기술 기업 `Coni Teck`의 공식 브랜드 홍보 웹사이트이자, 분산 운영되는 패밀리 서비스 및 서브 프로젝트(`fin.coniteck.cc`, `exo.coniteck.cc`, `test.coniteck.cc` 등)를 유기적으로 연결하는 중앙 허브(Hub) 역할을 수행합니다.

## 2. 디렉터리 구조 및 레이어 분리
```
git_coni_io/
├── docs/                   # 아키텍처 및 코딩 규칙 문서
│   ├── ARCHITECTURE.md
│   └── CODING_RULES.md
├── public/                 # 정적 자산 (CNAME, Ads.txt, favicon 등)
├── src/
│   ├── data/               # 단일 진실 공급원(SSOT) 데이터 레이어
│   │   ├── i18n.data.ts    # 다국어(EN/KO) 사전 데이터
│   │   ├── i18n.store.ts   # 언어 상태 관리 및 리스너
│   │   └── services.data.ts # 서브 프로젝트 및 패밀리 서비스 메타데이터
│   ├── ui/                 # UI 렌더링 컴포넌트
│   │   ├── Icons.ts        # 기하학적 대문자 C 심볼 및 SVG 아이콘
│   │   ├── Navbar.ts       # 상단 브랜드 네비게이션 & EN/KO 토글 & 허브 버튼
│   │   ├── Hero.ts         # 모던 기업 히어로 섹션 및 핵심 임팩트 지표
│   │   ├── Solutions.ts    # 핵심 사업 영역 & 엔지니어링 가치 카드
│   │   ├── ServiceHub.ts   # 서브 프로젝트 패밀리 디렉터리 & 미니멀 플로팅 허브
│   │   └── Footer.ts       # 푸터 및 공식 안내 링크
│   ├── main.ts             # 애플리케이션 엔트리포인트 및 이벤트 바인딩
│   └── style.css           # 글로벌 스타일 및 매트한 서피스 토큰
├── index.html              # 루트 HTML 진입점
├── package.json            # 번들러 및 빌드 스크립트
├── tailwind.config.js      # 디자인 토큰 및 기업 테마 설정
└── tsconfig.json           # 엄격한 TypeScript 컴파일러 설정
```

## 3. 핵심 설계 원칙
1. **SSOT (Single Source of Truth) 데이터 분리**:
   - 서브 프로젝트 링크 및 메타데이터는 컴포넌트에 하드코딩하지 않고 `src/data/services.data.ts`에서만 관리합니다.
   - 다국어 텍스트는 `src/data/i18n.data.ts` 및 `src/data/i18n.store.ts`를 통해 EN(기본) 및 KO로 체계적으로 분리 관리합니다.
2. **반응형 & 매트 모던 기업(Corporate Tech) UI**:
   - 과도한 네온/발광 효과를 지양하고 차분하고 세련된 슬레이트 다크 서피스와 절제된 블루 포인트를 채택합니다.
   - 대문자 'C' 기반의 현대적이고 기하학적인 테크 심볼과 가독성 높은 타이포그래피로 신뢰성을 전달합니다.
3. **정적 빌드 무결성 (Zero-Backend)**:
   - GitHub Pages 호스팅 환경에 최적화하여 런타임 서버 없이 순수 정적 번들(`npm run build`)로 빌드됩니다.
