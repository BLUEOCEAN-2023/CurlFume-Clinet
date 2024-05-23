import React from "react";
import { useParams } from "react-router-dom";
import "../../css/ResultScreen/ResultScreen.scss";
import ResultList from "./ResultList.json";
import headerImg from "../../IMG/ResultScreen/header.png";
import footerImg from "../../IMG/ResultScreen/footer.png";

const ResultScreen = () => {
  // URL에서 result 파라미터를 가져옴
  const { result } = useParams();

  // result 파라미터와 일치하는 데이터를 ResultList에서 찾음
  const data = ResultList.find((item) => item.path === result);

  if (!data) {
    return <div>데이터를 찾을 수 없습니다.</div>;
  }

  // 이미지 경로는 public 폴더 기준으로 설정됩니다.
  const mainPicture = data.picture;
  const perfumes = data.perfume.map((perfume) => ({
    ...perfume,
    image: perfume.image,
  }));
  const keywords = data.keyword;

  return (
    <div className="result-screen">
      <header>
        <img src={headerImg} alt="Header" className="header-img" />
      </header>
      <main>
        <div className="keywords">
          {keywords.map((keyword, index) => (
            <h1 key={index} className="keyword">
              {keyword.content}
            </h1>
          ))}
        </div>
        <img
          src={mainPicture}
          alt={`${data.path} Picture`}
          className="main-picture"
        />
        <div className="perfumes">
          {perfumes.map((perfume, index) => (
            <div key={index} className="perfume">
              <img src={perfume.image} alt={`${perfume.title} Image`} />
              <h1>{perfume.title}</h1>
              <p>{perfume.detail}</p>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <img src={footerImg} alt="Footer" className="footer-img" />
      </footer>
    </div>
  );
};

export default ResultScreen;
