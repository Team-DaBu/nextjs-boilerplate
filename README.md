비사이드 17기 2팀의 Next.js 보일러 플레이트입니다

## 요구사항

이 프로젝트는 Node.js 18 이상의 런타임이 필요합니다.
패키지 매니저는 Yarn Berry 를 사용합니다.

현재 Storybook 의 호환성 이슈로 인해
Yarn Berry 의 NodeLinker 모드는 node-modules 로 설정되어 있습니다.

## 커맨드

아래와 같은 명령어가 있습니다.

```zsh
# 개발 서버
yarn dev

# 빌드 후 서버 시작
yarn start

# 전체 파일에 대한 문법 검사하기
yarn lint

# 전체 파일에 대한 문법 검사 후 수정하기
yarn lint --fix

# Jest 유닛 테스트
yarn test

# Playwright E2E 테스트
yarn test:e2e

# Jest 유닛 테스트 (CI 환경)
yarn test:ci

# Jest 테스트 커버리지 보기
yarn test:coverage

# Storybook 개발 서버 시작
yarn storybook

# Storybook 배포를 위한 빌드하기
yarn build-storybook
```

## 적용 된 기술 스택

- Next.js 14 이상
- Redux with Redux-Toolkit
- TDD
  - Unit Test (Jest)
  - E2E Test (Playwright)
  - UI Test (Storybook)
- Convention
  - ESLINT
    - Airbnb Rule
  - PRETTIER
- Style
  - TailwindCSS

## TO-DO

- Set up redux boilerplate with Clean Architecture
- Set up Husky, lint-staged
