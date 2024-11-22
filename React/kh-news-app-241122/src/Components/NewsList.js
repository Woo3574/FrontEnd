import styled from "styled-components";
import NewsItem from "./NewsItems";
import { useEffect, useState } from "react";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const NewsList = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    // async가 있어서 다이렉트를 불러올수가 없다
    // 밑에 내부코드는 비동기(외부에선 내부 이 함수가 있는지 모른다)
    // 상대가 응답이 언제올지 모를때 비동기를 건다

    // useEffect의 콜백함수 안에 다시 함수를 만들어준 이유
    // useEffect의 콜백 함수는 비동기적으로 작동할 수 없으므로, 비동기 작업을 처리하기 위해
    // 응답이 언제 올지 모르기 때문에 비동기로 처리한다.
    // 응답 두개 이상 대기 시 순서가 필요하다면 하나의 useEffect 안에 나열하면 되고, 상관없다면 useEffect 를 두개로 분리
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=1d087979698d4b8ca3e9c262cfdd5373"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <NewsListBlock>
      {articles &&
        articles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))}
    </NewsListBlock>
  );
};
export default NewsList;
