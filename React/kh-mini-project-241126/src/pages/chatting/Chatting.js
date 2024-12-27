import React, {useState, useEffect, useRef} from "react";
import AxiosApi from "../../api/AxiosApi";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Commons from "../../utils/Common";
import { type } from "@testing-library/user-event/dist/type";

const ChatContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ChatHeader = styled.div`
  font-size: 1.5em;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  overflow-y: auto;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 20px;
`;

const Message = styled.div`
  max-width: 60%;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  background-color: ${(props) => (props.isSender ? "#DCF8C6" : "#E0E0E0")};
  align-self: ${(props) => (props.isSender ? "flex-end" : "flex-start")};
  border: ${(props) =>
    props.isSender ? "1px solid #DCF8C6" : "1px solid #E0E0E0"};
`;

const Input = styled.input`
  padding: 10px;
  width: 70%;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const SendButton = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
const CloseButton = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #f44336;
  color: white;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

const Chatting = () => {
  const [socketConnected, setSocketConnected] = useState(false); // 웹소켓 연결 여부
  const [inputMsg, setInputMsg] = useState(""); // 입력 메세지
  const [chatList, setChatList] = useState([]); // 채팅 글 목록
  const {roomId} = useParams(); // 채팅방 번호, 새로운 방 개설, 기존의 방에 대한 진입
  const [sender, setSender] = useState(""); // 보낸 사람
  const [roomName, setRoomName] = useState(""); // 채팅방 이름
  const ws = useRef(null); // 웹소켓 객체 생성, 소켓 연결 정보를 유지 해야 하짐나 렌더링과는 무관
  const navigate = useNavigate(); // 페이지 이동
  const email = localStorage.getItem("email");

  const onChangeMsg = e => {
    setInputMsg(e.target.value);
  }

  const onClickMsgSend = e=> {
    // 메세지 전송
    ws.current.send (
      JSON.stringify({
          type: "TALK",
          room: roomId,
          sender: sender,
          message: inputMsg,
      })
    );
    setInputMsg(""); // 전송 이후 입력창 지우기
  };

  const onEnterKey = e => {
    // 엔터키 입력 시, 공백 제거 후 비어있지 않으면 
    if (e.key === "Enter" && inputMsg.trim() !== "") {
      e.preventDefault(); // 기존 이벤트 무시
      onClickMsgSend(e);
    }
  };

  // 채팅 종료
  const onClickMsgClose = () => {
    ws.current.send (
      JSON.stringify({
          type: "CLOSE",
          room: roomId,
          sender: sender,
          message: inputMsg,
      })
    );
    ws.current.close();
    navigate("/chat")
  };

  useEffect(()=> {
    
  })

}