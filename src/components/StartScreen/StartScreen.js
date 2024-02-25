// 시작 화면 구성 컴포넌트

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../css/StartScreen/StartScreen.module.css";

function StartScreen() {
  let navigate = useNavigate();

  const toNextScreen = () => {
    navigate("/perfume1");
  };

  return (
    <div className={styles.startScreen}>
      <div className={styles["backgroundImg"]}>
        <img src="../../img/StartScreen/StartScreen.png" alt="시작 화면 배경" />
      </div>
      <div className={styles["body"]}>
        <div className={styles["title"]}>
          <p>Curl Fume</p>
          <p className={styles["subtitle"]}>당신의 향기를 찾아드립니다</p>
          <div className={styles["startButton"]}>
            <button className={styles["testStart"]} onClick={toNextScreen}>
              시작하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
