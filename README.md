# Counting Stocks(Front-End)

개인 투자자들을 위한 보기 쉬운 주식 현황 및 포트폴리오 대시보드 개발(Front-End Repository)

## Summary

  - [Deployed](https://counting-stocks-front-end.vercel.app/)
  - [Example](#example)
  - [Getting Started](#getting-started)
  - [Installing & Starting](#installing--starting)
  - [Deployment](#deployment)
  - [Built With](#built-with)
  - [Authors](#authors)
  - [License](#license)

## Example
> 추후 준비 예정

## Getting Started

이 지침을 따르시면 로컬 PC에서 개발과 테스트를 위한 해당 프로젝트의 사본을 실행, 설치, 배포시킬 수 있습니다.

### Prerequisites

프로젝트를 실행시키기 위해 다음 프로그램들이 필요합니다.

```
- NPM (https://nodejs.org/en)
- Git (https://git-scm.com)
```

## Installing & Starting

해당 프로젝트의 사본을 설치 및 실행하기 위해 다음 단계들을 거쳐야 합니다.

- git을 통해 로컬에 프로젝트 Clone 하기

  > 'https://github.com/gangslee/Counting-Stocks-FrontEnd.git' 를 통해 사용자의 로컬 PC로 프로젝트를 Clone 합니다.

* Window의 경우 Git Bash 등을 통해 입력합니다.
* Linux, MacOS 등등에서는 Terminal을 통해 입력합니다.
* GitHub Desktop을 통해서도 Clone이 가능합니다.

- 로컬 프로젝트의 NPM Update 하기

  > 로컬 프로젝트가 설치 된 위치에서 다음 명령어를 통해 앞서 설치한 NPM을 Update 합니다.

  ```
  npm update
  ```

- 프로젝트 실행하기
  > 로컬 프로젝트가 설치 된 위치에서 다음 명령어를 통해 프로젝트를 실행합니다.
  ```
  npm run dev
  ```

## Deployment

- 로컬 서버 배포

  > 로컬 프로젝트가 설치 된 위치에서 다음 명령어를 통해 프로젝트를 build 합니다.

  ```
  npm run build
  ```

  > 생성된 build 산출물들을 웹 서버의 root directory에 복사 후 다음 명령어를 통해 파일을 실행 시켜야 합니다.

  ```
  npm run start
  ```
 
- Vercel 배포
 
  > 만약 GitHub 계정이 있고 프로젝트가 GitHub에 올라와 있을 경우 Vercel을 통해 본 프로젝트와 같이 보다 손쉽게 배포 프로세스를 진행 시킬 수 있습니다.
  
  ```
  https://vercel.com/
  ```

## Built With

- [NextJS](https://nextjs.org/) - React 프레임워크
- [ApexCharts](https://apexcharts.com/) - 동적인 차트 및 그래프 생성 라이브러리

## Authors

- **이경수(grandnet1225@gmail.com)** - [gangselee](https://github.com/gangslee)

## License

[![License](https://img.shields.io/badge/license-mit-blue)](http://badges.mit-license.org)

- Licensed under the [MIT License](LICENSE)
