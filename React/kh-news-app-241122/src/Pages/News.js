import NewsList from "../Components/NewsList";
import Categories from "../Components/Categories";
import { useCallback, useState } from "react";

const News = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default News;
