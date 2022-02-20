# NextJS Introduction

### 라이브러리 vs 프레임워크
- 라이브러리: 내가 라이브러리를 호출한다.
- 프레임워크: 프레임워크가 내 코드를 호출한다.

<br>

### React vs NextJS
<details>
<summary>라이브러리의 예) create-react-app</summary>
<blockquote>

  - 라우팅을 하기 위해서 React Router를 사용해야 한다.
  - client-side rendering: 브라우저가 유저가 보는 UI를 만든다. 이때 `<div id="root">`를 제외한 모든 것은 자바스크립트다. 브라우저가 react.js를 다운받고 내 코드를 다운받았을 때, 이때 react.js가 다른 것들을 렌더링하면 유저가 우리가 원했던 화면을 볼 수 있다. 즉, 브라우저가 js를 가져와서, client-side js가 모든 UI를 만든다.

<details>

<summary>

`<div id="root">`

</summary>

<img width="500" alt="image" src="https://user-images.githubusercontent.com/64337152/154790921-f20e7902-b2fa-4bce-b955-66009c0fab0a.png">

</details>
</blockquote>
</details>


<details>
<summary>프레임워크의 예) Next.js</summary>
<blockquote>

- ReactDOM을 import하지 않아도 index.ts에서 **알아서** 보여준다.<br>
- pages 안에 파일을 만들면 이름에 따라 **라우팅**이 된다. 이때 컴포넌트 이름은 중요하지 않다. `export default`로 명시된 것이 화면에 보인다.<br>
- useState 같은 훅을 사용하지 않을 땐 React를 import하지 않아도 된다.<br>
- next.js가 react.js를 백엔드에서 동작시켜서 페이지를 미리 만든다. 컴포넌트 렌더링이 끝나면 이게 HTML이 되고, 이걸 페이지의 소스코드에 넣어준다. -> 실제 HTML이 들어가서 로딩 중에 미리 렌더링된 화면을 볼 수 있다.<br>

<details>
<summary>ReactDOM</summary>

```typescript
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

</details>
</blockquote>
</details>

<br>

### redirects() vs rewrites()
- redirects: source -> destination으로 이동하면서 URL이 바뀐다.
- rewrites: source -> destination으로 이동하지만 URL이 바뀌진 않는다. 이 특성을 활용해서 API key를 숨길 수 있다.

<br>

### loading을 보여줄 것인가 말 것인가?!
1. 보여준다🙆‍♀️
    - API 응답이 오기 전에 loading 화면을 보여주고 이후에 결과를 표시한다.
    - 네이게이션은 있어도 데이터가 들어간 부분은 처음에 보이지 않는다.
2. 안 보여준다🙅‍♀️
    - `index.tsx`에서 `export async function getServerSideProps({}: GetServerSideProps)`을 사용한다. 백엔드에서 fetch한 결과를 HTML로 변환한 후에 보여준다. 이후에는 React.js가 props를 받아들여서 결과를 이용한다. 즉, **API 응답이 오기 전까지는 하얀 화면**이 보인다는 뜻이다.
    - 데이터를 HTML에 보여주기 때문에 Search Engine이 좋아한다. create-react-app으로 만든 건 `div` 하나밖에 보이지 않는다.

<br>

### `getServerSideProps`에 요청 주소 넣기
- 프론트에서는 `/api/movies`라고 입력해도 URL에 알아서 `http://localhost:3000`가 들어가기 때문에 요청이 되지만, 백엔드에서는 모르기 때문에 입력해줘야 한다.

<br>

### URL
- `movies/detail` -> moives 폴더 안에 `detail.tsx` 만들기
- `movies/123` -> moives 폴더 안에 `[id].tsx` 만들기
  - `movies/` -> moives 폴더 안에 `index.tsx` 만들기

<br>

### API Key 숨기기
<details>
<summary>

`<Link>` 사용하기

</summary>

1. `<Link>` tag

```HTML
<h4>
  <Link href={`/movies/${movie.id}`}>
    <a>{movie.original_title}</a>
  </Link>
</h4>
```
  <blockquote>
</blockquote>
</details>