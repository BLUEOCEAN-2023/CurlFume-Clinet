// 시작 컴포넌트

import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/StartScreen/StartScreen.scss";
import StartScreenImg from "../../IMG/StartScreenImg.png";

const StartScreen = () => {
  let navigate = useNavigate();

  const toNextScreen = () => {
    navigate("/perfume");
  };

  return (
    <>
      <div className="bgImg">
        <img src={StartScreenImg} />
        <div className="bgImgBtn">
          <button onClick={toNextScreen}>시작하기</button>
        </div>
      </div>
    </>
  );
};

export default StartScreen;
