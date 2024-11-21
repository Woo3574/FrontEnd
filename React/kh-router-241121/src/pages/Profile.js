// 게시글에서 새글(새창)을 띄울때 useParams 사용
import { useParams } from "react-router-dom";

const data = {
  frontend: {
    name: "곰돌이사육사",
    description: "리액트를 좋아하는 개발자",
  },
  backend: {
    name: "달빛사냥꾼",
    description: "스프링부트를 좋아하는 개발자",
  },
  dba: {
    name: "천재개발자",
    description: "DBA를 꿈꾸는 개발자",
  },
};

const Profiles = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <>
      <h1>사용자 프로필</h1>
      {profile ? (
        <>
          <h2>{profile.name}</h2>
          <h2>{profile.description}</h2>
        </>
      ) : (
        <p>존재 하지 않는 프로필입니다.</p>
      )}
    </>
  );
};

export default Profiles;
