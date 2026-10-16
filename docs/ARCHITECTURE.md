# 🏛️ coniteck 프론트엔드 아키텍처 가이드 (Architecture Guide)

## 1. 시스템 개요
`coniteck.cc`는 가상 IT 엔지니어링 기업 `coniteck`의 브랜드 랜딩 페이지이자, 분산 운영되는 패밀리 서비스 및 서브 프로젝트(`fin.coniteck.cc`, `exo.coniteck.cc`, `test.coniteck.cc` 등)를 유기적으로 연결하는 중앙 허브(Hub) 역할을 수행합니다.

## 2. 디렉터리 구조 및 레이어 분리
```
git_coni_io/
├── docs/                   # 아키텍처 및 코딩 규칙 문서
│   ├── ARCHITECTURE.md
│   └── CODING_RULES.md
├── public/                 # 정적 자산 (CNAME, Ads.txt, favicon 등)
├── src/
│   ├── data/               # 단일 진실 공급원(SSOT) 데이터 레이어
│   │   └── services.data.ts # 서브 프로젝트 및 패밀리 서비스 메타데이터
│   ├── ui/                 # UI 렌더링 컴포넌트
│   │   ├── Navbar.ts       # 상단 글로벌 브랜드 네비게이션 및 상태 표시기
│   │   ├── Hero.ts         # 모던 테크 히어로 섹션
│   │   ├── Solutions.ts    # 핵심 엔지니어링 도메인 & 솔루션 카드
│   │   ├── ServiceHub.ts   # 서브 프로젝트 미니 허브 위젯 (플로팅 독 & 모달/패널)
│   │   └── Footer.ts       # 푸터 및 패밀리 사이트 퀵 링크
│   ├── main.ts             # 애플리케이션 엔트리포인트 및 이벤트 바인딩
│   └── style.css           # 글로벌 스타일, 네온 글로우 및 글래스모피즘
├── index.html              # 루트 HTML 진입점
├── package.json            # 번들러 및 빌드 스크립트
├── tailwind.config.js      # 디자인 토큰 및 사이버네틱 테마 확장
└── tsconfig.json           # 엄격한 TypeScript 컴파일러 설정
```

## 3. 핵심 설계 원칙
1. **SSOT (Single Source of Truth) 데이터 분리**:
   - 서브 프로젝트 링크 및 메타데이터는 컴포넌트에 하드코딩하지 않고 `src/data/services.data.ts`에서만 관리합니다.
   - 새로운 서비스가 추가되면 데이터 배열에 객체를 하나 추가하는 것만으로 네비게이션, 허브 위젯, 푸터 등에 일괄 반영됩니다.
2. **반응형 & 모던 글래스모피즘 UI**:
   - 모바일, 태블릿, 데스크톱 환경에서 유연하게 대응하는 반응형 그리드를 채택합니다.
   - 다크 테마(Deep Navy / Black) 바탕에 사이버네틱 Cyan/Emerald/Indigo 액센트와 반투명 블러 효과를 적용합니다.
3. **정적 빌드 무결성 (Zero-Backend)**:
   - GitHub Pages 호스팅 환경에 최적화하여 런타임 서버 없이 순수 정적 번들(`npm run build`)로 빌드됩니다.
