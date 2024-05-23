import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LastQuestionData from "./LastQuestionList.json";
import "../../css/QuestionScreen/QuestionScreen.scss";

const LastQuestion = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const currentData = LastQuestionData.find((item) => item.path === type);

  if (!currentData) {
    return <div>데이터를 찾을 수 없습니다.</div>;
  }

  const handleButtonClick = (result) => {
    navigate(`/result/${result}`);
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 클래스 추가
    document.body.classList.add("body-page");

    // 컴포넌트가 언마운트될 때 클래스 제거
    return () => {
      document.body.classList.remove("body-page");
    };
  }, []);

  return (
    <div>
      <div className="question_container">
        <div className="question_title_container">
          <div className="question_no">{currentData.question_no}</div>
          <div className="question_title">{currentData.question}</div>
        </div>
        <div className="answer_container">
          {currentData.answers.map((answer, index) => (
            <div className="answer_content" key={index}>
              <button onClick={() => handleButtonClick(answer.type)}>
                {answer.content}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastQuestion;
