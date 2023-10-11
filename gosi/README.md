# 해커스공무원

REACT 기반으로한 해커스공무원 클론코딩

## 코드 정렬

vsCode 내 익스텐션 `prettier`로 통일

### 설정방법

1. `prettier` 설치
2. Settings > Search setting `Default Formatter` 검색 후 `prettier` 선택
3. Settings > Search setting `Format On Save` 체크

## `import`, `include` 방식

baseUrl `src`로 설정하였기 때문에 경로는 src 이후만 작성
`jsconfig.json`파일 적용 확인
`App.jsx`와 `header.jsx`에 예시 참고

## gnb 내 링크 연결 방법

`header.jsx` 파일 내 `<Routes>` 내 본인 루트 파일 생성 후 `gnb`에 연결

## 파일 구조

#### `pages` - 페이지 index

- `pages`폴더 내 작업해야할 폴더 생성 후 하위에 `index.jsx` 생성

#### `components` - 모든 컴포넌트 파일

- `components`폴더 내 작업해야할 폴더 생성 후 하위에 컴포넌트 파일들 생성
- 파일 명은 카멜 표기법으로 작성 (첫 문자를 소문자로 표기, 그 다음 문자부터는 대문자로 표기)

#### `scss` - 모든 scss 파일

- 파일 명은 파스칼 표기법로 작성 (첫문자를 대문자로 시작)

## 슬라이드 (`react-slick`)

모든 슬라이드는 `react-slick` 사용

### 사용방법

- [react-slick 공식문서](https://react-slick.neostack.com/)
- 사용하고자 하는 파일에서 `import 후 사용`
- `pages/book/index.jsx` 참고

## 데이터

각 데이터는 `mocks` 폴더 내 파일 생성하여서 임시 데이터로 사용

- `mocks/book.json` 파일과 `pages/book/index.jsx` 파일 참고

## 담당 작업

- 수강신청 - 민기
- 선생님 - 누리
- 교재,서점 - 수민
- 합격수기 - 수민
- 무료강좌 - 민기
- 수험정보 - 누리
- 모의고사 - 예나
- 이벤트 - 예나
