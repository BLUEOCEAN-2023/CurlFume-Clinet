import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/StartScreen/StartScreen.scss";
import StartScreenImg from "../../IMG/StartScreenImg.png";

const StartScreen = () => {
  let navigate = useNavigate();

  const toNextScreen = () => {
    navigate("/perfume");
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 클래스 추가
    document.body.classList.add("start-page");

    // 컴포넌트가 언마운트될 때 클래스 제거
    return () => {
      document.body.classList.remove("start-page");
    };
  }, []);

  return (
    <div className="bgImg">
      <img className="bg-img" src={StartScreenImg} alt="Start Screen" />
      <button className="start-btn" onClick={toNextScreen}>
        시작하기
      </button>
    </div>
  );
};

export default StartScreen;
