import React from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import MiddleQuestionData from "./MiddleQuestionList.json";

const MiddleQuestion = () => {
  const { baseResult } = useParams();
  const navigate = useNavigate();

  // MiddleQuestionData에서 baseResult 값과 일치하는 데이터를 찾습니다.
  const currentData = MiddleQuestionData.find(
    (item) => item.path === baseResult
  );

  // baseResult 값과 일치하는 데이터가 없을 경우, 404 페이지로 이동합니다.
  if (!currentData) {
    navigate("/404");
    return null;
  }

  const handleButtonClick = (type) => {
    // 버튼이 눌리면 해당 버튼의 타입으로 링크를 변경합니다.
    navigate(`/perfume/${baseResult}/${type}`);
  };

  return (
    <>
      <div>
        <div>{currentData.question_no}</div>
        <div>{currentData.question}</div>
        <div className="answer_container">
          {currentData.answers.map((answer, index) => (
            <div className="answer_content" key={index}>
              <button
                data-type={answer.type}
                onClick={() => handleButtonClick(answer.type)}
              >
                {answer.content}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Outlet /> {/* 중첩된 라우트를 렌더링하는 부분 */}
    </>
  );
};

export default MiddleQuestion;
