// 시작 컴포넌트

import React from "react";
import "../../css/StartScreen/StartScreen.scss";
import StartScreenImg from "../../IMG/StartScreenImg.png";

const StartScreen = () => {
  return (
    <>
      <div className="bgImg">
        <img src={StartScreenImg} />
        <div className="bgImgText">
          <p>Curl Fume</p>
        </div>
        <div className="bgImgBtn">
          <button>시작하기</button>
        </div>
      </div>
    </>
  );
};

export default StartScreen;
