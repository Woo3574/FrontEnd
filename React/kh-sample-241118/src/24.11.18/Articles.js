import Article from "./Article";

const data = [
  {
    title: "정치",
    description:
      "트럼프, 에너지부 장관에 '셰일 혁명' 선구자 지명…셰일가스주 강세뉴스1",
    date: "2024-11-13",
  },
  {
    title: "경제",
    description: "코스닥 상장사 절반 3분기 적자…SFA·에코프로비엠",
    date: "2024-11-15",
  },
  {
    title: "사회",
    description: "당진에 1조원 규모 ‘해저케이블 공장’ 조성…“500명 고용 창출",
    date: "2024-11-16",
  },
];

const Articles = () => {
  return (
    <>
      <h1>오늘의 뉴스</h1>
      {data && data.map((e) => <Article data={e} />)}
    </>
  );
};

export default Articles;
