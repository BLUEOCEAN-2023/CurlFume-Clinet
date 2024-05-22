import React from "react";
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
      <Outlet />
    </div>
  );
};

export default MiddleQuestion;
