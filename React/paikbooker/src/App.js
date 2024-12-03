import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreSearch from "./search/StoreSearch";
import GlobalStyle from "./styles/GlobalStyle";
import FixHeader from "./styles/FixHeader";
import Main from "./pages/Main";

function App() {
  return (
    <>
      {/* <GlobalStyle />
      <Router>
        <Routes>
          <Main>
            <Route element={<FixHeader />}>
              <Route path="/" />
            </Route>
          </Main>
        </Routes>
      </Router> */}
      <Main />
    </>
  );
}

export default App;
