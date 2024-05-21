import React from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import LastQuestionData from "./LastQuestionList.json";
import "../../css/QuestionScreen/QuestionScreen.scss";

const LastQuestion = () => {
  const { baseResult, type } = useParams();
  const navigate = useNavigate();

  // path에 해당하는 데이터를 찾습니다.
  const currentData = LastQuestionData.find((item) => item.path === type);

  // currentData가 undefined인 경우 처리
  if (!currentData) {
    return <div>데이터를 찾을 수 없습니다.</div>;
  }

  const handleButtonClick = (result) => {
    // 버튼이 눌리면 결과 페이지로 이동합니다.
    navigate(`${result}`);
  };

  return (
    <>
      <div>
        <div className="question_container">
          <div className="question_title_container">
            <div className="question_no">{currentData.question_no}</div>
            <div className="question_title">{currentData.question}</div>
          </div>
          <div className="answer_container">
            {currentData.answers.map((answer, index) => (
              <div className="answer_content" key={index}>
                <button
                  data-result={answer.type} // type을 사용하여 데이터를 렌더링합니다.
                  onClick={() => handleButtonClick(answer.type)}
                >
                  {answer.content}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Outlet /> {/* 중첩된 라우트를 렌더링하는 부분 */}
    </>
  );
};

export default LastQuestion;
