import { useParams } from "react-router-dom";

import { TopHeadLines, similarTopicDetails } from "../data";
import ArticlesContents from "../components/organisms/ArticlesContents";
import ArticlesContents2 from "../components/organisms/ArticlesContents2";
import SimilarTopics from "../components/organisms/SimilarTopics";

import SubFooterMessage from "../components/organisms/SubFooterMessage";
const ArticlesFullPage = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = TopHeadLines.find((a) => a.id === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }
  return (
    <div className="md:px-[5.5rem] mx-[1.3rem]">
      <p className="text-center font-bold md:text-[3.6rem] md:w-[63.7rem] m-auto mt-[5.5rem] mb-[1.1rem]">
        {article.fullHeader}
      </p>
      <p className="text-[#AFADB5] text-center font-medium md:w-[47.2rem] m-auto md:mb-[2.6rem]">
        {article.fullDesc}
      </p>
      <div className="md:w-[68.9rem] md:h-[30.6rem] m-auto">
        <img src={article.image} alt="" className="w-full h-full " />
      </div>
      <div>
        <ArticlesContents />
        <ArticlesContents2 />
      </div>
      <p className="text-[#FFB23F] font-bold text-center">Similar Topics</p>
      <p className="text-center font-bold md:text-[2.4rem] md:mb-[2.8rem] mb-[2.8rem] text-[1.2rem]">
        Maybe you’re interested
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-x-7 mb-[10rem] gap-y-5">
        {similarTopicDetails.map((article) => (
          <SimilarTopics key={article.id} {...article} />
        ))}
      </div>
      <div className="mb-[3.7rem]">
        <SubFooterMessage
          message="Subscribe our newsletter"
          text="Let's Talk"
          image="/arrow-right.svg"
        />
      </div>
    </div>
  );
};

export default ArticlesFullPage;
