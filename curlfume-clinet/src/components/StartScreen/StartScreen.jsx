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
    <div className="bgImg">
      <img src={StartScreenImg} alt="Start Screen" />
      <button onClick={toNextScreen}>시작하기</button>
    </div>
  );
};

export default StartScreen;
