# designer

의상 디자이너 자기소개 정적 사이트 (`index.html`, `styles.css`, `main.js`).

## GitHub Pages (꼭 한 가지 방법만 선택)

### 방법 1: GitHub Actions (권장)

1. 저장소 **Settings → Pages**
2. **Build and deployment** → **Source**에서 **GitHub Actions** 선택
3. `main`에 푸시되면 워크플로 [Deploy GitHub Pages](.github/workflows/pages.yml)가 실행됩니다.
4. **Actions** 탭에서 실행이 초록색인지 확인합니다.

배포 URL: `https://skwoo33.github.io/designer/`

### 방법 2: 브랜치에서 직접 배포

1. **Settings → Pages**
2. Source → **Deploy from a branch**
3. Branch **main**, folder **/ (root)** 저장

---

## Actions 배포가 실패할 때 (github-pages 빨간 X)

1. **Settings → Actions → General** 맨 아래 **Workflow permissions**  
   - **Read and write permissions** 를 선택하고 저장 (기본이 읽기 전용이면 `deploy-pages` 가 실패할 수 있음)
2. **Settings → Pages** 에서 Source가 **GitHub Actions** 인지 확인
3. **Settings → Environments → github-pages** 에 승인자(Required reviewers)가 있으면, Actions 실행 후 **승인 대기**가 걸려 실패처럼 보일 수 있음 → 규칙 완화 또는 승인 클릭

## 404가 날 때 확인할 것

| 원인 | 조치 |
|------|------|
| Pages 소스가 **None** 또는 설정 안 됨 | Settings → Pages에서 위 둘 중 하나로 소스 지정 |
| **Project** 사이트 주소만 있음 | 반드시 `https://<계정>.github.io/<저장소이름>/` 형태 (루트 `username.github.io` 아님) |
| 저장소가 **비공개** | 무료 계정에서는 Pages 정책을 확인하고, 필요 시 공개 저장소로 전환 |
| 반영 지연 | 설정 저장 후 1~5분 뒤 다시 시도 (Actions 사용 시 **Deployments** 로그 확인) |

저장소: [github.com/skwoo33/designer](https://github.com/skwoo33/designer)
