# NextJS Introduction

### 라이브러리 vs 프레임워크
- 라이브러리: 내가 라이브러리를 호출한다.
- 프레임워크: 프레임워크가 내 코드를 호출한다.

### React vs NextJS
- 라이브러리의 예) create-react-app
  - 라우팅을 하기 위해서 React Router를 사용해야 한다.
  - client-side rendering: 브라우저가 유저가 보는 UI를 만든다. 이때 `<div id="root">`를 제외한 모든 것은 자바스크립트다.
  <img width="1006" alt="image" src="https://user-images.githubusercontent.com/64337152/154790921-f20e7902-b2fa-4bce-b955-66009c0fab0a.png">


- 프레임워크의 예) Next.js
  - ReactDOM을 import하지 않아도 index.ts에서 **알아서** 보여준다.
  - pages 안에 파일을 만들면 이름에 따라 **라우팅**이 된다. 이때 컴포넌트 이름은 중요하지 않다. `export default`로 명시된 것이 화면에 보인다.
  - useState 같은 훅을 사용하지 않고 `<h1>Hello</h1>`처럼 적을 땐 React를 import하지 않아도 된다.

<br>

```
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```
