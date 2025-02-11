import axios from "axios";
import AxiosInstance from "./AxiosInstance";
import Commons from "../utils/Common";

const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 로그인
  login: async (email, pw) => {
    console.log("이메일 : ", email);
    console.log("패스워드 : ", pw);
    const login = {
      email: email,
      pwd: pw,
    };
    // return await axios.post(KH_DOMAIN + "/auth/login", login);
    return await AxiosInstance.post("/auth/login", login);
  },
  // 가입여부 확인
  regCheck: async (email) => {
    return await axios.get(KH_DOMAIN + `/auth/exists/${email}`);
  },
  // 회원 가입
  signup: async (email, pwd, name) => {
    console.log("이메일 : ", email);
    console.log("패스워드 : ", pwd);
    console.log("이름 : ", name);
    const member = {
      email: email,
      pwd: pwd,
      name: name,
      imgPath: "",
    };
    return await axios.post(KH_DOMAIN + `/auth/signup`, member);
  },
  // 전체 회원 조회
  memberList: async () => {
    // return await axios.get(KH_DOMAIN + "/member/list");
    return await AxiosInstance.get(`/member/list`);
  },
  // 개별 회원 조회
  memberInfo: async (email) => {
    // return await axios.get(KH_DOMAIN + `/member/${email}`);
    console.log(Commons.getAccessToken());
    return await AxiosInstance.get(`/member/${email}`);
  },
  // 채팅방 목록 가져오기
  chatList: async () => {
    return await axios.get(KH_DOMAIN + `/chat/list`);
  },
  // 채팅방 생성하기
  chatCreate: async(email, name) => {
    console.log(email, name);
    const chat = {
      email: email,
      name: name,
    };
    return await axios.post(KH_DOMAIN + `/chat/new`, chat);
  },
  // 채팅방 정보 가져 오기
  chatDetail: async(roomId) => {
    return await axios.get(KH_DOMAIN + `/chat/room/${roomId}`);
  },
};

export default AxiosApi;
