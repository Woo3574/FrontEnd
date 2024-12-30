import axios from "axios";
import Commons from "../utils/Common";

const AxiosInstance = axios.create({
  baseURL: Commons.KH_DOMAIN,
});

// 토큰을 매번 실어줘야하기때문에
// 공통된 루틴으로 집어넣는다  뭘?? gpt에 물어봐야함 이게 뭐하는건지
AxiosInstance.interceptors.request.use(
  // 요청 인터셉터 추가
  async(config) => {
    const accessToken = Commons.getAccessToken();
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  // 응답 인터셉터 추가
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response & error.response.status === 401) {
      const newToken = await Commons.handleUnauthorized();
      if (newToken) {
        // 원래 하고자 했던 요청을 다시 시도
        error.config.headers.Authorization = `Bearer ${Commons.getAccessToken()}`;
        return AxiosInstance.request(error.config);
      }
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;