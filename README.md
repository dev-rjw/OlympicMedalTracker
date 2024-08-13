# Olympic Medal Tracker

## 소개

올림픽에서 각 나라가 획득한 메달 수를 추적하는 프로젝트입니다.

-   노션 : https://teamsparta.notion.site/React-6-439909bf5f934f9ca19a13014ec87b61
-   완성작 : https://medal-tracker.vercel.app/

## 사용 기술

<div style="display:flex">
<img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
</div>

## 실행 방법

-   git clone
-   cd OlympicMedalTracker
-   yarn dev

## 과제 진행 순서

-   ✅1단계 : 프로젝트 셋업
    -   ✅Vite 를 이용해서 리액트 프로젝트를 셋업합니다.
-   ✅2단계 : 기본 UI 레이아웃 작성하기
    -   ✅App.jsx 파일에 간단한 UI를 작성하여 초기 레이아웃을 설정합니다.
-   ✅3단계 : 상태 관리와 메달 집계 추가 기능 구현
    -   ✅App.jsx 파일에서 국가리스트 상태를 관리하기 위해 useState를 사용합니다.
    -   ✅국가 이름과 메달 수를 입력하여 메달 집계 리스트에 추가하는 기능을 구현합니다.
-   ✅4단계 : 메달 집계 리스트 출력하기
    -   ✅리액트도 자바스크립트의 문법을 사용합니다. 자바스크립트 주차에서 배웠던 map 을 이용해 봅시다.
-   ✅5단계 : 메달 수 업데이트하기
    -   ✅이미 추가된 국가의 메달 수를 수정할 수 있는 기능을 추가합니다.
    -   ✅find 를 이용해 봅시다.
-   ✅6단계 : 메달 수 삭제
    -   ✅이미 추가된 국가를 삭제할 수 있는 기능을 추가합니다.
    -   ✅filter 를 이용해 봅시다.
-   🔼7단계 : 최종 테스트 및 코드 정리
    -   ✅코드 테스트:
        -   ✅작성한 코드가 정상적으로 동작하는지 테스트합니다.
        -   ✅각 기능(✅추가, ✅수정, ✅삭제, ✅정렬)이 예상대로 작동하는지 확인합니다.
    -   ❌컴포넌트 분리:
        -   ❌ 필요한 경우, UI 요소들을 개별 컴포넌트로 분리합니다.
        -   ❌예를 들어, 메달 입력 폼을 별도의 컴포넌트로 분리할 수 있습니다.
    -   ❌리팩터링:
        -   ❌코드의 중복을 제거하고, 가독성을 높이기 위해 리팩터링합니다.
        -   ❌상태 관리 로직을 더욱 간결하게 만들 수 있는지 확인합니다.
    -   ✅README 파일 작성:
        -   ✅프로젝트 구조, 실행 방법, 주요 기능에 대해 설명하는 `README` 파일을 작성합니다.

## 추가 과제 진행(24.08.14)

-   컴포넌트 분리
-   리팩터링
-   국가 추가 실패 시 기존 값 사라지는 오류 수정

## WHY?

1. JSX 문법이란 무엇일까요?<br> -> JavaScript + Xml(Html)을 합친 용어로, JavaScript에서 html을 html에서 JavaScript를 사용할 수 있습니다.<br>

2. 사용자가 입력하는 값, 또는 이미 입력된 값, 메달 정보와 같은 애플리케이션의 상태를 관리하기(추가, 변경, 삭제) 위해 리액트의 어떤 기능을 사용하셨나요?<br> -> 리액트의 useState를 사용하였습니다.<br>

3. 애플리케이션의 상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요?<br> -> 아직 컴포넌트 간 구현을 하지 않았지만, 한다면 props 방식으로 할 것 같습니다.<br>

4. 기능 구현을 위해 불변성 유지가 필요한 부분이 있었다면 하나만 설명해 주세요.<br> -> state중 countries 배열에 바로 객체를 push 하는 것이 아닌, 새 객체를 만들고 spread operator 방식을 사용하여 setCountries로 배열에 객체를 추가했습니다.<br>

5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 컴포넌트로 분리해 보셨나요? 그렇다면 어떠한 이점이 있었나요?<br> -> 아직 구현하지 못했습니다. 재제출 시 구현하도록 하겠습니다.<br>
