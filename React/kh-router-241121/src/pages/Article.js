import { useParams } from "react-router-dom";
// useParams 원하는 경로에서 값을 추출하는 것

const Article = () => {
  const { id } = useParams();
  return (
    <>
      <h2>게시글 {id} 입니다.</h2>
    </>
  );
};

export default Article;
