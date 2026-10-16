# 🤖 AGY 표준 개발 및 워크플로우 가이드

본 문서는 `git-coni.github.io` 프로젝트에서 AI 에이전트(AGY)가 모든 작업 요청을 수행하기 전 가장 먼저 참고해야 하는 단일 진실 공급원(SSOT) 지침입니다.

## 📌 1. 기본 원칙
1. **가이드 우선 참조:** 모든 사용자 프롬프트 수신 시 가장 먼저 본 `AGENTS.md` 문서를 확인하고 절차를 준수한다.
2. **이슈 기반 개발:** 모든 작업은 GitHub Issue에 명시된 요구사항을 바탕으로 진행한다.
3. **직접 main 푸시 금지:** 모든 변경 작업은 별도의 기능 브랜치(`feature/...` 또는 `fix/...`)에서 수행하며, `gh pr create`를 통해 PR을 생성하여 사용자가 검토 후 `main`에 머지하도록 한다.
4. **호스팅 특성 준수:** 본 프로젝트는 GitHub Pages(coniteck.cc)를 통한 정적 호스팅이므로, 백엔드 서버나 미니 PC 포트 상시 데몬을 띄우지 않고 순수 빌드 검증(`npm run build`) 위주로 작업한다.

---

## 🔄 2. 표준 작업 단계 (Lifecycle)

### Step 1: 작업 요구사항 분석
- 사용자가 이슈 번호를 지정하면 `gh issue view {이슈번호}` 명령어로 상세 요구사항을 조회한다.
- 이슈 번호가 지정되지 않은 경우 `gh issue list`를 확인하거나, 사용자 요청에 맞춰 신규 이슈를 먼저 생성(`gh issue create`)한 뒤 진행한다.

### Step 2: 최신 소스 동기화 및 전용 브랜치 생성
- `main` 브랜치로 이동 후 원격을 최신화한다:
  ```bash
  git checkout main
  git pull origin main
  ```
- 작업 성격에 맞는 신규 브랜치를 생성하고 전환한다:
  - 기능 개발: `feature/{이슈번호}-{기능명}` (예: `feature/1-add-hero-section`)
  - 버그 수정: `fix/{이슈번호}-{버그명}` (예: `fix/2-broken-link`)
  ```bash
  git checkout -b feature/{이슈번호}-{기능명}
  ```

### Step 3: 변경 작업 및 빌드 검증
- 요구사항에 맞춰 코드 수정 및 정적 자산(assets)을 업데이트한다.
- GitHub Pages 배포 환경에 영향이 없도록 빌드 검증을 수행한다:
  - 프로젝트에 `package.json` 및 빌드 스크립트가 구성되어 있는 경우:
    ```bash
    npm run build
    ```
  - 순수 HTML/CSS/JS인 경우 링크 깨짐, 상대 경로, 브라우저 콘솔 오류 유발 요소 등을 꼼꼼히 점검한다.
- 백엔드 서버 데몬이나 포트 상시 리스닝 프로세스는 실행하지 않는다.

### Step 4: 변경 사항 커밋 및 원격 브랜치 푸시
- 변경된 파일 상태를 확인하고 명확한 커밋 메시지를 작성한다:
  ```bash
  git status
  git add .
  git commit -m "feat: {작업 내용 요약} (#{이슈번호})"
  git push origin {브랜치명}
  ```
- 커밋 컨벤션 예시:
  - `feat`: 새로운 기능 추가
  - `fix`: 버그 수정
  - `docs`: 문서 수정
  - `style`: 코드 포맷팅, 스타일 변경
  - `refactor`: 코드 리팩토링

### Step 5: Pull Request 생성 및 리뷰 요청
- GitHub CLI를 사용하여 이슈와 연결된 PR을 생성한다:
  ```bash
  gh pr create --base main --head {브랜치명} --title "feat: {작업 내용 요약}" --body "Closes #{이슈번호}

  ## 작업 내용
  - 상세 변경 사항"
  ```
- 생성된 PR URL을 사용자에게 보고하고, 검토 후 `main` 브랜치에 머지되도록 안내한다.
- 에이전트가 독단적으로 `main` 브랜치에 직접 푸시하거나 강제 머지하지 않는다.

---

## ⚙️ 3. 환경별 유의사항
- **리눅스 미니 PC 환경:**
  - 리소스 절약을 위해 불필요한 백그라운드 프로세스 및 데몬을 남기지 않는다.
  - 파일 및 디렉터리 권한을 손상시키지 않도록 주의한다.
- **GitHub Pages (coniteck.cc):**
  - CNAME 설정(`CNAME` 파일) 및 정적 라우팅/상대 경로 구조가 훼손되지 않도록 유지한다.
  - 배포 산출물이 올바르게 배포되는지 점검한다.
