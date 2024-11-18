import logo from "../logo.svg";
import "../App.css";
import JsxSyntax from "./JSX문법";
import GreetingComponent from "./GreetingComponent";
import WelcomeProps from "./WelcomeProps";
import Articles from "./Articles";
import MyComponent from "./MyComponent";
import BoxComponent from "./BoxComponent";

const productInfo = {
  date: "2024-05-16",
  product: "iphonePro",
};
function App1118() {
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

export default App1118;
