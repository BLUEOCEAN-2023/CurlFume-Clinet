import React, { useState } from "react";
import Questions from "./QuestionList.json";
import { useNavigate } from "react-router-dom";
// import "../../css/QuestionScreen/QuestionScreen.scss";

const Question = () => {
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState(1); // 화면 넘어감
  const [perfume, setPerfume] = useState([]);
  const TOTAL_PAGES = 6;
  let baseResult = "";

  const handleButtonClick = (event) => {
    const { type } = event.currentTarget.dataset;
    setPerfume([...perfume, type]); // 선택한 버튼의 type 값을 perfume 배열에 추가
    setCurrentId(currentId + 1); // 화면 넘어가기
    // console.log(type); // 선택한 버튼의 type 값을 콘솔에 출력

    if (currentId === TOTAL_PAGES) {
      CheckFirst();
      navigate(`/result/${baseResult}`); // 변수가 설정되어야 결과 페이지로 이동됨
    }
  };

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

    baseResult = middleResult[0];
    console.log(baseResult);
    console.log("가장 많이 선택된 향:", middleResult[0]);
  };

  return (
    <>
      <div>
        {Questions.map(
          (item) =>
            item.id === currentId && (
              <div className="question_container" key={item.id}>
                <div className="question_no">{item.question_no}</div>
                <div className="title">{item.question}</div>
                <div className="answer_container">
                  {item.answers.map((answer, index) => (
                    <div className="answer_content" key={index}>
                      <button
                        data-type={answer.type}
                        onClick={handleButtonClick}
                      >
                        {answer.content}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Question;
