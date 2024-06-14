import React, { useEffect } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import MiddleQuestionData from "./MiddleQuestionList.json";
import "../../css/QuestionScreen/QuestionScreen.scss";

const MiddleQuestion = () => {
  const { baseResult } = useParams();
  const navigate = useNavigate();
  const currentData = MiddleQuestionData.find(
    (item) => item.path === baseResult
  );

  if (!currentData) {
    navigate("/404");
    return null;
  }

  const handleButtonClick = (type) => {
    navigate(`/perfume/${baseResult}/${type}`);
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
      <div className="question-container">
        <div className="question-title-container">
          <div className="question-no">{currentData.question_no}</div>
          <div className="question-title">{currentData.question}</div>
        </div>
        <div className="answer-container">
          {currentData.answers.map((answer, index) => (
            <div className="answer-content" key={index}>
              <button onClick={() => handleButtonClick(answer.type)}>
                {answer.content}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MiddleQuestion;
