import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Styles/GlobalStyle";
import Home from "./pages/Home";
import About from "./pages/About";
import Profiles from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import Layout from "./Styles/Layout";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* 중첩Route */}
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile/:username" element={<Profiles />} />
            <Route path="articles" element={<Articles />} />
            <Route path="article/:id" element={<Article />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;