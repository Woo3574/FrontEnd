// import logo from "./logo.svg";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserStore from "./context/UserStore";
import Login from "./pages/signup/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import ChatList from "./pages/chatting/ChatList";
import ChatRoomCreate from "./pages/chatting/ChatRoomCreate";
import Chatting from "./pages/chatting/Chatting";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserStore>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/chat" element={<ChatList/>}></Route>
              <Route path="/chat-create" element={<ChatRoomCreate/>}></Route>
              <Route path="/chatting/:roomId" element={<Chatting/>}></Route>
            </Route>
          </Routes>
        </Router>
      </UserStore>
    </>
  );
}

export default App;
