import React from "react";
import Questions from "./QuestionList.json";
// import "../../css/QuestionScreen/QuestionScreen.scss";

const Question = () => {
  return (
    <>
      <div>
        {Questions.map((list) => (
          <div className="question_container" key={list.id}>
            <div className="title">{list.question}</div>
            <div className="answer_container">
              {list.answers.map((answer, index) => (
                <div className="answer_content" key={index}>
                  <button>{answer.content}</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Question;
