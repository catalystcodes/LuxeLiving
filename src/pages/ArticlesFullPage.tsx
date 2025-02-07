import { useParams } from "react-router-dom";

import { TopHeadLines } from "../data";
import ArticlesContents from "../components/organisms/ArticlesContents";
import ArticlesContents2 from "../components/organisms/ArticlesContents2";
const ArticlesFullPage = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = TopHeadLines.find((a) => a.id === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }
  return (
    <div className="px-[5.5rem]">
      <p className="text-center font-bold text-[3.6rem] w-[63.7rem] m-auto mt-[5.5rem] mb-[1.1rem]">
        {article.fullHeader}
      </p>
      <p className="text-[#AFADB5] text-center font-medium w-[47.2rem] m-auto mb-[2.6rem]">
        {article.fullDesc}
      </p>
      <div className="w-[68.9rem] h-[30.6rem] m-auto">
        <img src={article.image} alt="" className="w-full h-full " />
      </div>
      <div>
        <ArticlesContents />
        <ArticlesContents2 />
      </div>
    </div>
  );
};

export default ArticlesFullPage;
