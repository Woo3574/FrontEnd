import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreSearch from "./search/StoreSearch";
import GlobalStyle from "./styles/GlobalStyle";
import Layout from "./styles/Layout";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        {" "}
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<StoreSearch />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
