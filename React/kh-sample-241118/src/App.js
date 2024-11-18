import logo from "./logo.svg";
import "./App.css";
import JsxSyntax from "./24.11.18/JSX문법";
import GreetingComponent from "./24.11.18/GreetingComponent";
import WelcomeProps from "./24.11.18/WelcomeProps";
import Articles from "./24.11.18/Articles";
import MyComponent from "./24.11.18/MyComponent";
import BoxComponent from "./24.11.18/BoxComponent";

const productInfo = {
  date: "2024-05-16",
  product: "iphonePro",
};
function App() {
  return (
    <>
      {/* <h1>여기는 App.js 입니다.</h1> */}
      {/* <JsxSyntax />
      <GreetingComponent /> */}
      {/* <WelcomeProps
        name="곰돌이사육사"
        job="개발자"
        addr="경기도수원시"
        isAdult={true}
        info={productInfo}
      />
      <hr />
      <WelcomeProps
        name="안유진"
        job="아이돌"
        addr="노잼 도시 대전"
        isAdult={true}
        info={productInfo}
      /> */}
      {/* <hr />
      <WelcomeProps
        name="장원영"
        job="아이돌"
        addr="노잼 도시 대전"
        isAdult={true}
        info={productInfo}
      />
      <hr /> */}
      {/* <Articles /> */}
      <MyComponent name="안유진" age={21} />
      <BoxComponent>첫 번째 박스 입니다.</BoxComponent>
      <BoxComponent>첫 번째 박스 입니다.</BoxComponent>
    </>
  );
}

export default App;
