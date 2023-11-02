비사이드 17기 2팀의 Next.js 보일러 플레이트입니다

## 요구사항

이 프로젝트는 Node.js 18 이상의 런타임이 필요합니다.
패키지 매니저는 Yarn 을 사용합니다.

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

- Set up Storybook
- Set up Husky, lint-staged