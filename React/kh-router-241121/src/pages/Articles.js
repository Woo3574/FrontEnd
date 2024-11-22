import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <ul>
      <li>
        <Link to="/article/1">게시글1</Link>
      </li>
      <li>
        <Link to="/article/2">게시글2</Link>
      </li>
      <li>
        <Link to="/article/3">게시글3</Link>
      </li>
    </ul>
  );
};

export default Articles;
