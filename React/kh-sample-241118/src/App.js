import logo from "./logo.svg";
import "./App.css";
import JsxSyntax from "./24.11.18/JSX문법";
import GreetingComponent from "./24.11.18/GreetingComponent";
import WelcomeProps from "./24.11.18/WelcomeProps";
import Articles from "./24.11.18/Articles";
import MyComponent from "./24.11.18/MyComponent";
import BoxComponent from "./24.11.18/BoxComponent";
import Order from "./MyPlactice";
import Counter from "./24.11.19/ClassComponent";

const phone = {
  name: "fold3",
  productCompany: "samsung",
  price: 1500000,
  option: {
    first: "sizeUp",
    second: "memoryUp",
    third: "2battery",
  },
  color: {
    first: "yellow",
    second: "red",
    third: "black",
  },
};
function App() {
  return (
    <>
      <Order phone={phone} />
      <Counter />
    </>
  );
}

export default App;
