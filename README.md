# react-testing-libary

### DEMO

- `gh-pages`로 배포
- 일일 API 호출 횟수 시간 당 60회 제한: 초과 시 에러 메시지 출력
- [데모페이지](https://kangyeollee.github.io/React-Testing-Library/)

### GIT CLONE

- `.env.local` 생성
- 깃허브 토큰 입력
  ```
  REACT_APP_GITHUB_TOKEN=my token
  ```

### TEST

- 테스트의 종류를 나열해보자면 다음과 같겠다.
  - 단위(Unit) 테스트
  - 통합(Integation) 테스트
  - E2E(End to End) 테스트
  - 기능(Functional) 테스트
  - 시스템(System) 테스트
  - UI(User Interface) 테스트
  - 회귀(Regression) 테스트
  - 성능(Performance) 테스트

### RTL(React-Testing-Library)를 직접 사용해봅시다.

- 단위 테스트 파일 작성
- 렌더링 시 React 컴포넌트 인스턴스가 아닌 실제 DOM 노드를 사용한다는 점
  - 테스트 환경이 사용자가 애플리케이션을 사용하는 환경과 비슷할 수록 테스트 신뢰도 향상
- 사용자가 앱과 상호작용하는 방식과 유사해야 한다는 라이브러리의 철학
  - 훅을 사용하는지, 고차 컴포넌트 방식을 사용하는지 신경 쓰지 않는다.
  - 사용자는 그저 인터페이스(버튼, 입력, 모달 등)를 보고 상호작용 할 뿐
  - 즉 올바른 props 나 state가 컴포넌트에서 변경되었는지 테스트하는 대신 사용자가 보고 수행하는 작업을 테스트

### Suspense를 익혀봅시다.

- 현재 배포 버전의 리액트에서는 `Suspense`와 `React.lazy` 를 이용해 코드 스플리팅을 적용할 수 있다.
- `Suspense`를 사용하는 김에 `React.lazy`를 이용해 코드 스플리팅 또한 적용했다.'
- 하지만 시험적 기능으로 데이터 불러오기와 관련한 매커니즘에도 `Suspense`를 이용할 수 있다.
- 해당 기능은 시험적 기능이기 때문에 사용을 위해서는 별도의 설정이 필요하다.
- 이 중에서 해당 설정을 옵션으로 제공하는 데이터 fetching 라이브러리 중 `useSWR`을 이용해 보다 간편히 `Suspense` 기능을 체험해보자. 아래와 같이 옵션값을 켜주는 것으로 간단히 적용이 가능하다.
  ```js
  const { data } = useSWR(getKey, fetcher, { suspense: true });
  ```
- `Suspense`는 데이터를 불러오는 흐름을 다음과 같이 변경할 수 있다.
  || 기존 | 서스펜스 |
  |:---:|:---:|:---:|
  |#1| api 호출 | api 호출 |
  |#2| 데이터 불러오기 시작 | 렌더링 시작 |
  |#3| 데이터 불러오기 완료 | 데이터 불러오기 완료 |
  |#4| 렌더링 시작 | - |
- 기존 흐름에 익숙하다면 당연히 다음 과정에서 의문이 생길 수 밖에 없다. 데이터가 준비되지 않았는데 어떻게 렌더링을 할 수 있는가?
- 이는 `<Suspense fallback={...loading}>`에 넘겨주는 `fallback`이 담당한다. `fallback`은 데이터 준비가 완료되지 않았을 때 보여주는 화면을 출력한다.
- 이를 이용할 때 가장 큰 장점은 구조가 단순화되고 가독성이 높아진다는 점이다. 기존 흐름에서는 데이터가 준비되지 않았을 때를 대비해 개별 컴포넌트 단위에서 로딩과 에러처리를 일일이 잡아주어야 했다.

  ```js
  const { data, isLoading, isError } = useUser(); // useSWR을 이용한 커스텀 훅이라고 가정

  if (isLoading) return <div>loading</div>;
  if (isError) return <div>error!</div>;

  return <div>출력 : {data}</div>;
  ```

- 그러나 `Suspense`를 이용하면 로딩 및 에러처리를 선언부에서 상위에 일괄적으로 관리하기 때문에 이러한 분기처리는 필요하지 않다. (에러의 경우는 `에러경계` 클래스를 구현해 처리한다.)

  ```jsx
  <Suspense fallback={<Spinner />}>
    <User />
  </Suspense>
  ```

  ```js
  // User.jsx
  const { data } = useUser();

  // 이 시점에서 data는 이미 준비 완료된 상태이다.
  return <div>출력 : {data}</div>;
  ```

- 아직은 실험적인 기능이기 때문에 다소 아쉬운 점도 있다. 모든 로딩 처리를 상위에서 처리하기 때문에 개별적인 컴포넌트 내부에서 소규모로 로딩 인디케이터 등을 적용하는 등의 방법은 계층을 또 나누어 구분해야 하는 등의 기법이 필요한데, 이는 선언적 처리 방식의 가장 큰 장점인 복잡도를 낮추는 방법에 대척점에 있지 않을까 하는 생각이 든다.
- 조금 더 자세한 내용은 [리액트 공식문서](https://ko.reactjs.org/docs/concurrent-mode-suspense.html) 또는 [토스 프론트엔드 기술 세션](https://toss.im/slash-21/sessions/3-1)의 내용을 참고하는 것을 추천한다!

### ReportWebVitals도 사용해 볼까요?

- 추후 예정...
