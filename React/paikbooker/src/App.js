import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreSearch from "./search/StoreSearch";
import GlobalStyle from "./styles/GlobalStyle";
import FixHeader from "./styles/FixHeader";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<FixHeader />}>
            <Route path="/" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
