# [앵귤러 첫걸음](http://www.hanbit.co.kr/store/books/look.php?p_code=B3348481708)

<img src="https://raw.githubusercontent.com/not-for-me/hb-angular-first/master/resources/angular_first_cover.jpg" width="240">

* [온라인 미리보기](https://www.yumpu.com/xx/document/view/58546516)

* [출판사 (한빛미디어)](http://www.hanbit.co.kr/store/books/look.php?p_code=B3348481708)
* [Yes24](http://www.yes24.com/24/goods/41070512)
* [알라딘](http://aladin.kr/p/cowyM)
* [교보문고](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788968486807&orderClick=LEA&Kc=)
* [반디앤루니스](http://www.bandinlunis.com/front/product/detailProduct.do?prodId=4072669)
* [인터파크](http://book.interpark.com/product/BookDisplay.do?_method=detail&sc.shopNo=0000400000&sc.prdNo=267622241&sc.saNo=003002001&bid1=search&bid2=product&bid3=title&bid4=001)

## Angular 5 버전 반영 
* 최신 버전이 반영되었습니다. 
* 최신 버전은 책의 예제와 약간의 차이가 있습니다. 책의 예제코드는 `ng-v4` 태그의 커밋을 참조해 주세요.
```
git checkout ng-v4
```

* 관련 이슈 [#19](https://github.com/not-for-me/hb-angular-first/issues/19)

## 오탈자 및 오류/변경 사항
1. 3장 예제 책의 코드 변경 ([변경내역](https://github.com/not-for-me/hb-angular-first/commit/7c78fc2f315e9ced3fde740e8bbf41ae2b2cd065)).
   * 3장 `다국어 환영 메시지 서비스` -> `다국어 환영 인사 서비스`
   * 3장 `한글` -> `한국어`

2. 43쪽 2번째 클래스 예제 코드
   * constructor(public `string` ...) -> constructor(public `name` ...)

3. 214쪽 그림 6-16 위 단락 4번째줄
   * [그림 6-16]의 `우측` 상단에는 -> [그림 6-16]의 `좌측` 상단에는
   * 자식 컴포넌트가 `좌측`에 선언되어 있습니다. -> 자식 컴포넌트가 `우측`에 선언되어 있습니다.

4. 70쪽 양방향 데이터 바인딩 맛보기
   * Angular CLI가 1.1 이후에 변경된 내용이 발생하여 70쪽 예제를 실습을 위해 추가 작업이 필요합니다.
   * src/app/app.module.ts 파일에 다음 링크와 같이 코드를 수정해야 합니다. [코드 링크](https://github.com/not-for-me/hb-angular-first/blob/17f66ce3129f1f948881d8553f3b024f184dba31/ch03/ng-welcome-msg-app/src/app/app.module.ts)

## 예제 코드 실행 방법
* 먼저, 예제의 실행을 위해서는 다음의 도구가 필요합니다.
    1. `npm` 혹은 `yarn` 설치
    1. [앵귤러 CLI](https://github.com/angular/angular-cli) 설치 (`npm -g i @angular/cli`)

* 소스를 다운로드 받은 후에 각 프로젝트 폴더에서 패키지 인스톨 후에 예제를 직접 실행해 볼 수 있습니다.
* [참고] 예제 코드 실행방법: [Angular CLI에서 yarn 사용하기](https://youtu.be/FBMTvESUaiU)

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
# 태깅된 목록을 조회합니다.
$) git tag -l

# 5장의 태그만 보고 싶을 
$) git tag -l | grep -e ch5

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
