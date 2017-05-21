# 앵귤러 첫걸음 예제 코드

## 주요 변경사항 
1. 3장 예제 책의 코드 변경 ([변경내역](https://github.com/not-for-me/hb-angular-first/commit/7c78fc2f315e9ced3fde740e8bbf41ae2b2cd065)).
    * 3장 `다국어 환영 메시지 서비스` -> `다국어 환영 인사 서비스`
    * 3장 `한글` -> `한국어`


## 예제 실행 방법
* 먼저, 예제의 실행을 위해서는 다음의 도구가 필요합니다.
    1. `npm` 혹은 `yarn` 설치
    1. [앵귤러 CLI](https://github.com/angular/angular-cli) 설치 (`npm -g i @angular/cli`)

* 소스를 다운로드 받은 후에 각 프로젝트 폴더에서 패키지 인스톨 후에 예제를 직접 실행해 볼 수 있습니다.


### 예시
```
# 리파지토리 다운로드
$) git clone https://github.com/not-for-me/hb-angular-first.git

# 프로젝트 폴더 
$) cd hb-angular-first/ch03/ng-welcome-msg-app

# 패키지 설치
$) npm install (혹은 yarn)

# 앵귤러 CLI 개발 서버 
$) ng serve

# 브라우저에서 http://localhost:4200 에서 예제 실행 확인
```

## 단계적으로 예제 따라가기
* 예제의 모든 커밋은 책의 내용에 따라 순차적으로 변경내역이 반영되어 있습니다.
* 특별히 중요한 변경내역에는 태그를 붙여두어 손쉽게 특정 커밋을 체크아웃 받을 수 있습니다.

### 예시
```
# 3장의 4번째 변경내역 체크아웃
$) git checkout ch3-4
```

## 주요 예제 온라인 실습 코드
* 일부 간단한 예제의 경우 온라인에서 바로 동작 예제를 확인할 수 있도록 다음의 링크를 제공합니다. 

| 장 | 링크 | 실습 예제 |
| - |:----------------------------------------------| --------- |
| 4 | [https://embed.plnkr.co/nSKxNw](https://embed.plnkr.co/nSKxNw)| NgIf 지시자 |
| 4 | [https://embed.plnkr.co/KyGLSK](https://embed.plnkr.co/KyGLSK) | NgFor 지시자 |
| 4 | [https://embed.plnkr.co/OI7zup](https://embed.plnkr.co/OI7zup) | NgSwitch 지시자 |
| 4 | [https://embed.plnkr.co/goPGcq](hhttps://embed.plnkr.co/goPGcq) | Pipe |
| 6 | [https://embed.plnkr.co/OVQ7Eu](https://embed.plnkr.co/OVQ7Eu) | ViewChild |
| 6 | [https://embed.plnkr.co/R9ppp3](https://embed.plnkr.co/R9ppp3) | 템플릿 참조 변수 |
| 6 | [https://embed.plnkr.co/SwHzA3](https://embed.plnkr.co/SwHzA3) | 컨텐트 프로젝션 |
| 6 | [https://embed.plnkr.co/55lLof](hhttps://embed.plnkr.co/55lLof) | NgOnInit/Destory |
| 6 | [https://embed.plnkr.co/ZqfVSF](https://embed.plnkr.co/ZqfVSF) | NgOnChanges |
| 6 | [https://embed.plnkr.co/3gLODm](https://embed.plnkr.co/3gLODm) | DoCheck |
| 책에 없음 | [https://embed.plnkr.co/QB5jlX](https://embed.plnkr.co/QB5jlX) | 지시자의 라이프 사이클 |
| 책에 없음 | [https://embed.plnkr.co/nRcg7v](https://embed.plnkr.co/nRcg7v) | 프로퍼티 바인딩 관계 |
| 8 | [https://embed.plnkr.co/LfXMl3](https://embed.plnkr.co/LfXMl3) | NgModel |
