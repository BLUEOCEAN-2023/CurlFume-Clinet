// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Questions from "./QuestionList.json";
import { useNavigate } from "react-router-dom";
import "../../css/QuestionScreen/QuestionScreen.scss";

const Question = () => {
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState(1);
  const [perfume, setPerfume] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [baseResult, setBaseResult] = useState("");
  const TOTAL_PAGES = 6;

  const handleButtonClick = (event) => {
    const { type } = event.currentTarget.dataset;
    setPerfume([...perfume, type]);
    setCurrentId(currentId + 1);
  };

  useEffect(() => {
    if (currentId > TOTAL_PAGES) {
      CheckFirst();
    }
  }, [currentId]);

  const CheckFirst = () => {
    let map = {};
    let middleResult = [];
    for (let i = 0; i < perfume.length; i++) {
      if (perfume[i] in map) {
        map[perfume[i]] += 1;
      } else {
        map[perfume[i]] = 1;
      }
    }
    let maxCount = Math.max(...Object.values(map));
    for (let count in map) {
      if (map[count] === maxCount) {
        middleResult.push(count);
      }
    }
    setBaseResult(middleResult[0]);
    navigate(`/perfume/${middleResult[0]}`);
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
      {Questions.map(
        (item) =>
          item.id === currentId && (
            <div className="question_container" key={item.id}>
              <div className="question_title_container">
                <div className="question_no">{item.question_no}</div>
                <div className="question_title">{item.question}</div>
              </div>
              <div className="answer_container">
                {item.answers.map((answer, index) => (
                  <div className="answer_content" key={index}>
                    <button data-type={answer.type} onClick={handleButtonClick}>
                      {answer.content}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Question;
