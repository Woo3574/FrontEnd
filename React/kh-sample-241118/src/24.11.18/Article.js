import styled from "styled-components";

const HeadStyle = styled.h1`
  font-size: 2em;
  color: ro;
  text-align: center;
`;

const HeadLine = ({ title }) => {
  return (
    <>
      <HeadStyle>기사 제목 : {title}</HeadStyle>
    </>
  );
};

const Contents = ({ description }) => {
  return (
    <>
      <h1>본문 내용 : {description}</h1>;
    </>
  );
};

const NewsDate = ({ date }) => {
  return (
    <>
      <h1>작성일 : {date}</h1>
    </>
  );
};

const Article = ({ data }) => {
  return (
    <>
      <HeadLine title={data.title} />
      <Contents description={data.description} />
      <NewsDate date={data.date} />
    </>
  );
};

export default Article;
