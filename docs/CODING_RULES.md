# 📜 coniteck 코딩 가이드라인 (Coding Rules)

본 문서는 `git-coni.github.io` 프로젝트 코드의 일관성과 품질을 유지하기 위한 코딩 규칙입니다.

## 1. 네이밍 및 파일 구조
- **데이터 파일**: `src/data/*.data.ts` 명명 규칙을 준수하며 정적 타입 정의와 함께 export 합니다.
- **UI 컴포넌트**: `src/ui/*.ts` 파스칼케이스(PascalCase)를 사용하며 HTML 문자열 반환 함수 또는 렌더링 클래스로 구성합니다.
- **상수(Constants)**: 대문자 스네이크 케이스(`UPPER_SNAKE_CASE`)로 정의합니다.

## 2. TypeScript 및 타입 안정성
- `any` 타입 사용을 금지하며 명시적인 인터페이스/타입 별칭(`interface`, `type`)을 작성합니다.
- `strict: true` 옵션을 준수하여 널(null) 안전성을 보장합니다.

## 3. 스타일링 원칙
- 인라인 스타일(`style="..."`)의 하드코딩을 지양하고 Tailwind CSS 유틸리티 클래스를 우선 사용합니다.
- 복합적인 네온 효과, 배경 애니메이션 등은 `src/style.css` 또는 `tailwind.config.js`의 테마 확장을 통해 재사용 가능하게 정의합니다.
- 접근성(Accessibility)을 위해 버튼 및 링크에는 적절한 `aria-label`, 키보드 인터랙션, `rel="noopener noreferrer"` 속성을 필수로 부여합니다.

## 4. 커밋 및 빌드 검증
- 모든 PR 제출 전 `npm run build`를 실행하여 컴파일, 타입 에러가 0건인지 검증합니다.
