// 첫 번째 질문 컴포넌트

import React from "react";
import "../../css/QuestionScreen/QuestionScreen.scss";
import QuestionScreenImg from "./../../IMG/QuestionScreenImg.png";

const Question1 = () => {
  return (
    <>
      <div className="Question1">
        <div className="Questionbox">
          <div className="question_number">Q1</div>
          <div className="question_letter">내가 좋아하는 장소는?</div>
        </div>
        <div className="AnswerBtn">
          <button>꽃이 잔뜩 핀 정원</button>
          <button>책냄새가 나는 도서관</button>
        </div>
      </div>
    </>
  );
};

export default Question1;
