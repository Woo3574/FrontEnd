import logo from "./logo.svg";
import "./App.css";
import JsxSyntax from "./24.11.18/JSX문법";
import GreetingComponent from "./24.11.18/GreetingComponent";
import WelcomeProps from "./24.11.18/WelcomeProps";

const productInfo = {
  date: "2024-05-16",
  product: "iphonePro",
};
function App() {
  return (
    <>
      <h1>여기는 App.js 입니다.</h1>
      {/* <JsxSyntax />
      <GreetingComponent /> */}
      <WelcomeProps
        name="곰돌이사육사"
        job="개발자"
        addr="경기도수원시"
        isAdult={true}
        info={productInfo}
      />
    </>
  );
}

export default App;
